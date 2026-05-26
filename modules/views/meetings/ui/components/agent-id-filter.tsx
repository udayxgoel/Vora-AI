import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { CommandSelect } from "@/components/ui/command-select";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

export const AgentIdFilter = () => {
  const [filters, setFilters] = useMeetingsFilters();
  const [search, setSearch] = useState("");
  const trpc = useTRPC();

  const { data } = useQuery({
    ...trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search,
    }),
  });
  return (
    <CommandSelect
      className="h-9"
      placeholder="Agent"
      value={filters.agentId ?? ""}
      onSelect={(value) => setFilters({ ...filters, agentId: value })}
      options={
        data?.items?.map((agent) => ({
          id: agent.id,
          value: agent.id,
          children: (
            <div className="flex items-center gap-x-2">
              <GeneratedAvatar
                variant="botttsNeutral"
                seed={agent.name}
                className="size-4"
              />
            </div>
          ),
        })) ?? []
      }
      onSearch={setSearch}
    />
  );
};
