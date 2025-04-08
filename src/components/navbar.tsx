"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="flex h-16 items-center justify-between">
        {/* Logo (Left) */}
        <div className="left-0 flex items-center gap-2 ml-2">
          <div className="block dark:hidden">
            <Image
              src="/logo.png"
              alt="Aonedrivings logo"
              width={48}
              height={48}
              className="rounded-md"
              priority
            />
          </div>
          <div className="hidden dark:block">
            <Image
              src="/logo_white.png"
              alt="Aonedrivings logo"
              width={48}
              height={48}
              className="rounded-md"
              priority
            />
          </div>
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex gap-6">
          <NavLink href="/#services" label="Services" />
          <NavLink href="/pricing" label="Pricing" isActive />
          <NavLink href="/#testimonials" label="Testimonials" />
          <NavLink href="/contact" label="Contact" />
          <NavLink href="/about" label="About" />
        </nav>

        {/* Right Actions */}
        <div className="right-0 flex items-center gap-2 mr-2">
          <ModeToggle />
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t bg-background px-4 pb-4">
          <div className="flex flex-col gap-3 pt-4">
            <NavLink href="#services" label="Services" />
            <NavLink href="/pricing" label="Pricing" isActive />
            <NavLink href="#testimonials" label="Testimonials" />
            <NavLink href="/contact" label="Contact" />
            <NavLink href="/about" label="About" />
          </div>
        </div>
      )}
    </header>
  );
}

// Reusable NavLink Component
function NavLink({
  href,
  label,
  isActive = false,
}: {
  href: string;
  label: string;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        isActive ? "underline" : ""
      }`}
    >
      {label}
    </Link>
  );
}
