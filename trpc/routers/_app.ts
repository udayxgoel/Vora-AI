import { createTRPCRouter } from "../init";
import { meetingsRouter } from "@/modules/views/meetings/server/procedures";
import { agentsRouter } from "@/modules/views/agents/server/procedures";

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingsRouter,
});
// export type definition of API

export type AppRouter = typeof appRouter;
