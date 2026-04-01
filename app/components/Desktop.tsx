import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import FAQAccordion from "./FAQAccordion";

const afacad = "var(--font-afacad), sans-serif";
const outfit = "var(--font-outfit), sans-serif";

/* ─── Reusable primitives ──────────────────────────────────────────────────── */

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-px flex-shrink-0 bg-[#c8102e]" />
      <span
        className="font-medium text-[#c8102e] text-xs sm:text-sm tracking-[1.26px] whitespace-nowrap"
        style={{ fontFamily: afacad }}
      >
        {label}
      </span>
    </div>
  );
}

function PrimaryButton({ label, href = "#contact" }: { label: string; href?: string }) {
  return (
    <a
      href={href}
      className="btn-elastic relative inline-flex items-center justify-center gap-4 h-10 overflow-hidden bg-[#c8102e] px-6 font-semibold text-base text-white tracking-[2.08px] whitespace-nowrap hover:bg-[#a00d25] transition-colors"
      style={{ fontFamily: afacad }}
    >
      <span style={{ width: 144 }}>{label}</span>
      <i className="fa-solid fa-arrow-right text-base" />
    </a>
  );
}

/* ─── Hero background nodes ────────────────────────────────────────────────── */

// Scattered randomly across the hero section
const HERO_NODES = [
  { x: "8%",  y: "14%", size: 5,   dur: "3.2s", delay: "0.0s", rdur: "3.8s", rdelay: "0.4s" },
  { x: "22%", y: "72%", size: 4,   dur: "4.1s", delay: "1.3s", rdur: "4.2s", rdelay: "0.8s" },
  { x: "38%", y: "24%", size: 6,   dur: "3.6s", delay: "0.7s", rdur: "3.5s", rdelay: "0.2s" },
  { x: "51%", y: "82%", size: 4.5, dur: "4.8s", delay: "2.1s", rdur: "4.6s", rdelay: "1.1s" },
  { x: "63%", y: "40%", size: 5.5, dur: "3.4s", delay: "0.4s", rdur: "4.0s", rdelay: "0.6s" },
  { x: "77%", y: "16%", size: 4,   dur: "5.0s", delay: "1.8s", rdur: "4.8s", rdelay: "0.3s" },
  { x: "88%", y: "64%", size: 5,   dur: "3.7s", delay: "0.9s", rdur: "3.6s", rdelay: "1.3s" },
  { x: "14%", y: "46%", size: 6,   dur: "4.3s", delay: "2.4s", rdur: "4.4s", rdelay: "0.7s" },
  { x: "45%", y: "56%", size: 4,   dur: "3.9s", delay: "1.1s", rdur: "3.9s", rdelay: "0.5s" },
  { x: "71%", y: "78%", size: 5,   dur: "4.6s", delay: "0.2s", rdur: "4.1s", rdelay: "1.0s" },
  { x: "93%", y: "32%", size: 4.5, dur: "3.3s", delay: "1.6s", rdur: "3.7s", rdelay: "0.9s" },
  { x: "30%", y: "88%", size: 5.5, dur: "4.4s", delay: "2.8s", rdur: "4.5s", rdelay: "0.1s" },
  { x: "57%", y: "10%", size: 4,   dur: "3.8s", delay: "0.5s", rdur: "4.3s", rdelay: "0.6s" },
  { x: "82%", y: "90%", size: 5,   dur: "4.2s", delay: "1.9s", rdur: "3.8s", rdelay: "1.2s" },
];

