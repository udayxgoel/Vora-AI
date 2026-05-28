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
        <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
          <div className="flex flex-col gap-y-2 text-center">
            <h6 className="text-lg font-semibold">Ready to join?</h6>
            <p className="text-sm text-muted-foreground">
              Please allow access to your camera and microphone to join the
              call.
            </p>
          </div>
          <VideoPreview
            DisabledVideoPreview={
              hasBrowserPermissions
                ? disabledVideoPreview
                : allowBrowserPermissions
            }
          />
          <div className="flex gap-x-2">
            <ToggleAudioPreviewButton />
            <ToggleVideoPreviewButton />
          </div>
          <div className="flex gap-x-2 justify-between w-full">
            <Button variant="outline" asChild>
              <Link href="/meetings">Cancel</Link>
            </Button>
            <Button disabled={!hasBrowserPermissions} onClick={onJoin}>
              <LogInIcon />
              Join call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
