import Navbar from "./Navbar";
import ContactForm from "./ContactForm";

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
          className="mt-8 text-base text-[#777] leading-[24px] max-w-[655px]"
          style={{ fontFamily: outfit }}
        >
          ScarletFlash Consulting brings 20+ years of expertise across design, product, and technology to help creative agencies sharpen their edge, startups turn bold ideas into scalable products, and small businesses grow smarter. We bring the clarity, strategy, and execution to move you forward with confidence and measurable momentum.
        </p>

        <div className="mt-10">
          <PrimaryButton label="START A PROJECT" />
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
    <article className="bg-[#1a1a1a] p-6 flex flex-col gap-4">
      <p className="text-[#777] text-base" style={{ fontFamily: outfit }}>
        {num}
      </p>
      <h3
        className="text-[#f5f4f0] text-base font-normal leading-[1.4] tracking-[1.6px] whitespace-pre-wrap"
        style={{ fontFamily: afacad }}
      >
        {title}
      </h3>
      <p className="text-[#777] text-sm leading-[20px]" style={{ fontFamily: outfit }}>
        {description}
      </p>
    </article>
  );
}

function WhatWeDo() {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 scroll-mt-16 lg:scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Top row: heading left, description right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 lg:mb-12">
          <div>
            <SectionEyebrow label="WHAT WE DO" />
            <h2
              id="services-heading"
              className="font-bold text-[42px] sm:text-[52px] leading-[1.1] text-[#f5f4f0]"
              style={{ fontFamily: afacad }}
            >
              EVOLUTION AT
              <br />
              SPEED
            </h2>
          </div>
          <p
            className="text-[#777] text-base leading-[24px] max-w-[440px] lg:mb-2"
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
            title={"PRODUCT DESIGN\n+ UX"}
            description="From first click to final step — intuitive, purposeful design that turns complexity into experiences users love."
          />
          <ServiceCard
            num="02"
            title={"TECH STRATEGY\n+ AUTOMATION"}
            description="Strategic solutions that eliminate friction, automate the complex, and unlock real efficiency."
          />
          <ServiceCard
            num="03"
            title={"PROJECT MANAGEMENT\n+ TOOLING"}
            description="From kickoff to delivery, structured project management and smart tooling keeps complexity under control and teams on track."
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
          <span className="text-[#777] text-base" style={{ fontFamily: afacad }}>
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
        className="text-[#777] text-sm leading-[20px]"
        style={{ fontFamily: outfit, fontWeight: 300 }}
      >
        {description}
      </p>
    </div>
  );
}

function HowWeWork() {
  return (
    <section
      id="process"
      className="py-16 lg:py-24 scroll-mt-16 lg:scroll-mt-24"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: heading */}
          <div className="lg:w-[360px] flex-shrink-0">
            <SectionEyebrow label="HOW WE WORK" />
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
      className="py-16 lg:py-24 scroll-mt-16 lg:scroll-mt-24"
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
              className="text-[#777] text-sm leading-[20px] max-w-[368px] mb-10"
              style={{ fontFamily: outfit }}
            >
              Let&apos;s talk. Whether it is a question, a project, or just an idea that you have
              been dabbling with. This is where momentum begins!
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
    <footer className="border-t border-[#1a1a1a] py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <p
          className="text-[#777] text-xs tracking-[1.08px]"
          style={{ fontFamily: afacad, fontWeight: 500 }}
        >
          © 2026 ScarletFlash Consulting
        </p>
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
        <WhatWeDo />
        <HowWeWork />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
