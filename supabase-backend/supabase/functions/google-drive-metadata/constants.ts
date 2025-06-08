export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export const ERROR_MESSAGES = {
  UNAUTHORIZED: "Unauthorized",
  METHOD_NOT_ALLOWED: "Method not allowed",
  FILE_ID_REQUIRED: "File ID is required",
  GOOGLE_API_KEY_NOT_CONFIGURED: "Google Drive API key not configured",
  FAILED_TO_FETCH_METADATA: "Failed to fetch file metadata from Google Drive",
  FILE_ALREADY_EXISTS: "File already exists in your collection",
  FAILED_TO_SAVE_METADATA: "Failed to save file metadata",
  INTERNAL_SERVER_ERROR: "Internal server error",
} as const;

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const GOOGLE_DRIVE_API_FIELDS = "id,name,mimeType,size";
