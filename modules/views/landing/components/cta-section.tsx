"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#e8f5fc] py-20 border-t border-[#d9e8f2]">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dff5fd] px-3.5 py-1 text-xs font-semibold text-[#023e8a] mb-5">
          <SparklesIcon className="size-3.5 fill-[#00a6d6] text-[#00a6d6]" />
          Boost Team Productivity Today
        </span>

        <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
          Turn Every Meeting into Useful Knowledge
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base text-[#667085] leading-relaxed">
          Join thousands of modern product teams using Vora AI to record, transcribe, summarize, and query their conversations.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
