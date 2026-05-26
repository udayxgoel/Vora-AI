import { auth } from "@/lib/auth";
import { MeetingsListHeader } from "@/modules/views/meetings/ui/components/meetings-list-header";
import {
  MeetingsView,
  MeetingsViewError,
  MeetingsViewLoader,
} from "@/modules/views/meetings/ui/views/meetings-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { loadSearchParams } from "@/modules/views/meetings/params";
import type { SearchParams } from "nuqs/server";

interface MeetingsPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function MeetingsPage({
  searchParams,
}: MeetingsPageProps) {
  const filters = await loadSearchParams(searchParams);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({ ...filters }),
  );

  return (
    <>
      <MeetingsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<MeetingsViewLoader />}>
          <ErrorBoundary fallback={<MeetingsViewError />}>
            <MeetingsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
