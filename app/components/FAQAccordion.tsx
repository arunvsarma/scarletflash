"use client";

import { useState } from "react";

const afacad = "var(--font-afacad), sans-serif";
const outfit = "var(--font-outfit), sans-serif";

const FAQS = [
  {
    q: "What does ScarletFlash Consulting do?",
    a: "ScarletFlash™ Consulting is a creative and technology consulting firm with 20+ years of expertise. We help creative agencies, startups, and small businesses with product design & UX, tech strategy & automation, and project management — combining human expertise with AI capability to deliver fast, measurable results.",
  },
  {
    q: "Who is ScarletFlash best suited for?",
    a: "ScarletFlash™ works with three main types of clients: creative agencies looking to sharpen their competitive edge, startups ready to turn bold ideas into scalable products, and small businesses that want to grow smarter with clearer strategy and execution.",
  },
  {
    q: "What services does ScarletFlash offer?",
    a: "We offer three core service areas: Product Design & UX (intuitive, user-centered experiences), Tech Strategy & Automation (eliminating friction and unlocking efficiency), and Project Management & Tooling (structured delivery from kickoff to launch).",
  },
  {
    q: "What does the engagement process look like?",
    a: "ScarletFlash™ follows a four-phase process: Discover (understanding your goals and constraints), Define (creating a sharp, clear scope), Build (quick sprints with real feedback loops), and Launch (full go-live support and planning for what comes next).",
  },
  {
    q: "How do I start a project with ScarletFlash?",
    a: "You can reach out directly through the contact form on the website at scarletflash.io. Share your name, email, company or project details, your service interest, and a brief description — whether it's a concrete project or just an early idea you've been exploring.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {FAQS.map(({ q, a }, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-[#1a1a1a]">
            <button
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span
                className="font-bold text-base leading-[1.4] tracking-[0.64px] text-[#f5f4f0] group-hover:text-white transition-colors"
                style={{ fontFamily: afacad }}
              >
                {q}
              </span>
              <span
                className="flex-shrink-0 mt-0.5 text-[#c8102e] text-lg leading-none transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0 }}
            >
              <p
                className="text-[#bfbdbd] text-sm leading-[22px] pb-6 max-w-[640px]"
                style={{ fontFamily: outfit }}
              >
                {a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