function HeroNodes() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {HERO_NODES.map((n, i) => (
        /* Anchor div: centered exactly at (x%, y%) via translate */
        <div
          key={i}
          className="absolute"
          style={{
            left: n.x,
            top: n.y,
            width: n.size,
            height: n.size,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Ripple ring — scales outward and fades */}
          <div
            className="node-ring absolute inset-0 rounded-full"
            style={{
              border: "1.5px solid #c8102e",
              "--ring-dur": n.rdur,
              "--ring-delay": n.rdelay,
            } as React.CSSProperties}
          />
          {/* Solid glowing dot — breathes in opacity + scale */}
          <div
            className="node-dot absolute inset-0 rounded-full"
            style={{
              background: "#c8102e",
              boxShadow: "0 0 10px 4px rgba(200,16,46,0.8)",
              "--dur": n.dur,
              "--delay": n.delay,
            } as React.CSSProperties}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28"
      aria-label="Hero"
    >
      {/* Ambient background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/bg-image.png"
          alt=""
          className="absolute w-full h-full object-cover opacity-30"
          style={{ objectPosition: "center 20%" }}
        />
      </div>

      <HeroNodes />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8">
        <SectionEyebrow label="CREATIVE + TECH CONSULTING" />

        <h1
          className="font-bold leading-[1.0] text-[52px] sm:text-[64px] lg:text-[72px] whitespace-nowrap"
          style={{ fontFamily: afacad }}
        >
          <span className="block text-[#f5f4f0]">TURN VISION</span>
          <span className="block text-[#c8102e]">INTO VELOCITY</span>
        </h1>

        <p
          className="mt-8 text-base text-[#bfbdbd] leading-[24px] max-w-[655px]"
          style={{ fontFamily: outfit }}
        >
          ScarletFlash™ Consulting brings 20+ years of design, product, and technology expertise to help creative agencies sharpen their edge, startups turn bold ideas into scalable products, and small businesses grow smarter - bringing the clarity, strategy, and execution to move you forward with confidence and measurable momentum.
        </p>

        <div className="mt-10">
          <PrimaryButton label="START A PROJECT" />
        </div>
      </div>
    </section>
  );
}

/* ─── About ────────────────────────────────────────────────────────────────── */

const SKILL_ROWS = [
  {
    role: "DESIGNER",
    description: [
      "Focus on crafting clean, intuitive designs that lives at the intersection of",
      "user intuition, functional precision, and data intelligence",
    ],
    tags: ["Figma + Claude", "Data Vizualization", "User Experience"],
  },
  {
    role: "DEVELOPER",
    description: [
      "Write purposeful, functional code that brings design to life, powers complex",
      "applications, and solves real problems efficiently",
    ],
    tags: ["HTML + CSS", "JavaScript", "NodeJS", "ReactJS", "Angular"],
  },
  {
    role: "STRATEGIST",
    description: [
      "Craft end-to-end solutions that connect the right data to the right decisions,",
      "helping brands engage smarter, market adaptively, and stay ahead.",
    ],
    tags: ["Actionable Insights", "Solution Architecture", "Strategy Consulting"],
  },
];

function SkillTag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center justify-center px-4 py-2 border border-[#1a1a1a] bg-[#080808] text-[#777] text-[10px] tracking-[1.6%] whitespace-nowrap rounded-[24px]"
      style={{ fontFamily: outfit }}
    >
      {label}
    </span>
  );
}

function About() {
  return (
    <section
      id="about"
      className="py-16 scroll-mt-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <SectionEyebrow label="ABOUT" />

        {/* Headline */}
        <h2
          id="about-heading"
          className="font-bold text-[42px] sm:text-[52px] leading-[0.96] text-[#f5f4f0] mb-10"
          style={{ fontFamily: afacad }}
        >
          THE MIND BEHIND<br />THE MOMENTUM
        </h2>

        {/* Photo + Skill rows */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">

          {/* Left: photo + name */}
          <div className="flex-shrink-0 flex flex-col gap-6 lg:w-[263px]">
            <div className="w-[224px] h-[224px] rounded-2xl overflow-hidden border border-[#2b2a2a]">
              <img
                src="/profile.jpg"
                alt="Arun Sarma — Founder & Principal Consultant"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p
              className="text-[14px] font-semibold tracking-[1.6px] leading-[1.29] text-center w-[224px]"
              style={{ fontFamily: afacad }}
            >
              <span className="text-[#f5f4f0]">ARUN V. SARMA</span><br />
              <span className="text-[#777]">FOUNDER &amp; PRINCIPAL CONSULTANT</span>
            </p>
          </div>

          {/* Right: skill rows */}
          <div className="flex-1 flex flex-col">
            {SKILL_ROWS.map((row, i) => (
              <div
                key={row.role}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 py-4 ${i < SKILL_ROWS.length - 1 ? "border-b border-[#1a1a1a]" : ""}`}
              >
                {/* Role */}
                <div className="sm:w-[122px] flex-shrink-0">
                  <span
                    className="text-[#f5f4f0] text-[16px] font-semibold"
                    style={{ fontFamily: afacad, letterSpacing: "1.6px" }}
                  >
                    {row.role}
                  </span>
                </div>

                {/* Description + Tags */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[#bfbdbd] text-[12px] leading-[16px]"
                      style={{ fontFamily: outfit }}
                    >
                      {row.description[0]}<br />{row.description[1]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 flex-shrink-0">
                    {row.tags.map((tag) => (
                      <SkillTag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── What We Do ───────────────────────────────────────────────────────────── */

function ServiceCard({
  num,
  title,
  description,
}: {
  num: string;
  title: string;
  description: string;
}) {
  return (
    <article className="bg-[#1a1a1a] p-6 flex flex-col gap-4 border-t border-t-transparent hover:border-t-[#c8102e] transition-colors duration-300">
      <p className="text-[#bfbdbd] text-base" style={{ fontFamily: outfit }}>
        {num}
      </p>
      <h3
        className="text-white text-base font-normal leading-[1.4] tracking-[1.6px] whitespace-pre-wrap"
        style={{ fontFamily: afacad }}
      >
        {title}
      </h3>
      <p className="text-[#bfbdbd] text-sm leading-[20px]" style={{ fontFamily: outfit }}>
        {description}
      </p>
    </article>
  );
}

function WhatWeDo() {
  return (
    <section
      id="services"
      className="py-16 lg:py-16 scroll-mt-16 lg:scroll-mt-16"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Heading + description stacked */}
        <div className="mb-10 lg:mb-12">
          <SectionEyebrow label="SERVICES" />
          <h2
            id="services-heading"
            className="font-bold text-[42px] sm:text-[52px] leading-[1.1] text-[#f5f4f0]"
            style={{ fontFamily: afacad }}
          >
            EVOLUTION AT
            <br />
            SPEED
          </h2>
          <p
            className="text-[#bfbdbd] text-base leading-[24px] max-w-[655px] mt-6"
            style={{ fontFamily: outfit }}
          >
            Every engagement is built on four non-negotiables: speed, clarity, quality, and impact
            you can measure. Human expertise meets AI capability so every decision is sharper,
            every outcome faster, and every result measurable.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard
            num="01"
            title={"PRODUCT +\nUX DESIGN"}
            description="We turn tangled workflows and bold ideas into clean, intuitive experiences users love."
          />
          <ServiceCard
            num="02"
            title={"TECH STRATEGY +\nAPPLICATION DEVELOPMENT"}
            description="Smart tech strategy and custom-built applications that turn your vision into working, scalable software."
          />
          <ServiceCard
            num="03"
            title={"AUTOMATION +\nTOOLING"}
            description="Smart automation and hand-picked tooling that keeps your team lean, fast, and always in flow."
          />
        </div>
      </div>
    </section>
  );
}

/* ─── How We Work ──────────────────────────────────────────────────────────── */

function ProcessStep({
  num,
  label,
  description,
}: {
  num: string;
  label: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 lg:pr-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex-shrink-0 border border-[#8b0b1f] bg-[#080808] flex items-center justify-center">
          <span className="text-[#bfbdbd] text-base" style={{ fontFamily: afacad }}>
            {num}
          </span>
        </div>
        {/* Connector line — desktop only */}
        <div className="hidden lg:block flex-1 h-px bg-[#1a1a1a]" />
      </div>
      <h3
        className="text-white text-sm font-medium tracking-[3.36px] mt-2"
        style={{ fontFamily: afacad }}
      >
        {label}
      </h3>
      <p
        className="text-[#bfbdbd] text-sm leading-[20px]"
        style={{ fontFamily: outfit, fontWeight: 300 }}
      >
        {description}
      </p>
    </div>
  );
}

/* ─── FAQs ──────────────────────────────────────────────────────────────────── */

function FAQs() {
  return (
    <section
      id="faqs"
      className="py-16 lg:py-16 scroll-mt-16 lg:scroll-mt-16"
      aria-labelledby="faqs-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <SectionEyebrow label="FAQs" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          {/* Left: heading */}
          <div className="lg:w-[360px] flex-shrink-0">
            <h2
              id="faqs-heading"
              className="font-bold text-[42px] sm:text-[52px] leading-[1.1] text-[#f5f4f0]"
              style={{ fontFamily: afacad }}
            >
              BEFORE YOU
              <br />
              REACH OUT
            </h2>
            <p
              className="text-[#bfbdbd] text-base leading-[24px] mt-6"
              style={{ fontFamily: outfit }}
            >
              Answers to the most common questions you might have. Still have questions? That is
              what the contact form below is for.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="flex-1 border-t border-[#1a1a1a]">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section
      id="process"
      className="py-16 lg:py-16 scroll-mt-16 lg:scroll-mt-16"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: heading */}
          <div className="lg:w-[360px] flex-shrink-0">
            <SectionEyebrow label="PROCESS" />
            <h2
              id="process-heading"
              className="font-bold text-[42px] sm:text-[52px] leading-[1.1] text-[#f5f4f0]"
              style={{ fontFamily: afacad }}
            >
              EXECUTION,
              <br />
              ACCELERATED
            </h2>
          </div>

          {/* Right: 4 process steps */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:items-start pt-12">
            <ProcessStep
              num="01"
              label="DISCOVER"
              description="Deep dive into your goals, constraints, and opportunities."
            />
            <ProcessStep
              num="02"
              label="DEFINE"
              description="Sharp brief. Clear scope. No ambiguity."
            />
            <ProcessStep
              num="03"
              label="BUILD"
              description="Quick sprints with visibility. Real work & fast feedback loops."
            />
            <ProcessStep
              num="04"
              label="LAUNCH"
              description="Launch ready. From go-live to what comes next, every step is covered."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Get in Touch ─────────────────────────────────────────────────────────── */

function GetInTouch() {
  return (
    <section
      id="contact"
      className="py-16 lg:py-16 scroll-mt-16 lg:scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: info */}
          <div>
            <SectionEyebrow label="GET IN TOUCH" />
            <h2
              id="contact-heading"
              className="font-bold text-[42px] sm:text-[52px] leading-[1.1] text-[#f5f4f0] mb-8"
              style={{ fontFamily: afacad }}
            >
              LET&apos;S BUILD
              <br />
              SOMETHING.
            </h2>
            <p
              className="text-[#bfbdbd] text-sm leading-[20px] max-w-[368px] mb-10"
              style={{ fontFamily: outfit }}
            >
              Let&apos;s talk! Whether it is a question, a project, or just an idea that you have
              been dabbling with. This is where momentum begins!
              <br /><br />
              We typically respond within 1-2 business days. Looking forward to connecting with you.
            </p>

          </div>

          {/* Right: form */}
          <div className="pt-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ───────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        <p
          className="text-[#bfbdbd] text-xs tracking-[1.08px]"
          style={{ fontFamily: afacad, fontWeight: 500 }}
        >
          © 2026 ScarletFlash™ Consulting
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/arunsarma/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#bfbdbd] hover:text-[#c8102e] transition-colors"
          >
            <i className="fa-brands fa-linkedin text-base" />
          </a>
          <a
            href="https://x.com/arunvsarma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-[#bfbdbd] hover:text-[#c8102e] transition-colors"
          >
            <i className="fa-brands fa-x-twitter text-base" />
          </a>
          <a
            href="https://www.instagram.com/arunvsarma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#bfbdbd] hover:text-[#c8102e] transition-colors"
          >
            <i className="fa-brands fa-instagram text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function Desktop() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <HowWeWork />
        <FAQs />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
