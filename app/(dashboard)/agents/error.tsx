"use client";

import ErrorState from "@/components/ui/error-state";

export default function AgentsError() {
  return (
    <ErrorState
      title="Failed to load Agents"
      description="An error occurred while fetching the agents. Please try again later."
    />
  );
}
