import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import AgentsView from "@/modules/views/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function AgentsPage() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

  return (
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
  );
}
