"use client";

import { BotIcon, CalendarPlusIcon, HeadphonesIcon, FileSpreadsheetIcon, ArrowRightIcon } from "lucide-react";

export function WorkflowSection() {
  const steps = [
    {
      num: "01",
      title: "Create Agent",
      description: "Define custom instructions or choose a template for your meeting agent.",
      icon: BotIcon,
      bgColor: "#e8f5fc",
      textColor: "#0077b6",
      accentBg: "#dff5fd"
    },
    {
      num: "02",
      title: "Join Call",
      description: "Send your Vora Bridge link or add vora@vora.ai to your calendar invite.",
      icon: CalendarPlusIcon,
      bgColor: "#dff5fd",
      textColor: "#023e8a",
      accentBg: "#e8f5fc"
    },
    {
      num: "03",
      title: "Record & Transcribe",
      description: "Vora records the call, highlighting key speakers and transcripts live.",
      icon: HeadphonesIcon,
      bgColor: "#f1f7fb",
      textColor: "#00a6d6",
      accentBg: "#dff5fd"
    },
    {
      num: "04",
      title: "Generate Summary",
      description: "Get structured action items, decisions, and summaries in minutes.",
      icon: FileSpreadsheetIcon,
      bgColor: "#e8f5fc",
      textColor: "#023e8a",
      accentBg: "#f1f7fb"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white border-t border-[#d9e8f2] relative overflow-hidden">
      {/* Wave decoration in background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f5fbff] to-transparent opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            How Vora AI Fits Into Your Workflow
          </h2>
          <p className="mt-4 text-base text-[#667085]">
            From pre-meeting configuration to post-meeting summary delivery, Vora AI automates the entire documentation lifecycle.
          </p>
        </div>

        {/* Desktop Steps Grid */}
        <div className="relative">
          {/* Animated Connecting dashed line (visible on lg screens) */}
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] -translate-y-8 h-0.5 hidden lg:block">
            <svg className="w-full h-2 overflow-visible" fill="none">
              <path
                d="M 0 4 H 600"
                stroke="#d9e8f2"
                strokeWidth="2.5"
                strokeDasharray="8,8"
                className="animate-[dash_20s_linear_infinite]"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center p-6 bg-[#f5fbff] border border-[#d9e8f2] rounded-[8px] hover:border-[#0077b6] hover:bg-[#e8f5fc]/30 transition-all duration-300 hover:shadow-md group"
                >
                  {/* Step Badge */}
                  <span className="text-[10px] font-bold text-[#667085] bg-[#f1f7fb] border border-[#d9e8f2] px-2 py-0.5 rounded-[4px] mb-4">
                    STEP {step.num}
                  </span>

                  {/* Icon Circle */}
                  <div
                    style={{ backgroundColor: step.accentBg }}
                    className="flex size-14 items-center justify-center rounded-full border border-[#d9e8f2] text-[#0077b6] mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon className="size-6" style={{ color: step.textColor }} />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-[#0f172a] mb-2 flex items-center gap-1.5 justify-center">
                    {step.title}
                    {idx < steps.length - 1 && (
                      <ArrowRightIcon className="size-3.5 text-[#667085]/60 block md:hidden" />
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global CSS Keyframes rule injected directly inside a style tag for the dashed animation */}
        <style jsx global>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -1000;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
