"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BotIcon,
  CalendarDaysIcon,
  ChevronsUpDownIcon,
  LogOutIcon,
  SparklesIcon,
  Star,
} from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { authClient } from "@/lib/auth-client";

type DashboardSidebarProps = {
  user: {
    email?: string | null;
    image?: string | null;
    name?: string | null;
  };
};

const navItems = [
  {
    href: "/meetings",
    icon: CalendarDaysIcon,
    title: "Meetings",
  },
  {
    href: "/agents",
    icon: BotIcon,
    title: "Agents",
  },
];

function getInitials(name?: string | null, email?: string | null) {
  const label = name || email || "User";

  return label
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function DashboardSidebar({ user }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const initials = getInitials(user.name, user.email);

  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  };

  return (
    <Sidebar collapsible="icon" className="border-sidebar-border bg-sidebar">
      <SidebarHeader className="py-4">
        <Link
          href="/"
          className="flex h-10 items-center gap-3 rounded-md text-sidebar-foreground"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#0077b6] text-white shadow-sm">
            <SparklesIcon className="size-5" />
          </span>
          <span className="min-w-0 text-lg font-semibold tracking-[-0.02em] group-data-[collapsible=icon]:hidden">
            Vora AI
          </span>
        </Link>
      </SidebarHeader>

      <Separator />

      <SidebarContent className="px-2 py-3">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className="h-10 rounded-md text-[#344054] data-active:bg-[#dff5fd] data-active:text-[#023e8a] data-active:shadow-none"
                    >
                      <Link href={item.href}>
                        <Icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>

            <Separator className="my-3" />

            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={"Upgrade"}
                  className="h-10 rounded-md text-[#344054] data-active:bg-[#dff5fd] data-active:text-[#023e8a] data-active:shadow-none"
                >
                  <Link href={"/upgrade"}>
                    <Star />
                    <span>Upgrade</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3 group-data-[collapsible=icon]:p-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full min-w-0 items-center gap-2 rounded-md bg-[#f5fbff] p-2 text-left ring-1 ring-sidebar-border transition-colors hover:bg-[#dff5fd] focus-visible:ring-2 focus-visible:ring-[#0077b6] focus-visible:outline-none group-data-[collapsible=icon]:size-10 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0">
              {user.image ? (
                <Avatar className="size-9 group-data-[collapsible=icon]:size-8">
                  <AvatarImage src={user.image} alt={user.name ?? ""} />
                </Avatar>
              ) : (
                <GeneratedAvatar
                  seed={user.name ?? user.email ?? initials}
                  variant="initials"
                  className="size-9 object-center group-data-[collapsible=icon]:size-8"
                />
              )}
              <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
                <p className="truncate text-sm font-medium text-[#0f172a]">
                  {user.name || "Account"}
                </p>
                <p className="truncate text-xs text-[#667085]">{user.email}</p>
              </div>
              <ChevronsUpDownIcon className="size-4 shrink-0 text-[#667085] group-data-[collapsible=icon]:hidden" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#0f172a]">
                  {user.name || "Account"}
                </p>
                <p className="truncate text-xs text-[#667085]">{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} variant="destructive">
              <LogOutIcon />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
