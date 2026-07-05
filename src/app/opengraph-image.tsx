import { ImageResponse } from "next/og";

export const alt =
  "Muthu Creatives. Custom websites, web apps and automations. Houston, TX.";
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
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#131313",
          color: "#f2eee5",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#f14e14",
          }}
        >
          MUTHU CREATIVES · HOUSTON, TX
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1 }}>
            WE BUILD SITES
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1,
              color: "#f14e14",
            }}
          >
            THAT CONVERT.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#928d83" }}>
            Custom websites, web apps and automations. No templates.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
