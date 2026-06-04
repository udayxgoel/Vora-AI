"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BotIcon, SparklesIcon, CheckCircle2Icon, MessageSquareIcon, CodeIcon, LineChartIcon, Wand2Icon } from "lucide-react";

export function AgentsSection() {
  const [selectedAgent, setSelectedAgent] = useState("pm");

  const agentTemplates = [
    {
      id: "pm",
      title: "Project Coordinator",
      role: "Action item tracking & blockers",
      name: "Vora PM Agent",
      instructions: "Listen to the meeting and extract all action items, ownership, and due dates. Format them as a task list. Flag any blockers mentioned by team members and list them under a 'Blockers' header.",
      tone: "Concise & Action-oriented",
      icon: CheckCircle2Icon,
      color: "#0077b6",
      avatarSeed: "pm-vora"
    },
    {
      id: "tech",
      title: "Technical Architect",
      role: "System design & API decisions",
      name: "Archy Agent",
      instructions: "Extract all system design proposals, API changes, databases, and architectural decisions. Organize them by component (Frontend, Backend, Infrastructure) and note key technical justifications.",
      tone: "Detailed & Technical",
      icon: CodeIcon,
      color: "#023e8a",
      avatarSeed: "tech-vora"
    },
    {
      id: "ux",
      title: "Product & UX Reviewer",
      role: "Feedback & design critique",
      name: "UX Spec Agent",
      instructions: "Focus on user feedback, design suggestions, usability concerns, and visual specs discussed. Keep a detailed list of design modifications and proposed feedback.",
      tone: "Empathetic & Detailed",
      icon: LineChartIcon,
      color: "#00a6d6",
      avatarSeed: "ux-vora"
    }
  ];

  const activeAgent = agentTemplates.find((a) => a.id === selectedAgent) || agentTemplates[0];

  return (
    <section id="features" className="py-20 sm:py-24 bg-[#f5fbff] border-t border-[#d9e8f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Copywriting */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5fc] px-3.5 py-1 text-xs font-semibold text-[#0077b6]">
              <BotIcon className="size-3.5" />
              Custom AI Meeting Agents
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Create Custom Agents with Tailored Instructions
            </h2>
            
            <p className="text-base text-[#667085] leading-relaxed">
              Don't settle for generic meeting transcripts. Create specialized AI agents for different meeting types. Give them roles, customized instructions, and preferred output formats, and watch them summarize exactly what you need.
            </p>

            <ul className="space-y-3.5 pt-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#dff5fd] text-[#0077b6]">
                  <CheckCircle2Icon className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-[#0f172a]">
                  <strong>Reusable Templates:</strong> Deploy pre-made agents or draft custom configurations from scratch.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#dff5fd] text-[#0077b6]">
                  <CheckCircle2Icon className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-[#0f172a]">
                  <strong>Specific Context:</strong> Feed agents project files or specific rules (e.g., "Always assign tasks to lead developer").
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#dff5fd] text-[#0077b6]">
                  <CheckCircle2Icon className="size-3.5" />
                </span>
                <span className="text-sm font-medium text-[#0f172a]">
                  <strong>Multiple Agents:</strong> Have different agents generate distinct summaries for the same meeting.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <Button
                asChild
                className="bg-[#0077b6] text-white hover:bg-[#023e8a] rounded-md px-6 shadow-sm transition-all"
              >
                <Link href="/register">Create an Agent</Link>
              </Button>
            </div>
          </div>

          {/* Column 2: Agent Creation GUI Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[8px] border border-[#d9e8f2] shadow-xl p-4 sm:p-6 relative">
              {/* Presets Bar */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-[#d9e8f2] pb-4">
                {agentTemplates.map((tmpl) => {
                  const Icon = tmpl.icon;
                  const isSelected = tmpl.id === selectedAgent;
                  return (
                    <button
                      key={tmpl.id}
                      onClick={() => setSelectedAgent(tmpl.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        isSelected
                          ? "bg-[#e8f5fc] text-[#023e8a] border-[#0077b6] shadow-sm"
                          : "bg-white text-[#667085] border-[#d9e8f2] hover:bg-[#f1f7fb]"
                      }`}
                    >
                      <Icon className="size-3.5" />
                      <span>{tmpl.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Form Simulator */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#667085] uppercase tracking-wider mb-1">
                      Agent Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value={activeAgent.name}
                        className="w-full text-sm font-semibold text-[#0f172a] bg-[#f1f7fb] border border-[#d9e8f2] rounded-md px-3 py-2 focus:outline-none"
                      />
                      <span className="absolute right-2 top-2 text-[#00a6d6] size-4">
                        <Wand2Icon className="size-4 animate-pulse" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#667085] uppercase tracking-wider mb-1">
                      Output Tone
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={activeAgent.tone}
                      className="w-full text-sm text-[#0f172a] bg-[#f1f7fb] border border-[#d9e8f2] rounded-md px-3 py-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#667085] uppercase tracking-wider mb-1">
                    System Instructions
                  </label>
                  <textarea
                    rows={4}
                    readOnly
                    value={activeAgent.instructions}
                    className="w-full text-sm text-[#0f172a] bg-[#f1f7fb] border border-[#d9e8f2] rounded-md p-3 focus:outline-none resize-none font-mono text-xs leading-normal"
                  />
                </div>

                <div className="border border-[#d9e8f2] rounded-md p-3.5 bg-[#f5fbff] flex gap-3.5 items-start">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white border border-[#d9e8f2] text-[#0077b6] shadow-sm">
                    <SparklesIcon className="size-4 fill-[#00a6d6] text-[#00a6d6]" />
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-[#0f172a]">
                      Preview Agent Response:
                    </h4>
                    <p className="text-[11px] text-[#667085] leading-relaxed">
                      "I will listen as the <span className="font-semibold text-[#023e8a]">{activeAgent.title}</span>. I'll automatically capture all conversation related to {activeAgent.role} and draft your notes in a {activeAgent.tone.toLowerCase()} format."
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative line/circles representing saved status */}
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-[#00a6d6]" />
                <span className="size-1.5 rounded-full bg-[#0077b6]" />
                <span className="size-1.5 rounded-full bg-[#023e8a]" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
