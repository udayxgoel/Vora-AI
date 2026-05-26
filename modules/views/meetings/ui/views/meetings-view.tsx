"use client";

import ErrorState from "@/components/ui/error-state";
import LoadingState from "@/components/ui/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import EmptyState from "@/components/ui/empty-state";
import { useRouter } from "next/navigation";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";
import { DataPagination } from "../components/data-pagination";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const [filters, setFilters] = useMeetingsFilters();
  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    }),
  );

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
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        totalPages={data.totalPages}
        page={filters.page}
        onPageChange={(page) => setFilters({ page })}
      />
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
