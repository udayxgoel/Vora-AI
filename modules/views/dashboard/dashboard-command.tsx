import {
  Command,
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder="Find your meetings and agents..." />

        <CommandList>
          <CommandItem>Command 1</CommandItem>
        </CommandList>
      </Command>
    </CommandDialog>
  );
};
