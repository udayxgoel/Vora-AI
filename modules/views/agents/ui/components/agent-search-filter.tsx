"use client";

import { SearchIcon, XIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { DEFAULT_PAGE } from "@/constants";
import { useAgentsFilters } from "../../hooks/use-agents-filters";

export function AgentSearchFilter() {
  const [filters, setFilters] = useAgentsFilters();

  const onSearchChange = (search: string) => {
    setFilters({
      search,
      page: DEFAULT_PAGE,
    });
  };

  return (
    <InputGroup className="h-10 max-w-md bg-white">
      <InputGroupAddon>
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput
        value={filters.search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search agents..."
        className="text-sm"
      />
      {filters.search && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Clear search"
            size="icon-xs"
            onClick={() => onSearchChange("")}
          >
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
