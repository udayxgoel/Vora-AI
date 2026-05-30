"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MeetingGetMany } from "../../types";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { Badge } from "@/components/ui/badge";
import {
  CircleCheckIcon,
  CircleXIcon,
  ClockArrowUpIcon,
  ClockFadingIcon,
  CornerDownRightIcon,
  LoaderIcon,
} from "lucide-react";
import { format } from "date-fns";
import { cn, formatDuration } from "@/lib/utils";

const statusMap = {
  completed: {
    icon: CircleCheckIcon,
  },
  upcoming: {
    icon: ClockArrowUpIcon,
  },
  processing: {
    icon: LoaderIcon,
  },
  active: {
    icon: LoaderIcon,
  },
  cancelled: {
    icon: CircleXIcon,
  },
};

const statusColorMap = {
  completed: "bg-green-500/20 text-green-800 border-green-800/5",
  upcoming: "bg-yellow-500/20 text-yellow-800 border-yellow-800/5",
  processing: "bg-blue-500/20 text-blue-800 border-blue-800/5",
  active: "bg-green-500/20 text-green-800 border-green-800/5",
  cancelled: "bg-red-500/20 text-red-800 border-red-800/5",
};

export const columns: ColumnDef<MeetingGetMany[number]>[] = [
  {
    accessorKey: "name",
    header: "Meeting Name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-y-1">
          <span className="font-semibold capitalize">{row.original.name}</span>

          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-1">
              <CornerDownRightIcon className="size-3 text-muted-foreground" />
              <span className="text-sm text-muted-foreground max-w-50 truncate">
                {row.original.agent.name}
              </span>
            </div>
            <GeneratedAvatar
              seed={row.original.agent.name}
              variant="botttsNeutral"
              className="size-4"
            />
            <span className="text-sm text-muted-foreground">
              {row.original.startedAt
                ? format(row.original.startedAt, "MMM d")
                : ""}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = statusMap[row.original.status as keyof typeof statusMap];
      return (
        <Badge
          variant="outline"
          className={cn(
            "capitalize [&>svg]:size-4 text-muted-foreground",
            statusColorMap[row.original.status as keyof typeof statusColorMap],
          )}
        >
          <status.icon
            className={cn(
              row.original.status === "processing" && "animate-spin",
            )}
          />
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "duration",
    header: "duration",
    cell: ({ row }) => {
      return (
        <Badge
          variant="outline"
          className="capitalize [&>svg]:size-4 flex items-center gap-x-2"
        >
          <ClockFadingIcon className="text-blue-700" />
          {row.original.duration
            ? formatDuration(row.original.duration)
            : "No duration"}
        </Badge>
      );
    },
  },
];
