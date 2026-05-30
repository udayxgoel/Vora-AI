import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { CalendarIcon, UserIcon } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand: React.FC<Props> = ({ open, setOpen }) => {
  const router = useRouter();
  const trpc = useTRPC();
  const [search, setSearch] = useState("");

  const meetings = useQuery(
    trpc.meetings.getMany.queryOptions({
      search,
      pageSize: 100,
    }),
  );

  const agents = useQuery(
    trpc.agents.getMany.queryOptions({
      search,
      pageSize: 100,
    }),
  );

  const onSelect = (href: string) => {
    setOpen(false);
    setSearch("");
    router.push(href);
  };

  const meetingItems = meetings.data?.items ?? [];
  const agentItems = agents.data?.items ?? [];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput
          placeholder="Find your meetings and agents..."
          value={search}
          onValueChange={(value) => setSearch(value)}
        />
        <CommandList>
          {!meetingItems.length && !agentItems.length ? (
            <CommandEmpty className="text-muted-foreground">
              No results found.
            </CommandEmpty>
          ) : null}

          {meetingItems.length ? (
            <CommandGroup heading="Meetings">
              {meetingItems.map((meeting) => (
                <CommandItem
                  key={meeting.id}
                  value={`meeting-${meeting.id}`}
                  onSelect={() => onSelect(`/meetings/${meeting.id}`)}
                >
                  <div className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary">
                    <CalendarIcon className="size-4" />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate font-medium">{meeting.name}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {meeting.agent.name}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ) : null}

          {agentItems.length ? (
            <CommandGroup heading="Agents">
              {agentItems.map((agent) => (
                <CommandItem
                  key={agent.id}
                  value={`agent-${agent.id}`}
                  onSelect={() => onSelect(`/agents/${agent.id}`)}
                >
                  <GeneratedAvatar
                    seed={agent.name}
                    variant="botttsNeutral"
                    className="size-8"
                  />
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate font-medium">{agent.name}</span>
                    <span className="flex items-center gap-x-1 text-xs text-muted-foreground">
                      <UserIcon className="size-3" />
                      Agent
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ) : null}
        </CommandList>
      </Command>
    </CommandDialog>
  );
};
