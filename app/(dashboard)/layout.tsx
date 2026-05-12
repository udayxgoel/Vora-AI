import { DashboardSidebar } from "@/modules/views/dashboard/ui/dashboard-sidebar";
import { DashboardHeader } from "@/modules/views/dashboard/ui/dashboard-header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
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
          <DashboardHeader />
          <main className="flex-1 p-4 sm:p-6 bg-white">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default Layout;
