import { Badge } from "@/components/ui/badge";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { MeetingGetOne } from "../../types";
import {
  ClockIcon,
  FileTextIcon,
  ScrollTextIcon,
  SparklesIcon,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import { formatDuration } from "@/lib/utils";

const formatDate = (date: Date | string | null) => {
  if (!date) {
    return "No date";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
};

const getRecordingUrl = (recordingUrl: string | null) => {
  if (!recordingUrl) {
    return null;
  }

  try {
    const parsed = JSON.parse(recordingUrl) as { url?: string };
    return parsed.url ?? recordingUrl;
  } catch {
    return recordingUrl;
  }
};

const SummaryContent = ({ summary }: { summary: string | null }) => {
  if (!summary) {
    return <p className="text-muted-foreground">No summary available yet.</p>;
  }

  return (
    <div className="space-y-3 text-sm leading-7 text-foreground">
      {summary.split("\n").map((line, index) => {
        const trimmedLine = line.trim();

        if (!trimmedLine) {
          return <div key={index} className="h-2" />;
        }

        if (trimmedLine.startsWith("### ")) {
          return (
            <h3 key={index} className="pt-2 text-base font-semibold">
              {trimmedLine.replace("### ", "")}
            </h3>
          );
        }

        if (trimmedLine.startsWith("#### ")) {
          return (
            <h4 key={index} className="pt-2 font-medium">
              {trimmedLine.replace("#### ", "")}
            </h4>
          );
        }

        if (trimmedLine.startsWith("- ")) {
          return (
            <p key={index} className="pl-4">
              - {trimmedLine.replace("- ", "")}
            </p>
          );
        }

        return <p key={index}>{trimmedLine}</p>;
      })}
    </div>
  );
};

interface Props {
  meeting: MeetingGetOne;
}

export const CompletedMeetingView = ({ meeting }: Props) => {
  const recordingUrl = getRecordingUrl(meeting.recordingurl);

  return (
    <Tabs defaultValue="summary" className="gap-y-3">
      <TabsList
        variant="line"
        className="min-h-12 w-full justify-start rounded-lg border bg-card px-3"
      >
        <TabsTrigger value="summary" className="flex-none gap-x-2 px-2">
          <FileTextIcon className="size-4" />
          Summary
        </TabsTrigger>
        <TabsTrigger value="transcript" className="flex-none gap-x-2 px-2">
          <ScrollTextIcon className="size-4" />
          Transcript
        </TabsTrigger>
        <TabsTrigger value="recording" className="flex-none gap-x-2 px-2">
          <VideoIcon className="size-4" />
          Recording
        </TabsTrigger>
      </TabsList>

      <TabsContent value="summary">
        <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold tracking-normal">
                {meeting.name}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <Link
                  href={`/agents/${meeting.agent.id}`}
                  className="flex items-center gap-x-2 underline underline-offset-4"
                >
                  <div className="flex items-center gap-x-2 text-foreground">
                    <GeneratedAvatar
                      seed={meeting.agent.name}
                      variant="botttsNeutral"
                      className="size-6"
                    />
                    <span className="font-medium">{meeting.agent.name}</span>
                  </div>
                </Link>
                <span>
                  {formatDate(meeting.startedAt ?? meeting.createdAt)}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="gap-x-1.5">
                <SparklesIcon className="size-3.5" />
                General summary
              </Badge>
              <Badge variant="outline" className="gap-x-1.5">
                <ClockIcon className="size-3.5" />
                {formatDuration(meeting.duration)}
              </Badge>
            </div>

            <SummaryContent summary={meeting.summary} />
          </div>
        </section>
      </TabsContent>

      <TabsContent value="transcript">
        <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex min-h-80 flex-col items-center justify-center text-center">
            <div className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
              <ScrollTextIcon className="size-6" />
            </div>
            <div className="mt-4 max-w-md space-y-2">
              <h2 className="text-lg font-semibold">Transcript unavailable</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                The transcript cannot be displayed right now because AI
                processing or transcription credits are reached.
              </p>
            </div>
          </div>
        </section>
      </TabsContent>

      <TabsContent value="recording">
        <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="text-lg font-semibold">Recording</h2>
          {recordingUrl ? (
            <div className="mt-4 space-y-4">
              <video
                src={recordingUrl}
                controls
                className="aspect-video w-full rounded-md border bg-background"
              />
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              No recording available yet.
            </p>
          )}
        </section>
      </TabsContent>
    </Tabs>
  );
};
