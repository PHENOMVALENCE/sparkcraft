import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sparkgreen by Sparkcraft — creative carbon solutions for Tanzania";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SparkgreenOpenGraphImage() {
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
          background: "linear-gradient(135deg, #14522C 0%, #1E6B3C 100%)",
          color: "#F3F8F4",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8BC34A",
            marginBottom: 24,
          }}
        >
          Sparkgreen · A Sparkcraft Company
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Your carbon footprint, measured, reduced and reported — creatively.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            lineHeight: 1.4,
            color: "#e4e4e7",
            maxWidth: 800,
          }}
        >
          Sustainability solutions for organizations in Tanzania and beyond.
        </div>
      </div>
    ),
    { ...size },
  );
}
