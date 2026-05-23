import { AlertCircleIcon } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
}

export default function ErrorState({ title, description }: Props) {
  return (
    <div className="flex min-h-80 flex-1 items-center justify-center px-4 py-8">
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-4 rounded-lg border border-[#d9e8f2] bg-white p-8 text-center shadow-sm">
        <span className="grid size-12 place-items-center rounded-full bg-destructive/10 text-destructive">
          <AlertCircleIcon className="size-6" />
        </span>

        {(title || description) && (
          <div className="space-y-1.5">
            {title && (
              <h6 className="text-base font-semibold text-[#0f172a]">
                {title}
              </h6>
            )}
            {description && (
              <p className="text-sm leading-6 text-[#667085]">{description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
