"use client";

import Link from "next/link";
import { SparklesIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Meetings", href: "#meetings-demo" },
      { name: "Agents", href: "#agents-demo" },
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "SaaS Guides", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security Standards", href: "#" },
      { name: "GDPR Compliance", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#f5fbff] border-t border-[#d9e8f2] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Logo & description (spans 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-md bg-[#0077b6] text-white shadow-sm">
                <SparklesIcon className="size-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-[#0f172a]">
                Vora AI
              </span>
            </Link>
            <p className="text-xs text-[#667085] leading-relaxed max-w-sm">
              Vora AI builds custom AI-powered meeting agents that join, record,
              transcribe, and extract actionable summaries from your video
              conversations.
            </p>
          </div>

          {/* Links grid (spans 7 cols) */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-xs text-[#667085]">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#0077b6] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs text-[#667085]">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#0077b6] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5 text-xs text-[#667085]">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#0077b6] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d9e8f2] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[10px] text-[#667085] font-semibold">
              &copy; {currentYear} Vora AI, Inc. All rights reserved.
            </p>

            <p className="text-[10px] text-[#667085] font-semibold">
              Made with <span className="text-red-500">&#10084;</span>
            </p>
          </div>
          <div className="flex gap-4 text-[10px] text-[#667085] font-semibold">
            <a
              href="https://x.com/udayxgoel"
              className="hover:text-[#0077b6] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/udayxgoel"
              className="hover:text-[#0077b6] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/udayxgoel"
              className="hover:text-[#0077b6] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
