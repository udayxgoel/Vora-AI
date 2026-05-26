import { ReactNode, useState } from "react";
import { ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandDialog,
  Command,
} from "./command";

interface CommandSelectProps {
  options: Array<{ id: string; value: string; children?: ReactNode }>;
  onSelect: (value: string) => void;
  onSearch?: (value: string) => void;
  value?: string;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
}

export const CommandSelect: React.FC<CommandSelectProps> = ({
  options,
  onSelect,
  onSearch,
  value,
  placeholder = "Select an option",
  isSearchable = true,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const handleClose = (open: boolean) => {
    onSearch?.("");
    setOpen(open);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type="button"
        variant="outline"
        className={cn(
          "h-9 justify-between font-normal",
          !selectedOption && "text-muted-foreground",
          className,
        )}
      >
        <div>{selectedOption?.children ?? placeholder}</div>
        <ChevronsUpDownIcon />
      </Button>
      <CommandDialog open={open} onOpenChange={handleClose}>
        <Command shouldFilter={!onSearch}>
          {isSearchable && (
            <CommandInput placeholder="Search..." onValueChange={onSearch} />
          )}
          <CommandList>
            <CommandEmpty className="text-muted-foreground text-sm">
              No options found.
            </CommandEmpty>
            {options.map((option) => (
              <CommandItem
                key={option.id}
                value={option.value}
                onSelect={(currentValue) => {
                  onSelect(currentValue);
                  setOpen(false);
                }}
              >
                {option.children || option.value}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};
