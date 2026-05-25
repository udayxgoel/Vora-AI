import { z } from "zod";

export const meetingInsertSchema = z.object({
  name: z.string().min(1, "Name is required"),
  agentId: z.string().min(1, { message: "Agent is required" }),
});

export const meetingsUpdateSchema = meetingInsertSchema.extend({
  id: z.string().min(1, { message: "ID is required" }),
});
