import { Typography } from "@/components/ui/typography/Typography";

export interface ChooseFileProps {
  fileLabel?: string;
  fileStatus?: string;
  maxSizeText?: string;
}

export interface UploadDropzoneProps {
  title?: string;
  instructions?: string;
  accept?: string;
}

/** "Choose File" button + status — ported 1:1 from design-system/index.html (#choose-file) */
export function ChooseFile({
  fileLabel = "Choose File",
  fileStatus = "No File Chosen",
  maxSizeText = "Max. File size: 512 MB.",
}: ChooseFileProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <Typography variant="body2" as="span" className="bg-gray-100 border border-gray-200 rounded px-4 py-[6px] text-base-black">
          {fileLabel}
        </Typography>
        <Typography variant="body2" as="span" className="text-base-black">
          {fileStatus}
        </Typography>
      </div>
      <Typography variant="tooltip" as="div" className="text-base-black">
        {maxSizeText}
      </Typography>
    </div>
  );
}

/** Drag & drop upload dropzone — ported 1:1 from design-system/index.html (#choose-file) */
export function UploadDropzone({
  title = "Upload 8 Photos*",
  instructions = "Drag & drop or click to upload",
  accept = ".png, .gif, .jpeg, .jpg",
}: UploadDropzoneProps) {
  return (
    <div className="flex flex-col gap-[10px] w-[676px] max-w-full">
      <Typography variant="body2" as="div" className="text-base-black">
        {title}
      </Typography>
      <div className="border border-dashed border-base-gray flex flex-col items-center justify-center gap-[10px] px-[30px] py-5 w-full">
        {/* Upload arrow — an icon, sized independently of the type scale. */}
        <div className="text-primary text-[24px]">&#8593;</div>
        <Typography variant="body2" as="div" className="text-base-black">
          {instructions}
        </Typography>
        <Typography variant="tooltip" as="div" className="text-base-black">
          {accept}
        </Typography>
      </div>
    </div>
  );
}

export default ChooseFile;
