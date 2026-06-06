import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SparklesIcon } from "lucide-react";

export const AiCreditsNotice = () => {
  return (
    <Alert className="border-[#d9e8f2] bg-[#e8f5fc] text-[#023e8a]">
      <SparklesIcon className="size-4" />
      <AlertTitle>AI assistant is limited</AlertTitle>
      <AlertDescription className="text-[#023e8a]/80">
        AI credits are currently exhausted, so the live AI agent will not join
        during this call. Video calling still works normally.
      </AlertDescription>
    </Alert>
  );
};
