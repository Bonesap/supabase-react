import { useState } from "react";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";
import { ERRORS } from "@/common/constants/errors.constant";
import { SUCCESS } from "@/common/constants/toast.constant";

export function useFileUpload() {
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = async (fileId: string, onSuccess: () => void) => {
    setIsLoading(true);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        toast.error(ERRORS.FILES.ADD_BEFORE_SIGN_IN);
        return;
      }

      const response = await supabase.functions.invoke(
        "google-drive-metadata",
        {
          body: { fileId },
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        }
      );

      if (response.error) {
        throw response.error;
      }

      if (response.data?.error) {
        throw new Error(response.data.error);
      }

      toast.success(SUCCESS.FILES.ADD);

      onSuccess();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : ERRORS.FILES.UPLOAD);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    uploadFile,
  };
}
