import { DashboardSidebar } from "@/modules/views/dashboard/ui/dashboard-sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <TooltipProvider>
      <SidebarProvider>
        <DashboardSidebar user={session.user} />
        <SidebarInset className="min-h-svh bg-[#f5fbff]">
          <header className="flex h-14 shrink-0 items-center gap-3 border-b border-[#d9e8f2] bg-white px-4">
            <SidebarTrigger className="text-[#023e8a]" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#0f172a]">Dashboard</p>
              <p className="text-xs text-[#667085]">Manage meetings and agents</p>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default Layout;
