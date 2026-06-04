"use client";

import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { AgentsSection } from "../components/agents-section";
import { WorkflowSection } from "../components/workflow-section";
import { IntelligenceSection } from "../components/intelligence-section";
import { CollaborationSection } from "../components/collaboration-section";
import { CTASection } from "../components/cta-section";
import { Footer } from "../components/footer";
import { FadeIn } from "../components/fade-in";

export function LandingView() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5fbff] selection:bg-[#dff5fd] selection:text-[#023e8a]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Loads immediately with no delay for better UX and SEO */}
      <main className="flex-1">
        <Hero />

        {/* AI Meeting Agents Section */}
        <FadeIn delay={100} duration={800}>
          <AgentsSection />
        </FadeIn>

        {/* Workflow Section */}
        <FadeIn delay={100} duration={800}>
          <WorkflowSection />
        </FadeIn>

        {/* Intelligence Section */}
        <FadeIn delay={100} duration={800}>
          <IntelligenceSection />
        </FadeIn>

        {/* Collaboration & Central Search */}
        <FadeIn delay={100} duration={800}>
          <CollaborationSection />
        </FadeIn>

        {/* Call to Action banner */}
        <FadeIn delay={50} duration={600}>
          <CTASection />
        </FadeIn>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
