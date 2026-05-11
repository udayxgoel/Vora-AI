import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vora AI",
  description: "AI meeting agents for modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
      <html lang="en" className="h-full antialiased">
        <body className={`min-h-full flex flex-col ${inter.className}`}>
          <Toaster />
          {children}
        </body>
      </html>
    </TRPCReactProvider>
  );
}
