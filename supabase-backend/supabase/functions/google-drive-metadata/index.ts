/// <reference types="https://deno.land/x/deno_dom@v0.1.36/deno-dom-wasm.d.ts" />
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

import { ERROR_MESSAGES, HTTP_STATUS } from "./constants.ts";
import {
  createOptionsResponse,
  createErrorResponse,
  createSuccessResponse,
} from "./utils.ts";
import {
  createSupabaseClient,
  getAuthenticatedUser,
  fetchGoogleDriveMetadata,
  checkFileExists,
  saveFileMetadata,
} from "./services.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return createOptionsResponse();
  }

  try {
    const authorization = req.headers.get("Authorization");
    if (!authorization) {
      return createErrorResponse(
        ERROR_MESSAGES.UNAUTHORIZED,
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    const supabaseClient = createSupabaseClient(authorization);
    const { user, userError } = await getAuthenticatedUser(supabaseClient);

    if (userError || !user) {
      return createErrorResponse(
        ERROR_MESSAGES.UNAUTHORIZED,
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    if (req.method !== "POST") {
      return createErrorResponse(
        ERROR_MESSAGES.METHOD_NOT_ALLOWED,
        HTTP_STATUS.METHOD_NOT_ALLOWED
      );
    }

    const { fileId } = await req.json();

    if (!fileId) {
      return createErrorResponse(
        ERROR_MESSAGES.FILE_ID_REQUIRED,
        HTTP_STATUS.BAD_REQUEST
      );
    }

    const fileExists = await checkFileExists(supabaseClient, fileId, user.id);
    if (fileExists) {
      return createErrorResponse(
        ERROR_MESSAGES.FILE_ALREADY_EXISTS,
        HTTP_STATUS.CONFLICT
      );
    }

    const metadata = await fetchGoogleDriveMetadata(fileId);
    const insertedFile = await saveFileMetadata(
      supabaseClient,
      metadata,
      user.id
    );

    return createSuccessResponse(insertedFile, metadata);
  } catch (error) {
    console.error("Function error:", error);

    if (error.message.includes("Google Drive API key")) {
      return createErrorResponse(
        ERROR_MESSAGES.GOOGLE_API_KEY_NOT_CONFIGURED,
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }

    if (error.message.includes(ERROR_MESSAGES.FAILED_TO_FETCH_METADATA)) {
      return createErrorResponse(
        ERROR_MESSAGES.FAILED_TO_FETCH_METADATA,
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        error.message
      );
    }

    if (error.message.includes(ERROR_MESSAGES.FAILED_TO_SAVE_METADATA)) {
      return createErrorResponse(
        ERROR_MESSAGES.FAILED_TO_SAVE_METADATA,
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        error.message
      );
    }

    return createErrorResponse(
      ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      error.message
    );
  }
});
