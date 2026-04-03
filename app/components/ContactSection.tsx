"use client";

import { IconSend, IconPhone, IconMessageCircle } from "@tabler/icons-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="section-label" style={{ textAlign: "center" }}>Kontakt</span>
          <h2 className="text-[2rem] font-normal text-black leading-[1.1] mt-1">
            Potřebujete poradit?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Formulář */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-[1.125rem] font-semibold mb-6">Žádost o radu s výběrem produktu</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Jméno"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-[3px] px-4 py-3 text-[0.875rem] focus:border-[#0170E3] focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-[3px] px-4 py-3 text-[0.875rem] focus:border-[#0170E3] focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Telefon"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-[3px] px-4 py-3 text-[0.875rem] focus:border-[#0170E3] focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Vaše zpráva"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-[3px] px-4 py-3 text-[0.875rem] focus:border-[#0170E3] focus:outline-none transition-colors resize-none"
              />
              <label className="flex items-start gap-2 text-[0.75rem] text-[#5c5b5b]">
                <input type="checkbox" className="mt-1" />
                Souhlasím se zpracováním osobních údajů dle GDPR
              </label>
              <button className="btn-primary w-full justify-center">
                Odeslat poptávku
                <IconSend size={16} stroke={2} />
              </button>
            </div>
          </div>

          {/* AI Chat / Znalostní báze */}
          <div className="bg-white rounded-lg p-8 flex flex-col">
            <h3 className="text-[1.125rem] font-semibold mb-6">Znalostní báze</h3>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <IconMessageCircle size={48} stroke={1.2} className="text-[#0170E3] mb-4" />
              <p className="text-[1rem] font-semibold text-black mb-2">
                Zeptejte se nás...
              </p>
              <p className="text-[0.875rem] text-[#5c5b5b] mb-6 max-w-sm">
                Vyhledejte odpovědi v naší znalostní bázi nebo nás kontaktujte přímo.
              </p>
              <a href="#" className="btn-primary mb-4">
                Otevřít znalostní bázi
              </a>
            </div>
            <div className="border-t border-gray-100 pt-6 mt-auto">
              <p className="text-[0.875rem] text-[#5c5b5b] mb-2">Nebo volejte:</p>
              <a href="tel:+420777730002" className="flex items-center gap-2 text-[#0170E3] font-semibold">
                <IconPhone size={16} stroke={1.5} />
                +420 777 730 002
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
