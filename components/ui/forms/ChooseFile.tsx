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
        <span className="bg-gray-100 border border-gray-200 rounded px-4 py-[6px] font-body text-[18px] leading-[28px] text-base-black">
          {fileLabel}
        </span>
        <span className="font-body text-[18px] leading-[28px] text-base-black">{fileStatus}</span>
      </div>
      <div className="font-body text-[12px] leading-[18px] text-base-black">{maxSizeText}</div>
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
      <div className="font-body text-[18px] leading-[28px] text-base-black">{title}</div>
      <div className="border border-dashed border-base-gray flex flex-col items-center justify-center gap-[10px] px-[30px] py-5 w-full">
        <div className="text-primary text-[24px]">&#8593;</div>
        <div className="font-body text-[18px] leading-[28px] text-base-black">{instructions}</div>
        <div className="font-body text-[12px] leading-[18px] text-base-black">{accept}</div>
      </div>
    </div>
  );
}

export default ChooseFile;
