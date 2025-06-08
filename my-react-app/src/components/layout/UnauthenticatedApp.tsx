import { Auth } from "@/components/auth/Auth";
import { Toaster } from "react-hot-toast";

export function UnauthenticatedApp() {
  return (
    <>
      <Auth />
      <Toaster position="top-right" />
    </>
  );
}
