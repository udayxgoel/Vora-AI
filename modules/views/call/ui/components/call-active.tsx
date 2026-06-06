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
    <div className="flex h-full flex-col justify-between p-4 text-white">
      <div className="bg-[#101213] rounded-full p-4 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1.5"
        >
          <span className="grid size-7 place-items-center rounded-full bg-[#0077b6] text-white">
            <SparklesIcon className="size-4" />
          </span>
          <span className="text-sm font-semibold">Vora AI</span>
        </Link>
        <h4 className="text-base">{meetingName}</h4>
      </div>
      <div className="mx-auto w-full max-w-2xl">
        <AiCreditsNotice />
      </div>
      <SpeakerLayout />
      <div className="bg-[#101213] rounded-full px-4">
        <CallControls onLeave={onLeave} />
      </div>
    </div>
  );
};
