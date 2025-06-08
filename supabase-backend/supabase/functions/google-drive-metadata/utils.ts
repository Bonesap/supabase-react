import { CORS_HEADERS } from "./constants.ts";
import { ApiResponse } from "./types.ts";

export function createJsonResponse<T>(
  data: ApiResponse<T>,
  status: number
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

export function createErrorResponse(
  error: string,
  status: number,
  details?: any
): Response {
  return createJsonResponse({ error, details }, status);
}

export function createSuccessResponse<T>(file: T, metadata: any): Response {
  return createJsonResponse(
    {
      success: true,
      file,
      metadata,
    },
    200
  );
}

export function createOptionsResponse(): Response {
  return new Response("ok", { headers: CORS_HEADERS });
}
