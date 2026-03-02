import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ScarletFlash™ Consulting — Where Ideas Ignite";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 80px 86px",
          position: "relative",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "flex-start", lineHeight: 1 }}>
          <span
            style={{
              color: "#f22424",
              fontSize: 100,
              fontWeight: 700,
              letterSpacing: "-2px",
            }}
          >
            SCARLET
          </span>
          <span
            style={{
              color: "#ffffff",
              fontSize: 100,
              fontWeight: 700,
              letterSpacing: "4px",
            }}
          >
            FLASH
          </span>
          <span
            style={{
              color: "#bfbdbd",
              fontSize: 30,
              fontWeight: 400,
              marginTop: 14,
              marginLeft: 4,
            }}
          >
            ™
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#bfbdbd",
            fontSize: 28,
            fontWeight: 400,
            marginTop: 20,
            letterSpacing: "2px",
          }}
        >
          WHERE IDEAS IGNITE
        </div>

        {/* Description */}
        <div
          style={{
            color: "#888888",
            fontSize: 20,
            fontWeight: 400,
            marginTop: 28,
            maxWidth: 760,
            lineHeight: 1.6,
          }}
        >
          20+ years of design, product &amp; technology expertise — helping agencies,
          startups, and businesses move forward with speed and precision.
        </div>

        {/* Bottom scarlet bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#c8102e",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
