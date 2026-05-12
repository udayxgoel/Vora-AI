interface Props {
  title?: string;
  description?: string;
}

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex min-h-90 flex-col items-center justify-center px-4 py-10 text-center">
      <div aria-hidden="true" className="relative mb-10 h-24 w-56">
        <div className="absolute left-8 top-0 h-20 w-40 rounded-lg bg-[#0077b6]/10 shadow-[0_14px_34px_rgba(0,119,182,0.12)]" />
        <div className="absolute left-2 top-3 h-16 w-48 rounded-lg border border-[#d6eaf5] bg-white shadow-[0_12px_26px_rgba(0,119,182,0.10)]" />
        <div className="absolute left-5 top-5 size-11 rounded-lg bg-[#0077b6]/15" />
        <div className="absolute left-18 top-8 h-1.5 w-20 rounded-full bg-[#0077b6]" />
        <div className="absolute left-18 top-12 h-1.5 w-28 rounded-full bg-[#90e0ef]" />
        <div className="absolute left-18 top-16 h-1.5 w-36 rounded-full bg-[#d6f3ff]" />
      </div>

      <div className="mx-auto flex max-w-md flex-col gap-y-4">
        {title && (
          <h6 className="text-lg font-medium text-[#111827]">{title}</h6>
        )}
        {description && (
          <p className="text-sm leading-6 text-[#98a2b3]">{description}</p>
        )}
      </div>
    </div>
  );
}
