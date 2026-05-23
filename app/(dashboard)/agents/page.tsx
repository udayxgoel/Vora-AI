import ErrorState from "@/components/ui/error-state";
import LoadingState from "@/components/ui/loading-state";
import { auth } from "@/lib/auth";
import { loadSearchParams } from "@/modules/views/agents/params";
import { AgentsListHeader } from "@/modules/views/agents/ui/components/agents-list-header";
import AgentsView from "@/modules/views/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SearchParams } from "nuqs";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function AgentsPage({ searchParams }: Props) {
  const filters = await loadSearchParams(searchParams);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.agents.getMany.queryOptions({ ...filters }),
  );

  return (
    <>
      <AgentsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense
          fallback={
            <LoadingState
              title="Loading Agents"
              description="this may take a few seconds.."
            />
          }
        >
          <ErrorBoundary
            fallback={
              <ErrorState
                title="Error Loading Agents"
                description="Failed to load agents. Please try again later."
              />
            }
          >
            <AgentsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
