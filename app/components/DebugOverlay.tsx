"use client";
import { useState, useEffect } from "react";

const sectionColors: Record<string, string> = {
  "1 – Header":             "#FF6B6B",
  "2 – Hero Section":       "#4ECDC4",
  "3 – Industries":         "#95E1D3",
  "4 – Trust Bar":          "#FFE66D",
  "5 – Featured Solutions":  "#F38181",
  "6 – Products (E-shop)":  "#AA96DA",
  "7 – CTA Banner (Gridvis)": "#FCBAD3",
};

export default function DebugOverlay() {
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

        // add label
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
        right: 16,
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
