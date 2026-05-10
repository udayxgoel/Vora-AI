"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardCommand } from "@/modules/views/dashboard/dashboard-command";

export function DashboardHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <DashboardCommand open={open} setOpen={setOpen} />
      <header className="flex h-16 shrink-0 items-center gap-3 border-b border-[#d9e8f2] bg-white px-4">
        <SidebarTrigger className="text-[#023e8a]" />
        <Button
          className="h-9 w-60 justify-start bg-white font-normal text-muted-foreground hover:text-muted-foreground"
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
        >
          <SearchIcon />
          Search
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            Ctrl + K
          </kbd>
        </Button>
      </header>
    </>
  );
}
