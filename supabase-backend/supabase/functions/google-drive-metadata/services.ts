/// <reference types="https://deno.land/x/deno_dom@v0.1.36/deno-dom-wasm.d.ts" />

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { GoogleDriveFileMetadata, FileInsertData } from "./types.ts";
import { GOOGLE_DRIVE_API_FIELDS } from "./constants.ts";

export function createSupabaseClient(authorization: string): SupabaseClient {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    {
      global: {
        headers: { Authorization: authorization },
      },
    }
  );
}

export async function getAuthenticatedUser(supabaseClient: SupabaseClient) {
  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  return { user, userError };
}

export async function fetchGoogleDriveMetadata(
  fileId: string
): Promise<GoogleDriveFileMetadata> {
  const googleApiKey = Deno.env.get("GOOGLE_DRIVE_API_KEY");

  if (!googleApiKey) {
    throw new Error("Google Drive API key not configured");
  }

  const driveApiUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?fields=${GOOGLE_DRIVE_API_FIELDS}&key=${googleApiKey}`;
  const driveResponse = await fetch(driveApiUrl);

  if (!driveResponse.ok) {
    const errorData = await driveResponse.json();
    throw new Error(
      `Failed to fetch from Google Drive: ${JSON.stringify(errorData)}`
    );
  }

  return await driveResponse.json();
}

export async function checkFileExists(
  supabaseClient: SupabaseClient,
  fileId: string,
  userId: string
): Promise<boolean> {
  const { data: existingFile } = await supabaseClient
    .from("files")
    .select("id")
    .eq("google_drive_id", fileId)
    .eq("user_id", userId)
    .single();

  return !!existingFile;
}

export async function saveFileMetadata(
  supabaseClient: SupabaseClient,
  metadata: GoogleDriveFileMetadata,
  userId: string
) {
  const fileData: FileInsertData = {
    user_id: userId,
    google_drive_id: metadata.id,
    name: metadata.name,
    mime_type: metadata.mimeType,
    size_bytes: metadata.size ? parseInt(metadata.size) : null,
  };

  const { data: insertedFile, error: insertError } = await supabaseClient
    .from("files")
    .insert(fileData)
    .select()
    .single();

  if (insertError) {
    throw new Error(
      `Failed to save file metadata: ${JSON.stringify(insertError)}`
    );
  }

  return insertedFile;
}
