"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // O botão aparece após rolar 300 pixels
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const whatsappNumber = "5561981311414";
  const message = "Olá! Gostaria de saber mais sobre como apoiar os projetos do Instituto Edukhan em 2026.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-500 flex items-center gap-2 group transform ${
        isVisible 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-20 opacity-0 scale-50 pointer-events-none"
      } bg-[#99de81] text-[#0a28e6] hover:bg-[#4db5ea] hover:scale-110`}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-[#0a28e6]/10" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-black uppercase tracking-tighter whitespace-nowrap">
        Fale Conosco
      </span>
    </a>
  );
}