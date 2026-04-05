"use client";

import { useState } from "react";

export default function UtilityBar() {
  const [lang, setLang] = useState("CZ");
  const [currency, setCurrency] = useState("CZK");

  return (
    <div className="bg-[#1a1a2e] text-white text-[12px]">
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between h-[32px]">
        {/* Left – language & currency */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLang("CZ")}
              className={`px-1 ${lang === "CZ" ? "text-white font-semibold" : "text-white/60 hover:text-white"} transition-colors`}
            >
              CZ
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setLang("EN")}
              className={`px-1 ${lang === "EN" ? "text-white font-semibold" : "text-white/60 hover:text-white"} transition-colors`}
            >
              EN
            </button>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrency("CZK")}
              className={`px-1 ${currency === "CZK" ? "text-white font-semibold" : "text-white/60 hover:text-white"} transition-colors`}
            >
              CZK
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setCurrency("EUR")}
              className={`px-1 ${currency === "EUR" ? "text-white font-semibold" : "text-white/60 hover:text-white"} transition-colors`}
            >
              EUR
            </button>
          </div>
        </div>

        {/* Right – contact & login */}
        <div className="flex items-center gap-4">
          <a href="tel:+420777730002" className="text-white/80 hover:text-white transition-colors">
            +420 777 730 002
          </a>
          <a href="mailto:kbh@kbh.cz" className="text-white/80 hover:text-white transition-colors">
            kbh@kbh.cz
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Přihlášení / Registrace
          </a>
        </div>
      </div>
    </div>
  );
}
