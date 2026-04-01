"use client";

import { useState } from "react";

const afacad = "var(--font-afacad), sans-serif";
const outfit = "var(--font-outfit), sans-serif";

const FAQS = [
  {
    q: "What does ScarletFlash™ Consulting do?",
    a: "ScarletFlash™ Consulting is a creative and technology consulting firm with 20+ years of expertise. We help creative agencies, startups, and small businesses with product + UX design, tech strategy & application development, and automation & tooling — combining human expertise with AI capability to deliver fast, measurable results.",
  },
  {
    q: "What does a typical engagement look like, and how long does it run?",
    a: "It depends on the problem. A focused strategy sprint might wrap in 2–3 weeks. A full product design and launch engagement could run 2–4 months. We work in defined phases with clear deliverables, so you always know what is happening, what is next, and what it costs before we move forward.",
  },
  {
    q: "What is the budget range for working with ScarletFlash™ Consulting?",
    a: "We offer flexible pricing based on the scope and complexity of the project. Based on our analysis of the project, we will always provide a clear proposal with detailed pricing before any work begins.",
  },
  {
    q: "What do I actually receive at the end? What are the deliverables?",
    a: "This is scoped explicitly before any work begins. Depending on the engagement, deliverables may include - UX wireframes and prototypes, tech stack recommendations, workflow documentation, automation builds, project playbooks, reports or go-live support plans. You will always know what you are getting before we start.",
  },
  {
    q: "Do you work with teams that already have in-house designers or developers?",
    a: "Yes, and often that is the best setup. We can plug into an existing team as a strategic layer, a senior collaborator, or a QA voice - without stepping on toes or duplicating work. Our goal is to complement and elevate your existing capabilities, not replace them.",
  },
  {
    q: "Do you work with clients outside India / remotely?",
    a: "Not yet. While we have the capability to work remotely with clients anywhere, we are currently focused on building our local presence and relationships in India. We hope to expand our remote services in the future as we grow.",
  },
  {
    q: "What if the scope changes mid-project?",
    a: "Scope changes are common in consulting engagements. We handle them with clear communication and flexibility. If the scope changes, we will discuss the impact on timeline and cost with you and adjust the project plan accordingly. Our goal is to ensure that you get the best value and results, even if the path changes along the way.",
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
