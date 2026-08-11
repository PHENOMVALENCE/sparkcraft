import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sparkcraft Consulting — Africa market intelligence and advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 80px",
          background: "linear-gradient(135deg, #0D1F17 0%, #1A3C2E 100%)",
          color: "#F8F6F1",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C9982A",
            marginBottom: 24,
          }}
        >
          Sparkcraft Consulting
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Africa&apos;s Markets, Decoded for You.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#d4d4d8",
            maxWidth: 800,
          }}
        >
          Market intelligence, advisory, and regulatory navigation across African markets.
        </div>
      </div>
    ),
    { ...size },
  );
}
