"use client";

import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function AgentsView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div>
      {data?.map((agent) => (
        <div key={agent.id}>{agent.name}</div>
      ))}
    </div>
  );
}
