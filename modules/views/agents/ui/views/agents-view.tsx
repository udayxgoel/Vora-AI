"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import EmptyState from "@/components/ui/empty-state";

export default function AgentsView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  if (data.length === 0) {
    return (
      <EmptyState
        title="Create your first agent"
        description="Create an agent to join your meetings. Each agent will follow your instructions and can interact with participants during the call."
      />
    );
  }

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
