export const ERRORS = {
  AUTH: {
    SIGN_IN: "Failed to sign in",
    SIGN_IN_WITH_EMAIL: "Failed to sign in with email",
    SIGN_IN_WITH_GITHUB: "Failed to sign in with GitHub",
    SIGN_OUT: "Failed to sign out",
    SIGN_IN_WITH_OTP: "Invalid verification code",
    SIGN_IN_WITH_GOOGLE: "Failed to sign in with Google",
  },
  FILES: {
    FETCH: "Failed to fetch files",
    UPLOAD: "Failed to upload file",
    DELETE: "Failed to delete file",
    ADD_BEFORE_SIGN_IN: "You must be logged in to add files",
  },
  GENERAL: {
    UNKNOWN: "An unknown error occurred",
    NETWORK: "Network error occurred",
  },
} as const;
