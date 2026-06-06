"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SparklesIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Meetings", href: "#meetings-demo" },
    { name: "Agents", href: "#agents-demo" },
  ];

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    const headerOffset = 80;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "border-b border-[#d9e8f2] bg-[#f5fbff]/85 backdrop-blur-md"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-md bg-[#0077b6] text-white shadow-sm transition-transform hover:scale-105">
            <SparklesIcon className="size-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-[#0f172a]">
            Vora AI
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-sm font-medium text-[#667085] transition-colors hover:text-[#0077b6]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            className="text-sm font-medium text-[#0f172a] hover:bg-[#e8f5fc] hover:text-[#023e8a] rounded-md h-9 px-4"
          >
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            asChild
            className="bg-[#0077b6] text-white hover:bg-[#023e8a] transition-all rounded-md h-9 px-4 shadow-sm hover:shadow"
          >
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden p-2 text-[#0f172a] hover:bg-[#e8f5fc] rounded-md focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#d9e8f2] bg-[#f5fbff] px-4 py-4 shadow-inner">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-sm font-medium text-[#667085] hover:text-[#0077b6] py-1"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-[#d9e8f2] my-1" />
            <div className="flex flex-col gap-2 pt-1">
              <Button
                asChild
                variant="outline"
                className="border-[#d9e8f2] text-[#0f172a] hover:bg-[#e8f5fc] rounded-md h-10 w-full"
              >
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button
                asChild
                className="bg-[#0077b6] text-white hover:bg-[#023e8a] rounded-md h-10 w-full"
              >
                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
