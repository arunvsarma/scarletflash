"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "SERVICES", href: "#services" },
  { label: "PROCESS", href: "#process" },
  { label: "CONTACT", href: "#contact" },
];

const afacad = "var(--font-afacad), sans-serif";

function Logo() {
  return (
    <a href="/" aria-label="ScarletFlash Consulting — home">
      <div
        className="relative inline-grid leading-[0] place-items-start"
        style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}
      >
        <p
          className="[grid-column:1] [grid-row:1] font-bold mt-px"
          style={{ fontFamily: afacad, fontSize: 32, lineHeight: 0 }}
        >
          <span style={{ color: "#f22424", lineHeight: "normal" }}>SCARLET</span>
          <span style={{ color: "#fff", lineHeight: "normal", letterSpacing: "1.28px" }}>
            F ASH
          </span>
        </p>
        {/* Lightning bolt overlaid on the "L" */}
        <div
          className="[grid-column:1] [grid-row:1] relative"
          style={{ width: 42, height: 44, marginLeft: 111 }}
        >
          <img
            alt=""
            className="absolute block max-w-none w-full h-full"
            src="/lightning-bolt.svg"
          />
        </div>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#1a1a1a]"
      style={{ background: "rgba(8,8,8,0.95)", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between h-16 lg:h-24">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center h-6 px-4 font-bold text-sm tracking-[0.28px] whitespace-nowrap transition-colors hover:text-white"
              style={{ fontFamily: afacad, color: "#777" }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:flex relative items-center justify-end overflow-hidden border border-[#c8102e] h-10 px-4 gap-2 font-semibold text-base tracking-[2.8px] whitespace-nowrap text-[#c8102e] transition-colors hover:bg-[#c8102e]/10"
            style={{ fontFamily: afacad }}
          >
            START A PROJECT
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className="block w-6 h-px bg-white transition-transform origin-center"
              style={{ transform: open ? "translateY(4px) rotate(45deg)" : undefined }}
            />
            <span
              className="block w-6 h-px bg-white transition-opacity"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-white transition-transform origin-center"
              style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : undefined }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="lg:hidden border-t border-[#1a1a1a] bg-[#0d0d0d] px-4 sm:px-8 py-6 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="font-bold text-sm tracking-[0.28px] text-[#777] hover:text-white transition-colors py-2 border-b border-[#1a1a1a]"
              style={{ fontFamily: afacad }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center border border-[#c8102e] h-10 px-4 font-semibold text-sm tracking-[2.8px] text-[#c8102e] hover:bg-[#c8102e]/10 transition-colors"
            style={{ fontFamily: afacad }}
          >
            START A PROJECT
          </a>
        </nav>
      )}
    </header>
  );
}
