import { StreamTheme, useCall } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { CallLobby } from "./call-lobby";
import { CallActive } from "./call-active";
import { CallEnded } from "./call-ended";

interface Props {
  meetingId: string;
  meetingName: string;
}

export const CallUI = ({ meetingId, meetingName }: Props) => {
  const call = useCall();
  const [showUI, setShowUI] = useState<"lobby" | "call" | "ended">("lobby");

  const handleJoin = async () => {
    if (!call) return;
    await call.join();
    setShowUI("call");
  };

  const handleLeave = async () => {
    if (!call) return;
    await call.endCall();
    setShowUI("ended");
  };

  return (
    <StreamTheme className="h-full">
      {showUI === "lobby" && <CallLobby onJoin={handleJoin} />}
      {showUI === "call" && (
        <CallActive onLeave={handleLeave} meetingName={meetingName} />
      )}
      {showUI === "ended" && <CallEnded />}
    </StreamTheme>
  );
};
