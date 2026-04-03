"use client";
import { useState, useEffect } from "react";

const sectionColors: Record<string, string> = {
  "1 – Utility Bar":          "#FF6B6B",
  "2 – Header":               "#4ECDC4",
  "3 – Hero":                 "#45B7D1",
  "4 – Produktové kategorie": "#FFE66D",
  "4a – Trust Bar":           "#95E1D3",
  "5 – Odvětví":              "#F38181",
  "6 – Promo bannery":        "#AA96DA",
  "7 – GridVis® Software":    "#FCBAD3",
  "8 – Doporučené produkty":  "#7EC8E3",
  "9 – Reference":            "#C3F584",
  "10 – Novinky":             "#FFB347",
  "11 – Průvodce výběrem":    "#DDA0DD",
  "12 – Dokumentace":         "#87CEEB",
  "13 – Normy":               "#F0E68C",
  "14 – Kontakt":             "#98FB98",
  "15 – FAQ":                 "#FFB6C1",
  "16 – Partneři":            "#D2B48C",
  "17 – Footer":              "#B0C4DE",
};

export default function DebugOverlayA() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");

    sections.forEach((el) => {
      const name = el.getAttribute("data-section") || "";
      const color = sectionColors[name] || "#ccc";

      if (active) {
        el.style.outline = `3px solid ${color}`;
        el.style.outlineOffset = "-3px";
        el.style.position = "relative";

        let label = el.querySelector(".debug-label") as HTMLElement | null;
        if (!label) {
          label = document.createElement("div");
          label.className = "debug-label";
          label.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            background: ${color};
            color: #000;
            font-size: 12px;
            font-weight: 700;
            padding: 2px 10px;
            z-index: 9999;
            pointer-events: none;
            white-space: nowrap;
            line-height: 1.5;
          `;
          label.textContent = name;
          el.appendChild(label);
        }
      } else {
        el.style.outline = "";
        el.style.outlineOffset = "";
        const label = el.querySelector(".debug-label");
        if (label) label.remove();
      }
    });
  }, [active]);

  return (
    <button
      onClick={() => setActive((v) => !v)}
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        zIndex: 99999,
        background: active ? "#FF6B6B" : "#333",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        padding: "8px 14px",
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
      }}
    >
      {active ? "✕ Skrýt sekce" : "▦ Zobrazit sekce"}
    </button>
  );
}
