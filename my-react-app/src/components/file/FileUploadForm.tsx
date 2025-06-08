import { UniversalForm } from "@/components/ui/form/universal-form";
import { useFileUpload } from "@/hooks/useFileUpload";
import { fileFields } from "@/common/constants/fields.constant";
import { fileSchema, type FileFormData } from "./validate";
import type { FileUploadFormProps } from "./types";

export function FileUploadForm({ onFileAdded }: FileUploadFormProps) {
  const { isLoading, uploadFile } = useFileUpload();

  const onSubmit = async (data: FileFormData) => {
    await uploadFile(data.fileId, onFileAdded);
  };

  return (
    <UniversalForm
      schema={fileSchema}
      fields={fileFields}
      onSubmit={onSubmit}
      submitButtonText="Add File"
      loadingText="Adding File..."
      isLoading={isLoading}
    />
  );
}
