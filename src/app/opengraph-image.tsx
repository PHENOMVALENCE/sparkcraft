import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SparkCraft Technologies — Technology. Payments. Business Infrastructure.";
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
          background: "linear-gradient(135deg, #071b30 0%, #174564 100%)",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#d7aa45",
            marginBottom: 24,
          }}
        >
          SparkCraft Technologies
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
          Technology That Moves Your Business Forward.
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
          ICT solutions, digital payments, and enterprise procurement.
        </div>
      </div>
    ),
    { ...size },
  );
}
