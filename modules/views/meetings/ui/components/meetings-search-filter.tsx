"use client";

import { SearchIcon, XIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { DEFAULT_PAGE } from "@/constants";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

export function MeetingsSearchFilter() {
  const [filters, setFilters] = useMeetingsFilters();

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
        placeholder="Search meetings..."
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
