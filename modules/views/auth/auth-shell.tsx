import Link from "next/link";
import type { ReactNode } from "react";

type AuthShellProps = {
  children: ReactNode;
  footerHref: string;
  footerLabel: string;
  footerText: string;
  subtitle: string;
  title: string;
};

export function AuthShell({
  children,
  footerHref,
  footerLabel,
  footerText,
  subtitle,
  title,
}: AuthShellProps) {
  return (
    <main className="min-h-screen bg-[#dff5fd] px-4 py-4 text-[#0f172a] sm:px-6 lg:h-screen lg:overflow-hidden lg:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_80px_rgba(2,62,138,0.12)] lg:h-full lg:min-h-0 lg:grid-cols-2">
        <div className="flex min-h-0 items-center justify-center px-6 py-6 sm:px-10 lg:overflow-y-auto lg:px-16">
          <div className="w-full max-w-sm">
            <div className="mb-5">
              <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[#111827]">
                {title}
              </h1>
              <p className="mt-2 text-sm text-[#8a97a6]">{subtitle}</p>
            </div>

            {children}

            <p className="mt-5 text-center text-sm text-[#111827]">
              {footerText}{" "}
              <Link
                href={footerHref}
                className="font-medium text-[#0077b6] underline-offset-4 hover:underline"
              >
                {footerLabel}
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden min-h-0 p-5 lg:block">
          <div className="relative grid h-full place-items-center overflow-hidden rounded-3xl bg-[#023e8a]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(144,224,239,0.42),transparent_28%),radial-gradient(circle_at_80%_16%,rgba(0,119,182,0.5),transparent_32%),linear-gradient(145deg,#023e8a_0%,#0077b6_62%,#00a6d6_100%)]" />
            <Link
              href="/"
              className="relative flex flex-col items-center text-center text-white"
            >
              <span></span>
              <span className="text-4xl font-semibold tracking-[-0.04em]">
                Vora AI
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
