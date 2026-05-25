"use client";

import ErrorState from "@/components/ui/error-state";
import LoadingState from "@/components/ui/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import EmptyState from "@/components/ui/empty-state";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  if (data.items.length === 0) {
    return (
      <EmptyState
        title="No meetings found"
        description="You don't have any meetings scheduled yet."
      />
    );
  }

  return (
    <div className="flex-1 pb-4 px-4 flex flex-col gap-y-4">
      <DataTable data={data.items} columns={columns} />
    </div>
  );
};

export const MeetingsViewLoader = () => {
  return (
    <LoadingState
      title="Loading meetings"
      description="this may take few seconds"
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error loading meetings"
      description="Something went wrong"
    />
  );
};
