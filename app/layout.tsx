import type { Metadata } from "next";
import { Afacad, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-SV5BFR9L8Z";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-afacad",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-outfit",
});

const SITE_URL = "https://scarletflash.io";
const SITE_NAME = "ScarletFlash Consulting";
const DESCRIPTION =
  "ScarletFlash Consulting blends 20+ years of design, product, technology, and leadership expertise to reimagine possibilities and drive next-generation digital transformation — across product design, tech strategy, and project execution.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Core ──────────────────────────────────────────────────────────── */
  title: {
    default: `${SITE_NAME} — Where Ideas Ignite`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "consulting",
    "product design",
    "UX design",
    "tech strategy",
    "digital transformation",
    "automation",
    "project management",
    "agile",
    "startup consulting",
    "Bengaluru consulting",
    "India consulting",
  ],
  authors: [{ name: "Arun Sarma", url: SITE_URL }],
  creator: "Arun Sarma",
  publisher: SITE_NAME,

  /* ── Canonical ─────────────────────────────────────────────────────── */
  alternates: {
    canonical: "/",
  },

  /* ── Open Graph ────────────────────────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Where Ideas Ignite`,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScarletFlash Consulting — Where Ideas Ignite",
      },
    ],
  },

  /* ── Twitter / X ───────────────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Where Ideas Ignite`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@scarletflash",
  },

  /* ── Robots ────────────────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Verification placeholders ─────────────────────────────────────── */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION_TOKEN",
  },
};

/* ── JSON-LD structured data ──────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/lightning-bolt.svg`,
      },
      description: DESCRIPTION,
      email: "arun.sarma@live.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "IN",
      },
      founder: {
        "@type": "Person",
        name: "Arun Sarma",
        email: "arun.sarma@live.in",
        jobTitle: "Founder & Principal Consultant",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "arun.sarma@live.in",
        contactType: "customer support",
        availableLanguage: "English",
        areaServed: ["IN", "US", "GB"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME} — Where Ideas Ignite`,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DESCRIPTION,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["IN", "US", "GB"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Design + UX",
              description:
                "Interfaces that think ahead of the user. Prototype, test, and refine until the experience feels effortless because good design converts.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tech Strategy + Automation",
              description:
                "Stack audits, automation opportunities, and eliminating repetitive work to accelerate delivery.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project Management + Process Setup",
              description:
                "Sprints, roadmaps, async workflows, and the systems that help teams ship consistently.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What does ScarletFlash Consulting do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ScarletFlash Consulting provides product design, UX, tech strategy, automation, and project management services. We blend 20+ years of expertise to help businesses drive digital transformation.",
          },
        },
        {
          "@type": "Question",
          name: "How does ScarletFlash work with clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We follow a four-step process: Discover (deep dive into goals and constraints in 48 hours), Define (sharp brief, clear scope), Build (quick sprints with fast feedback loops), and Launch (confident go-live with ongoing support).",
          },
        },
        {
          "@type": "Question",
          name: "Where is ScarletFlash Consulting based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ScarletFlash Consulting is based in Bengaluru, India, and serves clients globally.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact ScarletFlash Consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach us at arun.sarma@live.in. We respond within one business day with a clear perspective and no sales runaround.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${afacad.variable} ${outfit.variable} antialiased`}>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
