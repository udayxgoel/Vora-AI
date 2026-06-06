import { LogInIcon } from "lucide-react";
import {
  DefaultVideoPlaceholder,
  StreamVideoParticipant,
  ToggleAudioPreviewButton,
  ToggleVideoPreviewButton,
  useCallStateHooks,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { generateAvatarUri } from "@/lib/avatar";
import Link from "next/link";
import { AiCreditsNotice } from "./ai-credits-notice";

interface Props {
  onJoin: () => void;
}

const allowBrowserPermissions = () => {
  return (
    <p className="text-sm">
      Please grant your browser a permission to access your camera and
      microphone to join the call.
    </p>
  );
};

const disabledVideoPreview = () => {
  const { data } = authClient.useSession();
  return (
    <DefaultVideoPlaceholder
      participant={
        {
          name: data?.user?.name || "Guest",
          image:
            data?.user?.image ??
            generateAvatarUri({
              seed: data?.user?.name || "Guest",
              variant: "initials",
            }),
        } as StreamVideoParticipant
      }
    />
  );
};

export const CallLobby = ({ onJoin }: Props) => {
  const { useCameraState, useMicrophoneState } = useCallStateHooks();
  const { hasBrowserPermission: hasMicrophonePermission } =
    useMicrophoneState();
  const { hasBrowserPermission: hasCameraPermission } = useCameraState();

  const hasBrowserPermissions = hasMicrophonePermission && hasCameraPermission;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black px-4 py-8">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full max-w-md flex-col items-center justify-center gap-y-5 rounded-lg bg-background p-5 shadow-sm sm:w-auto sm:max-w-none sm:gap-y-6 sm:p-10">
          <AiCreditsNotice />
          <div className="flex flex-col gap-y-2 text-center">
            <h6 className="text-lg font-semibold">Ready to join?</h6>
            <p className="text-sm text-muted-foreground">
              Please allow access to your camera and microphone to join the
              call.
            </p>
          </div>
          <div className="w-full max-w-sm overflow-hidden rounded-md sm:w-auto sm:max-w-none [&_*]:max-w-full">
            <VideoPreview
              DisabledVideoPreview={
                hasBrowserPermissions
                  ? disabledVideoPreview
                  : allowBrowserPermissions
              }
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <ToggleAudioPreviewButton />
            <ToggleVideoPreviewButton />
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between sm:gap-x-2">
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/meetings">Cancel</Link>
            </Button>
            <Button
              disabled={!hasBrowserPermissions}
              onClick={onJoin}
              className="w-full sm:w-auto"
            >
              <LogInIcon />
              Join call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
