"use client";

import { IconSend, IconPhone, IconMessageCircle, IconArrowUp, IconMapPin, IconMail, IconClock, IconFileText } from "@tabler/icons-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
            Kontaktujte nás
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 items-stretch">
          {/* Formulář + kontaktní údaje */}
          <div className="bg-white rounded-lg p-8 pt-0 mt-0">
            {/* Kontaktní údaje */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              <h3 className="text-[1.125rem] font-semibold mb-5">KBH Energy a.s.</h3>
              <div className="space-y-3 text-[0.875rem] text-black">
                <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
                  <IconMapPin size={18} stroke={1.5} className="text-[#0170E3] flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Na Spravedlnosti 1533</p>
                    <p>530 02 Pardubice</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b border-gray-50">
                  <IconMail size={18} stroke={1.5} className="text-[#0170E3] flex-shrink-0" />
                  <a href="mailto:kbh@kbh.cz" className="text-[#0170E3] font-semibold hover:text-[#0f5aa8] transition-colors">kbh@kbh.cz</a>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b border-gray-50">
                  <IconPhone size={18} stroke={1.5} className="text-[#0170E3] flex-shrink-0" />
                  <a href="tel:+420777730002" className="text-[#0170E3] font-semibold hover:text-[#0f5aa8] transition-colors">+420 777 730 002</a>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b border-gray-50">
                  <IconClock size={18} stroke={1.5} className="text-[#0170E3] flex-shrink-0" />
                  <p>Po – Pá: 7:00 – 14:30</p>
                </div>
                <div className="flex items-center gap-3">
                  <IconFileText size={18} stroke={1.5} className="text-[#0170E3] flex-shrink-0" />
                  <p>IČO: 27502279 · DIČ: CZ27502279</p>
                </div>
              </div>
            </div>

            <h3 className="text-[1.125rem] font-semibold mb-6">Žádost o radu s výběrem produktu</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">Jméno</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Jméno"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-[3px] px-4 py-3 text-[0.875rem] focus:border-[#0170E3] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">E-mail</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-[3px] px-4 py-3 text-[0.875rem] focus:border-[#0170E3] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">Telefon</label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="Telefon"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-[3px] px-4 py-3 text-[0.875rem] focus:border-[#0170E3] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Vaše zpráva</label>
                <textarea
                  id="contact-message"
                  placeholder="Vaše zpráva"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-[3px] px-4 py-3 text-[0.875rem] focus:border-[#0170E3] focus:outline-none transition-colors resize-none"
                />
              </div>
              <label htmlFor="contact-gdpr" className="flex items-start gap-2 text-[0.75rem] text-[#5c5b5b]">
                <input id="contact-gdpr" type="checkbox" className="mt-1" />
                Souhlasím se zpracováním osobních údajů dle GDPR
              </label>
              <button className="btn-primary w-full justify-center">
                Odeslat poptávku
                <IconSend size={16} stroke={2} />
              </button>
            </div>
          </div>

          {/* Chatbot */}
          <div className="bg-white rounded-lg flex flex-col overflow-hidden border border-gray-100">
            <div className="bg-[#0170E3] px-6 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <IconMessageCircle size={18} stroke={1.5} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-[0.875rem]">Janitza Asistent</p>
                <p className="text-white/90 text-[0.6875rem]">Online · odpovídáme do minuty</p>
              </div>
            </div>
            <div className="flex-1 p-4 space-y-3 bg-[#f5f7f7] overflow-y-auto">
              {/* Bot uvítání */}
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0170E3] flex items-center justify-center flex-shrink-0 mt-1">
                  <IconMessageCircle size={12} stroke={2} className="text-white" />
                </div>
                <div className="bg-white rounded-[3px] rounded-tl-none p-3 max-w-[85%] shadow-sm">
                  <p className="text-[0.8125rem] text-black leading-[1.5]">Dobrý den! Jsem Janitza Asistent. Jak vám mohu pomoci?</p>
                </div>
              </div>
              {/* Uživatel */}
              <div className="flex justify-end">
                <div className="bg-[#0170E3] text-white rounded-[3px] rounded-tr-none p-3 max-w-[85%]">
                  <p className="text-[0.8125rem] leading-[1.5]">Jaká je dodací doba pro UMG 96RM-E?</p>
                </div>
              </div>
              {/* Bot odpověď */}
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0170E3] flex items-center justify-center flex-shrink-0 mt-1">
                  <IconMessageCircle size={12} stroke={2} className="text-white" />
                </div>
                <div className="bg-white rounded-[3px] rounded-tl-none p-3 max-w-[85%] shadow-sm">
                  <p className="text-[0.8125rem] text-black leading-[1.5]">UMG 96RM-E máme skladem v Pardubicích. Expedice do <span className="font-semibold text-[#0170E3]">24 hodin</span> od objednávky. Doručení PPL na vaši adresu obvykle 1–2 pracovní dny.</p>
                </div>
              </div>
              {/* Uživatel */}
              <div className="flex justify-end">
                <div className="bg-[#0170E3] text-white rounded-[3px] rounded-tr-none p-3 max-w-[85%]">
                  <p className="text-[0.8125rem] leading-[1.5]">A co UMG 512-PRO? Potřebuji 3 kusy.</p>
                </div>
              </div>
              {/* Bot odpověď */}
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0170E3] flex items-center justify-center flex-shrink-0 mt-1">
                  <IconMessageCircle size={12} stroke={2} className="text-white" />
                </div>
                <div className="bg-white rounded-[3px] rounded-tl-none p-3 max-w-[85%] shadow-sm">
                  <p className="text-[0.8125rem] text-black leading-[1.5]">UMG 512-PRO je momentálně <span className="font-semibold text-[#0170E3]">2 ks skladem</span>. Třetí kus doobjednáme z Německa — dodání do <span className="font-semibold text-[#0170E3]">5 pracovních dnů</span>. Chcete, abych vám poslal cenovou nabídku na 3 ks?</p>
                </div>
              </div>
              {/* Uživatel */}
              <div className="flex justify-end">
                <div className="bg-[#0170E3] text-white rounded-[3px] rounded-tr-none p-3 max-w-[85%]">
                  <p className="text-[0.8125rem] leading-[1.5]">Ano, prosím. A je možné dostat množstevní slevu?</p>
                </div>
              </div>
              {/* Bot odpověď */}
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0170E3] flex items-center justify-center flex-shrink-0 mt-1">
                  <IconMessageCircle size={12} stroke={2} className="text-white" />
                </div>
                <div className="bg-white rounded-[3px] rounded-tl-none p-3 max-w-[85%] shadow-sm">
                  <p className="text-[0.8125rem] text-black leading-[1.5]">Samozřejmě! U 3 ks UMG 512-PRO nabízíme slevu <span className="font-semibold text-[#0170E3]">8 %</span>. Nabídku vám pošlu na e-mail do 15 minut. Mohu ještě s něčím pomoci?</p>
                </div>
              </div>
            </div>
            {/* Input */}
            <div className="px-4 py-3 border-t border-gray-100 bg-white flex items-center gap-2">
              <label htmlFor="chat-input" className="sr-only">Napište zprávu</label>
              <input
                id="chat-input"
                type="text"
                placeholder="Napište zprávu..."
                className="flex-1 text-[0.8125rem] outline-none bg-transparent text-black placeholder:text-[#9ca3af] border border-gray-200 rounded-[3px] px-3 py-2 focus:border-[#0170E3] transition-colors"
              />
              <button aria-label="Odeslat zprávu" className="w-8 h-8 rounded-[3px] bg-[#0170E3] hover:bg-[#0060C4] text-white flex items-center justify-center transition-colors flex-shrink-0">
                <IconArrowUp size={16} stroke={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
