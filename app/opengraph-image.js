import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(circle at 82% 18%, rgba(0, 200, 160, 0.22), transparent 40%), radial-gradient(circle at 8% 86%, rgba(0, 120, 255, 0.2), transparent 40%), #080b0f",
          color: "#f0f4f8",
          fontFamily: "Inter, Arial, sans-serif",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "1px solid rgba(0,200,160,0.35)",
            borderRadius: "999px",
            fontSize: 24,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#00c8a0",
            padding: "10px 22px",
            fontWeight: 600,
          }}
        >
          Software Innovation Studio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 88, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.04em" }}>
            CEIT
          </div>
          <div style={{ fontSize: 48, lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em", maxWidth: 900 }}>
            We find problems. We ship solutions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 22,
          }}
        >
          <div style={{ fontSize: 24, color: "#8a96a3", letterSpacing: "0.03em" }}>
            Central Innovative Technologies
          </div>
          <div style={{ fontSize: 24, color: "#00c8a0", fontWeight: 600 }}>ceit.agency</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
