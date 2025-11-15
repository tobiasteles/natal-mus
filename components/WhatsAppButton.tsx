import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
     const whatsappNumber = "5561981311414"; // (61) 98131-1414
  const message = "Olá! Gostaria de saber mais sobre a campanha de Natal do Instituto Edukhan.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BD5A] transition-all hover:scale-110 flex items-center gap-2 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden group-hover:inline-block text-sm font-medium whitespace-nowrap">
        Fale Conosco
      </span>
    </a>
  );
}