export const emailFields = [
  {
    name: "email",
    label: "Email address",
    type: "text",
    placeholder: "Enter your email",
    autoComplete: "email",
  },
];

export const otpFields = [
  {
    name: "token",
    label: "Verification Code",
    type: "text",
    placeholder: "Enter 6-digit code",
    autoComplete: "one-time-code",
    maxLength: 6,
  },
];

export const fileFields = [
  {
    name: "fileId",
    label: "Google Drive File ID",
    type: "text",
    placeholder: "Enter Google Drive file ID",
    description:
      "You can find the file ID in the Google Drive URL after /d/ and before /view",
  },
];
