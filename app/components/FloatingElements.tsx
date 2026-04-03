"use client";

import { useState, useEffect } from "react";
import { IconArrowUp, IconMessageCircle, IconX } from "@tabler/icons-react";

export default function FloatingElements() {
  const [showCookie, setShowCookie] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Promo Bar */}
      {showPromo && (
        <div className="fixed top-0 left-0 right-0 bg-[#0170E3] text-white text-[0.8125rem] font-semibold z-[9999] flex items-center justify-center h-[36px]">
          <span>Akce: Doprava zdarma nad 10 000 Kč do konce dubna!</span>
          <button
            onClick={() => setShowPromo(false)}
            className="absolute right-4 text-white/80 hover:text-white"
          >
            <IconX size={16} stroke={2} />
          </button>
        </div>
      )}

      {/* Cookie Banner */}
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a2e] text-white z-[9998] shadow-lg">
          <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <p className="text-[0.8125rem] text-white/80">
              Tento web používá cookies pro zlepšení uživatelského zážitku. Více informací v sekci{" "}
              <a href="#" className="underline text-white">Ochrana osobních údajů</a>.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setShowCookie(false)}
                className="text-[0.8125rem] text-white/60 hover:text-white transition-colors"
              >
                Odmítnout
              </button>
              <button
                onClick={() => setShowCookie(false)}
                className="text-[0.8125rem] border border-white/30 text-white px-3 py-1.5 rounded-[3px] hover:bg-white/10 transition-colors"
              >
                Nastavit
              </button>
              <button
                onClick={() => setShowCookie(false)}
                className="text-[0.8125rem] bg-[#0170E3] text-white px-4 py-1.5 rounded-[3px] hover:bg-[#0f5aa8] transition-colors font-semibold"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Widget */}
      <button
        className="fixed bottom-20 right-5 w-14 h-14 bg-[#0170E3] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0f5aa8] transition-colors z-[9997]"
        title="Potřebujete pomoct?"
      >
        <IconMessageCircle size={24} stroke={1.5} />
      </button>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-24 w-10 h-10 bg-white text-[#1a1a2e] rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all z-[9997]"
          title="Nahoru"
        >
          <IconArrowUp size={18} stroke={2} />
        </button>
      )}
    </>
  );
}
