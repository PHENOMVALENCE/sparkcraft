import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "FinSpark — last-mile financial infrastructure, a Sparkcraft Technologies company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function FinSparkOpenGraphImage() {
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
          background: "linear-gradient(135deg, #071A33 0%, #123A66 100%)",
          color: "#F5F7F8",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C8A951",
            }}
          >
            FinSpark
          </div>
          <div style={{ width: 40, height: 2, background: "#C8A951" }} />
          <div style={{ fontSize: 22, color: "#9FB3C8" }}>
            A Sparkcraft Technologies company
          </div>
        </div>

        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            maxWidth: 960,
          }}
        >
          The last mile isn&rsquo;t unbankable. It&rsquo;s unreadable.
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            lineHeight: 1.4,
            color: "#C6D2DD",
            maxWidth: 880,
          }}
        >
          Credit, insurance and distribution infrastructure for the partners serving
          farmers, traders and cooperatives.
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#1FA0A8",
          }}
        >
          Dar es Salaam · Tanzania
        </div>
      </div>
    ),
    { ...size },
  );
}
