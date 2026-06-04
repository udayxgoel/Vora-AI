"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayIcon, VideoIcon, MicIcon, MicOffIcon, MessageSquareIcon, SparklesIcon, FileTextIcon, ListTodoIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f5fc] via-[#f5fbff] to-[#f5fbff] pt-16 pb-20 sm:pt-20 lg:pt-28">
      {/* Decorative background grid line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d9e8f2_1px,transparent_1px),linear-gradient(to_bottom,#d9e8f2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#dff5fd] px-3.5 py-1 text-xs font-semibold text-[#023e8a] mb-5 animate-pulse">
            <SparklesIcon className="size-3.5 fill-[#00a6d6] text-[#00a6d6]" />
            Introducing Vora AI Agents v2.0
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
            Meet Smarter with{" "}
            <span className="relative inline-block text-[#0077b6]">
              AI Agents
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#00a6d6]/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,7 C30,2 70,2 100,7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#667085] leading-relaxed">
            Vora AI automatically joins your video calls, transcribes conversations in real time, and deploys customizable AI agents that extract summaries, highlight action items, and keep your workspace synced.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="bg-[#0077b6] text-white hover:bg-[#023e8a] h-12 px-6 rounded-md font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/register">Get Started Free</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#d9e8f2] bg-white text-[#0f172a] hover:bg-[#f1f7fb] h-12 px-6 rounded-md font-semibold transition-all"
            >
              <Link href="/login">View Dashboard</Link>
            </Button>
          </div>
        </div>

        {/* High-Fidelity Interactive Mockup */}
        <div className="relative mx-auto max-w-5xl rounded-[8px] border border-[#d9e8f2] bg-white p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.005]">
          <div className="flex items-center justify-between border-b border-[#d9e8f2] pb-3 mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ef4444] animate-ping" />
              <span className="text-xs font-semibold text-[#0f172a] tracking-wider uppercase">Live: Product Alignment Sync</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#667085] font-medium bg-[#f1f7fb] px-2 py-0.5 rounded-[4px] border border-[#d9e8f2]">00:18:42</span>
              <span className="text-xs font-medium text-white bg-[#ef4444] px-2.5 py-0.5 rounded-[4px] shadow-sm">REC</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Live Video Grid (Left, spans 2 cols on lg) */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-2 bg-[#f1f7fb] p-2 rounded-[6px] min-h-[300px]">
              {/* Participant 1 */}
              <div className="relative bg-[#0f172a] rounded-[6px] overflow-hidden group border border-[#d9e8f2]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#023e8a]/20 to-transparent">
                  <div className="size-16 rounded-full bg-[#0077b6] text-white flex items-center justify-center font-bold text-xl ring-4 ring-white/10">
                    JD
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#0f172a]/65 backdrop-blur-[2px] text-white text-xs px-2 py-0.5 rounded-[4px] flex items-center gap-1.5">
                  <MicIcon className="size-3 text-[#00a6d6]" />
                  <span>John Doe (Product Owner)</span>
                </div>
              </div>

              {/* Participant 2 */}
              <div className="relative bg-[#0f172a] rounded-[6px] overflow-hidden border border-[#d9e8f2]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-cyan-900/20 to-transparent">
                  <div className="size-16 rounded-full bg-[#00a6d6] text-white flex items-center justify-center font-bold text-xl ring-4 ring-white/10">
                    SA
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#0f172a]/65 backdrop-blur-[2px] text-white text-xs px-2 py-0.5 rounded-[4px] flex items-center gap-1.5">
                  <MicIcon className="size-3 text-[#00a6d6]" />
                  <span>Sarah Alana (Lead Dev)</span>
                </div>
              </div>

              {/* Participant 3 */}
              <div className="relative bg-[#0f172a] rounded-[6px] overflow-hidden border border-[#d9e8f2]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-slate-800/30 to-transparent">
                  <div className="size-16 rounded-full bg-[#667085] text-white flex items-center justify-center font-bold text-xl ring-4 ring-white/10">
                    MK
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#0f172a]/65 backdrop-blur-[2px] text-white text-xs px-2 py-0.5 rounded-[4px] flex items-center gap-1.5">
                  <MicOffIcon className="size-3 text-[#ef4444]" />
                  <span>Mark K. (Designer)</span>
                </div>
              </div>

              {/* Participant 4: Vora AI Agent */}
              <div className="relative bg-gradient-to-br from-[#023e8a] to-[#0077b6] rounded-[6px] overflow-hidden border-2 border-[#00a6d6] shadow-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative">
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a6d6] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00a6d6]"></span>
                    </span>
                    <div className="size-16 rounded-full bg-white text-[#0077b6] flex items-center justify-center font-bold text-xl shadow-md">
                      <SparklesIcon className="size-8 fill-[#00a6d6] text-[#00a6d6]" />
                    </div>
                  </div>
                  <span className="mt-3 text-xs font-semibold text-white tracking-wide bg-[#00a6d6] px-2 py-0.5 rounded-full">
                    Vora AI Agent
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 bg-white/15 backdrop-blur-[2px] text-white text-xs px-2 py-0.5 rounded-[4px] flex items-center gap-1.5">
                  <MicIcon className="size-3 text-[#00a6d6] animate-bounce" />
                  <span>Vora (AI Assistant)</span>
                </div>
                <div className="absolute top-2 left-2 bg-[#00a6d6]/25 border border-[#00a6d6]/40 text-white text-[10px] px-1.5 py-0.5 rounded-[4px] font-medium">
                  Listening & Summing...
                </div>
              </div>
            </div>

            {/* Live Intel (Right Sidebar, spans 1 col) */}
            <div className="flex flex-col gap-2 rounded-[6px]">
              {/* Real-time Transcript */}
              <div className="flex-1 border border-[#d9e8f2] rounded-[6px] p-3 flex flex-col min-h-[170px] max-h-[190px] overflow-hidden bg-white">
                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-[#d9e8f2]">
                  <MessageSquareIcon className="size-3.5 text-[#0077b6]" />
                  <span className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wide">Live Transcript</span>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto text-[11px] pr-1 leading-snug">
                  <div>
                    <span className="font-semibold text-[#023e8a]">Sarah Alana</span> <span className="text-[#667085] ml-1">10:18:22</span>
                    <p className="text-[#0f172a] mt-0.5">Let's lock in the API architecture before we start drafting the agent deployment scripts.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#023e8a]">John Doe</span> <span className="text-[#667085] ml-1">10:18:35</span>
                    <p className="text-[#0f172a] mt-0.5">Agreed. Vora, please add a task to finalize the API architecture design by tomorrow evening.</p>
                  </div>
                  <div className="bg-[#dff5fd] p-1.5 rounded-[4px] border border-[#00a6d6]/20">
                    <span className="font-semibold text-[#0077b6] flex items-center gap-1">
                      <SparklesIcon className="size-3 text-[#00a6d6]" />
                      Vora AI Agent
                    </span>
                    <p className="text-[#023e8a] mt-0.5 italic">Added to action items: Finalize the API architecture design by tomorrow evening (Due: June 5, Owner: Sarah).</p>
                  </div>
                </div>
              </div>

              {/* Real-time Summary preview */}
              <div className="flex-1 border border-[#d9e8f2] rounded-[6px] p-3 flex flex-col min-h-[170px] max-h-[190px] overflow-hidden bg-white">
                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-[#d9e8f2]">
                  <FileTextIcon className="size-3.5 text-[#0077b6]" />
                  <span className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wide">Live Summary Notes</span>
                </div>
                <div className="flex-1 overflow-y-auto text-[11px] space-y-2 pr-1">
                  <div>
                    <span className="font-semibold text-[#0f172a]">Meeting Theme</span>
                    <p className="text-[#667085]">API architecture definition & developer task sync.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0f172a] flex items-center gap-1 mt-1">
                      <ListTodoIcon className="size-3 text-[#00a6d6]" />
                      Key Action Items
                    </span>
                    <ul className="list-disc pl-3 text-[#667085] mt-1 space-y-1">
                      <li>Finalize API architecture design <span className="text-[#0077b6] font-semibold">(Sarah)</span></li>
                      <li>Draft agent deployment scripts <span className="text-[#0077b6] font-semibold">(John)</span></li>
                      <li>Review mock design specifications <span className="text-[#0077b6] font-semibold">(Mark)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meeting Controls Bar */}
          <div className="flex items-center justify-between border-t border-[#d9e8f2] mt-3 pt-3 px-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#00a6d6]" />
              <span className="text-[10px] text-[#667085] font-medium hidden sm:inline">Connected via Vora Call-Bridge</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-[#f1f7fb] hover:bg-[#dff5fd] text-[#023e8a] rounded-full transition-colors border border-[#d9e8f2]" aria-label="Mute microphone">
                <MicIcon className="size-4" />
              </button>
              <button className="p-2 bg-[#f1f7fb] hover:bg-[#dff5fd] text-[#023e8a] rounded-full transition-colors border border-[#d9e8f2]" aria-label="Toggle camera">
                <VideoIcon className="size-4" />
              </button>
              <button className="px-4 py-2 bg-[#ef4444] hover:bg-[#dc2626] text-white text-xs font-semibold rounded-[4px] shadow transition-colors ml-2">
                Leave Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
