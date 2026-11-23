import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Solace Bay Resort & Spa — cliffside villas above the Indian Ocean in Uluwatu, Bali";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE = "Solace Bay";

// Fetch Cormorant Garamond (subset to the glyphs we draw) at build time; falls back to the default font if offline.
async function serifFont() {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&text=${encodeURIComponent(TITLE)}`)
    ).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return src ? await (await fetch(src)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [photo, font] = await Promise.all([readFile(join(process.cwd(), "public/416527700.jpg")), serifFont()]);
  const bg = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bg} alt="" width={1200} height={630} style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", width: "100%", height: "100%" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background: "linear-gradient(90deg, rgba(12,31,26,0.92) 0%, rgba(12,31,26,0.65) 45%, rgba(12,31,26,0.05) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            color: "#fbf8f3",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 8, textTransform: "uppercase", color: "#d7b672" }}>
            Resort &amp; Spa · Uluwatu, Bali
          </div>
          <div style={{ fontSize: 116, lineHeight: 1, marginTop: 20, fontFamily: font ? "Cormorant" : undefined }}>{TITLE}</div>
          <div style={{ width: 96, height: 2, background: "#d7b672", margin: "36px 0 32px" }} />
          <div style={{ fontSize: 30, maxWidth: 560, lineHeight: 1.35, opacity: 0.9 }}>
            Cliffside villas, an infinity pool above the surf and a seaside spa.
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: font ? [{ name: "Cormorant", data: font, weight: 600, style: "normal" }] : [] },
  );
}
