import { ImageResponse } from "next/og";

export const alt =
  "Muthu Creatives — custom websites, web apps, and automations. Houston, TX.";
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
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 75% 70%, rgba(201,168,112,0.18), transparent 70%)",
          color: "#ece8df",
          fontSize: 32,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#c9a870", letterSpacing: 4 }}>
          MUTHU CREATIVES · HOUSTON, TX
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 1.05 }}>
            We build sites that convert.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a39b8d" }}>
            Custom websites, web apps, and automations — no templates.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
