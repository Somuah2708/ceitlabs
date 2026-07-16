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
          background: "#0a0a09",
          color: "#f2ede3",
          fontFamily: "Georgia, serif",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#b08d57",
            fontFamily: "Arial, sans-serif",
            fontWeight: 600,
          }}
        >
          <div style={{ width: 36, height: 1, background: "#b08d57" }} />
          Software Innovation Studio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 84, lineHeight: 1, fontWeight: 500, letterSpacing: "-0.01em" }}>
            CEIT
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 46,
              lineHeight: 1.15,
              fontWeight: 400,
              letterSpacing: "-0.005em",
              maxWidth: 900,
              gap: 12,
            }}
          >
            <span>We find problems.</span>
            <span style={{ fontStyle: "italic", color: "#c9a468" }}>We ship solutions.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(242,237,227,0.16)",
            paddingTop: 22,
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div style={{ fontSize: 22, color: "#8c8477", letterSpacing: "0.03em" }}>
            Central Innovative Technologies
          </div>
          <div style={{ fontSize: 22, color: "#b08d57", fontWeight: 600 }}>ceitlabs.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
