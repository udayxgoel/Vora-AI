// src/inngest/client.ts
import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "vora-ai",
  isDev: process.env.NODE_ENV === "development",
});
