import { CallControls, SpeakerLayout } from "@stream-io/video-react-sdk";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import { AiCreditsNotice } from "./ai-credits-notice";

interface Props {
  onLeave: () => void;
  meetingName: string;
}

export const CallActive = ({ onLeave, meetingName }: Props) => {
  return (
    <div className="flex h-full min-h-0 flex-col gap-3 p-2 text-white md:justify-between md:gap-0 md:p-4">
      <div className="flex items-center gap-3 rounded-lg bg-[#101213] p-3 md:gap-4 md:rounded-full md:p-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-2.5 py-1.5"
        >
          <span className="grid size-7 place-items-center rounded-full bg-[#0077b6] text-white">
            <SparklesIcon className="size-4" />
          </span>
          <span className="hidden text-sm font-semibold md:inline">
            Vora AI
          </span>
        </Link>
        <h4 className="min-w-0 truncate text-sm md:text-base">
          {meetingName}
        </h4>
      </div>
      <div className="mx-auto w-full max-w-2xl">
        <AiCreditsNotice />
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-lg md:contents">
        <SpeakerLayout />
      </div>
      <div className="overflow-x-auto rounded-lg bg-[#101213] px-2 md:rounded-full md:px-4">
        <CallControls onLeave={onLeave} />
      </div>
    </div>
  );
};
