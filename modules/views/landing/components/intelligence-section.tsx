"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SparklesIcon, CalendarDaysIcon, ClockIcon, UserIcon, PlayIcon, PauseIcon, ListTodoIcon, HelpCircleIcon, Volume2Icon, MessageSquareIcon } from "lucide-react";

export function IntelligenceSection() {
  const [activeTab, setActiveTab] = useState("summary");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="meetings-demo" className="py-20 sm:py-24 bg-[#f5fbff] border-t border-[#d9e8f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Column 1: Mock Dashboard Reviewer (spans 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[8px] border border-[#d9e8f2] shadow-xl p-4 sm:p-5">

              {/* Meeting Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5 border-b border-[#d9e8f2] pb-4">
                <div>
                  <h3 className="text-base font-bold text-[#0f172a]">
                    Q3 Architecture & Styling Alignment
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-[11px] text-[#667085] font-medium">
                    <span className="flex items-center gap-1">
                      <CalendarDaysIcon className="size-3" />
                      June 4, 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="size-3" />
                      42 mins
                    </span>
                    <span className="flex items-center gap-1 bg-[#dff5fd] text-[#023e8a] px-1.5 py-0.5 rounded-[4px]">
                      <SparklesIcon className="size-3 text-[#0077b6] fill-[#00a6d6]/20" />
                      Archy Agent
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#f1f7fb] border border-[#d9e8f2] rounded-md px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00a6d6]" />
                  <span className="text-[10px] font-bold text-[#0f172a] uppercase tracking-wider">Processed</span>
                </div>
              </div>

              {/* Tabs list */}
              <div className="flex border-b border-[#d9e8f2] mb-4">
                {["summary", "transcript", "recording"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 border-b-2 text-xs font-bold capitalize transition-all ${activeTab === tab
                        ? "border-[#0077b6] text-[#0077b6]"
                        : "border-transparent text-[#667085] hover:text-[#0f172a]"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Panels */}
              <div className="min-h-[220px] max-h-[260px] overflow-y-auto pr-1">
                {activeTab === "summary" && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-1">Executive Summary</h4>
                      <p className="text-[#667085] leading-relaxed">
                        The team aligned on migrating the marketing stack to Next.js 15 and styling via Tailwind CSS v4, keeping card components to a strict 8px border radius limit. John will oversee Drizzle DB integration.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#0f172a] flex items-center gap-1 mb-1.5">
                        <ListTodoIcon className="size-3.5 text-[#0077b6]" />
                        Decisions & Tasks
                      </h4>
                      <ul className="space-y-2 text-[#667085]">
                        <li className="flex items-start gap-2">
                          <input type="checkbox" defaultChecked disabled className="mt-0.5 rounded border-[#d9e8f2]" />
                          <span>Configure Tailwind CSS v4 variables in global.css <span className="text-[#023e8a] font-semibold">(Sarah)</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <input type="checkbox" disabled className="mt-0.5 rounded border-[#d9e8f2]" />
                          <span>Define initial DB structures and schemas via Drizzle <span className="text-[#023e8a] font-semibold">(John - Due: June 8)</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <input type="checkbox" disabled className="mt-0.5 rounded border-[#d9e8f2]" />
                          <span>Build polished interactive landing page components <span className="text-[#023e8a] font-semibold">(Sarah - Due: June 12)</span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "transcript" && (
                  <div className="space-y-3.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#e8f5fc] text-[10px] font-bold text-[#023e8a] shrink-0 border border-[#d9e8f2]">JD</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-[#0f172a]">John Doe</span>
                          <span className="text-[9px] text-[#667085]">04:12</span>
                        </div>
                        <p className="text-[#667085] mt-0.5">Let's make sure we stick to a maximum 8px border-radius limit for all card UI elements to fit the Vora theme.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#dff5fd] text-[10px] font-bold text-[#0077b6] shrink-0 border border-[#d9e8f2]">SA</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-[#0f172a]">Sarah Alana</span>
                          <span className="text-[9px] text-[#667085]">04:28</span>
                        </div>
                        <p className="text-[#667085] mt-0.5">Understood. I will configure `@theme` in `globals.css` with a custom radius variable matching that spec.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-[#f1f7fb] p-2 rounded-[6px] border border-[#d9e8f2]">
                      <span className="flex size-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#00a6d6] shrink-0 border border-[#d9e8f2]">AI</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-[#0077b6]">Archy Agent (System)</span>
                          <span className="text-[9px] text-[#667085]">04:30</span>
                        </div>
                        <p className="text-[#023e8a] italic mt-0.5">Note: Custom theme variables for 8px rounded corners set to be updated in styling configuration.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "recording" && (
                  <div className="space-y-4 pt-2">
                    {/* Visual Waveform player */}
                    <div className="bg-[#f1f7fb] rounded-[6px] border border-[#d9e8f2] p-4 flex flex-col items-center">
                      <div className="flex items-center gap-4 w-full">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="flex size-10 items-center justify-center rounded-full bg-[#0077b6] hover:bg-[#023e8a] text-white shadow-sm transition-transform active:scale-95 shrink-0"
                          aria-label={isPlaying ? "Pause Recording" : "Play Recording"}
                        >
                          {isPlaying ? (
                            <PauseIcon className="size-4 fill-white" />
                          ) : (
                            <PlayIcon className="size-4 fill-white" />
                          )}
                        </button>

                        <div className="flex-1 space-y-1">
                          <div className="h-6 flex items-end gap-[3px]">
                            {/* Simple mock audio bars */}
                            {[20, 45, 15, 60, 30, 75, 45, 20, 50, 85, 30, 15, 60, 40, 20, 80, 50, 15, 30, 45, 75, 20, 60, 10, 40, 70, 35].map((h, i) => (
                              <span
                                key={i}
                                style={{ height: `${h}%` }}
                                className={`flex-1 rounded-[1px] transition-colors ${isPlaying && i < 12 ? "bg-[#0077b6]" : "bg-[#d9e8f2]"
                                  }`}
                              />
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-[#667085] font-semibold">
                            <span>04:12</span>
                            <span>42:15</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 justify-center">
                      <span className="flex items-center gap-1 text-[10px] text-[#667085] bg-white border border-[#d9e8f2] px-2 py-0.5 rounded-[4px]">
                        <Volume2Icon className="size-3" /> Voice Tracking Active
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-[#667085] bg-white border border-[#d9e8f2] px-2 py-0.5 rounded-[4px]">
                        <MessageSquareIcon className="size-3" /> Marker Synced
                      </span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Column 2: Sales copywriting (spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5fc] px-3.5 py-1 text-xs font-semibold text-[#0077b6]">
              <SparklesIcon className="size-3.5" />
              Meeting Intelligence
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Turn Scattered Audio into Searchable Assets
            </h2>

            <p className="text-base text-[#667085] leading-relaxed">
              Meetings shouldn't be lost once the call ends. Vora AI transforms speech into structured documentation instantly. Search transcripts, click timeline tags to play specific moments, and keep track of who committed to what.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                asChild
                className="bg-[#0077b6] text-white hover:bg-[#023e8a] rounded-md px-6 shadow-sm transition-all"
              >
                <Link href="/register">Start Recording</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-[#023e8a] hover:bg-[#e8f5fc] rounded-md px-6 transition-all"
              >
                <Link href="#features">Learn about Transcription</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
