import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { cn } from "@/lib/utils";
import type { MeetingGetOne } from "../../types";
import {
  CalendarClockIcon,
  CheckCircle2Icon,
  CircleXIcon,
  LoaderIcon,
  RadioIcon,
  VideoIcon,
  type LucideIcon,
} from "lucide-react";

type MeetingStatus = MeetingGetOne["status"];

interface Props {
  status: MeetingStatus;
  agentName: string;
}

interface StatusConfig {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  illustrationClassName: string;
  accentClassName: string;
  iconTextClassName: string;
  iconBgClassName: string;
  pulse?: boolean;
}

const statusConfig: Record<MeetingStatus, StatusConfig> = {
  upcoming: {
    title: "Meeting is upcoming",
    description:
      "Your meeting is scheduled and will be ready to join when it starts.",
    badge: "Scheduled",
    icon: CalendarClockIcon,
    illustrationClassName: "bg-accent border-border",
    accentClassName: "bg-primary",
    iconTextClassName: "text-primary",
    iconBgClassName: "bg-primary/10",
  },
  active: {
    title: "Meeting is active",
    description: "The meeting is live now. Your agent is ready in the room.",
    badge: "Live",
    icon: RadioIcon,
    illustrationClassName: "bg-accent border-border",
    accentClassName: "bg-primary",
    iconTextClassName: "text-primary",
    iconBgClassName: "bg-primary/10",
    pulse: true,
  },
  completed: {
    title: "Meeting is completed",
    description:
      "This meeting has ended. Summary, transcript, and recording details can appear here.",
    badge: "Completed",
    icon: CheckCircle2Icon,
    illustrationClassName: "bg-accent border-border",
    accentClassName: "bg-primary",
    iconTextClassName: "text-primary",
    iconBgClassName: "bg-primary/10",
  },
  processing: {
    title: "Meeting is processing",
    description:
      "We are preparing the meeting assets. This can take a few moments.",
    badge: "Processing",
    icon: LoaderIcon,
    illustrationClassName: "bg-accent border-border",
    accentClassName: "bg-primary",
    iconTextClassName: "text-primary",
    iconBgClassName: "bg-primary/10",
    pulse: true,
  },
  cancelled: {
    title: "Meeting is cancelled",
    description:
      "This meeting was cancelled. You can edit it or create a new meeting when needed.",
    badge: "Cancelled",
    icon: CircleXIcon,
    illustrationClassName: "bg-muted border-border",
    accentClassName: "bg-destructive",
    iconTextClassName: "text-destructive",
    iconBgClassName: "bg-destructive/10",
  },
};

export const MeetingStatusView = ({ status, agentName }: Props) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  if (status === "upcoming") {
    return (
      <section className="flex min-h-95 flex-col items-center justify-center rounded-lg border bg-card px-6 py-10 text-center text-card-foreground shadow-sm">
        <div aria-hidden="true" className="relative mb-8 h-28 w-56">
          <div className="absolute left-1/2 top-0 size-28 -translate-x-1/2 rounded-full bg-accent" />
          <div className="absolute left-4 right-4 top-8 flex items-center gap-x-4 rounded-lg border bg-card px-4 py-3 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
            <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
              <VideoIcon className="size-5" />
            </span>
            <span className="flex flex-1 flex-col gap-y-2">
              <span className="h-2 w-24 rounded-full bg-primary" />
              <span className="h-2 w-16 rounded-full bg-primary/30" />
              <span className="h-2 w-28 rounded-full bg-accent" />
            </span>
          </div>
        </div>

        <div className="flex max-w-md flex-col items-center gap-y-3">
          <h2 className="text-base font-semibold text-foreground">
            Not started yet
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Once you start this meeting, a summary will appear here.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" size="sm" type="button">
              Cancel meeting
            </Button>
            <Button size="sm" type="button">
              Start meeting
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="grid min-h-90 overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm md:grid-cols-[1fr_320px]">
      <div className="flex flex-col justify-center gap-y-6 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="capitalize">
            {config.badge}
          </Badge>
          <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
            <GeneratedAvatar
              seed={agentName}
              variant="botttsNeutral"
              className="size-6"
            />
            <span className="max-w-56 truncate">{agentName}</span>
          </div>
        </div>

        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-normal text-foreground">
            {config.title}
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            {config.description}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "relative min-h-72 border-t md:border-l md:border-t-0",
          config.illustrationClassName,
        )}
      >
        <div className="absolute inset-x-8 top-8 h-36 rounded-lg border bg-card/70 shadow-[0_18px_46px_rgba(15,23,42,0.10)]" />
        <div className="absolute left-12 right-12 top-16 h-20 rounded-lg border bg-card shadow-sm" />
        <div className="absolute left-16 top-20 flex items-center gap-x-3">
          <span
            className={cn(
              "grid size-12 place-items-center rounded-full",
              config.iconTextClassName,
              config.iconBgClassName,
            )}
          >
            <Icon
              className={cn(
                "size-6",
                status === "processing" && "animate-spin",
              )}
            />
          </span>
          <span className="space-y-2">
            <span className="block h-2 w-28 rounded-full bg-primary/30" />
            <span className="block h-2 w-20 rounded-full bg-accent" />
          </span>
        </div>
        <div
          className={cn(
            "absolute bottom-16 left-1/2 size-28 -translate-x-1/2 rounded-full opacity-15",
            config.accentClassName,
            config.pulse && "animate-pulse",
          )}
        />
        <div className="absolute bottom-18 left-1/2 grid size-20 -translate-x-1/2 place-items-center rounded-full bg-card shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
          <Icon
            className={cn(
              "size-9",
              config.iconTextClassName,
              status === "processing" && "animate-spin",
            )}
          />
        </div>
      </div>
    </section>
  );
};
