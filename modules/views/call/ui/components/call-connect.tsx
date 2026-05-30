"use client";

import {
  CallingState,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { LoaderIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { CallUI } from "./call-ui";

interface Props {
  meetingId: string;
  meetingName: string;
  userId: string;
  userName: string;
  userImage: string;
}

export const CallConnect = ({
  meetingId,
  meetingName,
  userId,
  userName,
  userImage,
}: Props) => {
  const trpc = useTRPC();
  const { mutateAsync: generateToken } = useMutation(
    trpc.meetings.generateToken.mutationOptions(),
  );
  const tokenProvider = useCallback(() => generateToken(), [generateToken]);

  const client = useMemo(() => {
    return StreamVideoClient.getOrCreateInstance({
      apiKey: process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY!,
      user: {
        id: userId,
        name: userName,
        image: userImage,
      },
      tokenProvider,
    });
  }, [userId, userImage, userName, tokenProvider]);
  const [isClientReady, setIsClientReady] = useState(
    client.state.connectedUser?.id === userId,
  );

  useEffect(() => {
    let cancelled = false;

    async function connectUser() {
      if (client.state.connectedUser?.id !== userId) {
        await client.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          tokenProvider,
        );
      }

      if (!cancelled) {
        setIsClientReady(true);
      }
    }

    connectUser().catch(() => {
      if (!cancelled) {
        setIsClientReady(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [client, tokenProvider, userId, userImage, userName]);

  const call = useMemo(() => {
    const nextCall = client.call("default", meetingId);
    nextCall.camera.disable();
    nextCall.microphone.disable();

    return nextCall;
  }, [client, meetingId]);

  useEffect(() => {
    return () => {
      if (call.state.callingState !== CallingState.LEFT) {
        call.leave();
      }
    };
  }, [call]);

  if (!isClientReady) {
    return (
      <div className="flex h-screen items-center justify-center bg-radial from-sidebar-accent to-sidebar">
        <LoaderIcon className="size-6 text-white animate-spin" />
      </div>
    );
  }
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <CallUI meetingId={meetingId} meetingName={meetingName} />
      </StreamCall>
    </StreamVideo>
  );
};
