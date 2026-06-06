"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SearchIcon,
  BotIcon,
  CalendarDaysIcon,
  QuoteIcon,
  TagIcon,
  SparklesIcon,
} from "lucide-react";

export function CollaborationSection() {
  return (
    <section
      id="agents-demo"
      className="py-20 sm:py-24 bg-white border-t border-[#d9e8f2] relative overflow-hidden"
    >
      {/* Grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d9e8f2_1px,transparent_1px),linear-gradient(to_bottom,#d9e8f2_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            A Unified Knowledge Base for All Meetings
          </h2>
          <p className="mt-4 text-base text-[#667085]">
            Stop digging through hours of audio. Query the entire history of
            your team&apos;s meetings, agents, and transcripts through one
            intelligent search bar.
          </p>
        </div>

        {/* Network diagram illustration container */}
        <div className="relative max-w-4xl mx-auto h-95 sm:h-112.5 bg-[#f5fbff] rounded-[8px] border border-[#d9e8f2] shadow-sm flex items-center justify-center overflow-hidden p-4">
          {/* SVG Connector lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Top Left Connection */}
            <path
              d="M 28 17 Q 38 34 50 48"
              stroke="#0077b6"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              vectorEffect="non-scaling-stroke"
              fill="none"
              className="animate-[network-flow_15s_linear_infinite]"
            />
            {/* Top Right Connection */}
            <path
              d="M 72 17 Q 62 34 50 48"
              stroke="#0077b6"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              vectorEffect="non-scaling-stroke"
              fill="none"
              className="animate-[network-flow_15s_linear_infinite]"
            />
            {/* Bottom Left Connection */}
            <path
              d="M 28 84 Q 39 66 50 52"
              stroke="#0077b6"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              vectorEffect="non-scaling-stroke"
              fill="none"
              className="animate-[network-flow_15s_linear_infinite]"
            />
            {/* Bottom Right Connection */}
            <path
              d="M 72 84 Q 61 66 50 52"
              stroke="#0077b6"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              vectorEffect="non-scaling-stroke"
              fill="none"
              className="animate-[network-flow_15s_linear_infinite]"
            />
          </svg>

          {/* Connected Nodes */}

          {/* Central Search Node */}
          <div className="absolute z-10 w-full max-w-[280px] sm:max-w-[360px] bg-white rounded-md border-2 border-[#0077b6] p-3 shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-2">
              <SearchIcon className="size-4 text-[#0077b6] shrink-0" />
              <input
                type="text"
                readOnly
                placeholder="Find technical decisions on Next.js..."
                className="w-full text-xs font-medium text-[#0f172a] focus:outline-none bg-transparent"
              />
            </div>
            <div className="mt-2.5 pt-2 border-t border-[#d9e8f2] flex items-center justify-between text-[9px] text-[#667085] font-semibold">
              <span>Searching 148 conversations</span>
              <span className="text-[#0077b6] flex items-center gap-0.5">
                <SparklesIcon className="size-2.5" /> AI Autocomplete
              </span>
            </div>
          </div>

          {/* Node 1: Top Left (Agent Profile Card) */}
          <div className="absolute top-6 left-4 sm:left-12 max-w-[170px] bg-white rounded-md border border-[#d9e8f2] p-2.5 shadow-sm flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#e8f5fc] text-[#023e8a] border border-[#d9e8f2] shrink-0">
              <BotIcon className="size-3.5" />
            </span>
            <div className="min-w-0">
              <h4 className="text-[10px] font-bold text-[#0f172a] truncate">
                Archy Architect
              </h4>
              <p className="text-[8px] text-[#667085] truncate">
                System Design Agent
              </p>
            </div>
          </div>

          {/* Node 2: Top Right (Meeting Card) */}
          <div className="absolute top-8 right-4 sm:right-12 max-w-[170px] bg-white rounded-md border border-[#d9e8f2] p-2.5 shadow-sm flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#dff5fd] text-[#0077b6] border border-[#d9e8f2] shrink-0">
              <CalendarDaysIcon className="size-3.5" />
            </span>
            <div className="min-w-0">
              <h4 className="text-[10px] font-bold text-[#0f172a] truncate">
                Q3 Marketing Sync
              </h4>
              <p className="text-[8px] text-[#667085] truncate">
                Held 2 hours ago
              </p>
            </div>
          </div>

          {/* Node 3: Bottom Left (Transcript Quote) */}
          <div className="absolute bottom-8 left-4 sm:left-8 max-w-[190px] bg-white rounded-md border border-[#d9e8f2] p-2.5 shadow-sm">
            <div className="flex items-center gap-1 mb-1">
              <QuoteIcon className="size-2.5 text-[#00a6d6]" />
              <span className="text-[8px] font-bold text-[#0f172a]">
                Sarah A. in API Review
              </span>
            </div>
            <p className="text-[9px] text-[#667085] leading-snug italic">
              &quot;...we should migration path schemas via Drizzle by next
              Monday...&quot;
            </p>
          </div>

          {/* Node 4: Bottom Right (Custom tags) */}
          <div className="absolute bottom-10 right-4 sm:right-12 max-w-[160px] bg-white rounded-md border border-[#d9e8f2] p-2.5 shadow-sm flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#f1f7fb] text-[#023e8a] border border-[#d9e8f2] shrink-0">
              <TagIcon className="size-3.5" />
            </span>
            <div className="min-w-0">
              <h4 className="text-[10px] font-bold text-[#0f172a] truncate">
                #architecture-decision
              </h4>
              <p className="text-[8px] text-[#667085] truncate">
                18 matching moments
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-[#0077b6] text-white hover:bg-[#023e8a] rounded-md px-6 shadow-sm transition-all"
          >
            <Link href="/register">Start Searching Free</Link>
          </Button>
        </div>

        {/* CSS styles for network path animation */}
        <style jsx global>{`
          @keyframes network-flow {
            to {
              stroke-dashoffset: -300;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
