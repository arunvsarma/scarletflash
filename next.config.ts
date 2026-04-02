import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "DENY" },
  // Stop MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer policy
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Force HTTPS for 2 years, include subdomains
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Restrict browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inline scripts + Google Analytics
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdnjs.cloudflare.com",
      // Styles: self + Font Awesome CDN + Next.js inline styles
      "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com",
      // Fonts: self + Font Awesome CDN
      "font-src 'self' https://cdnjs.cloudflare.com",
      // Images: self + data URIs
      "img-src 'self' data:",
      // GA4 / GTM beacons
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
