"use client";

import { FileText, Heart, Star, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ChildCardProps {
  name: string;
  gift: string; // Representa o sonho ou necessidade (ex: "Kit Escolar", "Tênis")
  photo?: string;
  letter?: string;
}

export default function ChildCard({ name, gift, photo, letter }: ChildCardProps) {
  
  const whatsappNumber = "5561981311414";
  const message = `Olá! Vi o perfil do(a) ${name} no site e gostaria de ajudar com: ${gift}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsApp = () => {
    window.open(whatsappUrl, "_blank");
  };

  const handleOpenLetter = () => {
    if (letter) {
      window.open(letter, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100">
      {/* Container da Foto */}
      <div className="aspect-square bg-linear-to-br from-[#4db5ea]/10 to-[#6e55f5]/10 flex items-center justify-center relative overflow-hidden">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="text-6xl grayscale group-hover:grayscale-0 transition-all">🎓</div>
        )}
        {/* Overlay com cor da paleta */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a28e6]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-white font-bold text-sm flex items-center gap-2">
                <Star className="h-4 w-4 fill-[#f5cd50] text-[#f5cd50]" /> Aluno Edukhan
            </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-black text-[#0a28e6]">{name}</h3>
        </div>

        {/* Box de Necessidade - Usando o Azul Claro e Escuro */}
        <div className="bg-[#4db5ea]/5 p-4 rounded-lg border border-[#4db5ea]/20">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5 text-[#f5cd50] fill-[#f5cd50]" />
            <span className="font-bold text-[#0a28e6] text-sm uppercase tracking-tight">Necessidade ou Sonho:</span>
          </div>
          <p className="text-gray-700 font-medium">{gift}</p>
        </div>

        <div className="space-y-2">
          {/* Botão Ver História (ex-cartinha) */}
          <Button 
            variant="outline" 
            className="w-full justify-start border-[#6e55f5] text-[#6e55f5] hover:bg-[#6e55f5] hover:text-white transition-colors" 
            size="sm" 
            onClick={handleOpenLetter} 
            disabled={!letter}
          >
            <FileText className="mr-2 h-4 w-4" />
            {letter ? "Conhecer História" : "História em breve"}
          </Button>

          {/* Botão Ajudar via WhatsApp - Usando Verde/Azul */}
          <Button
            className="w-full justify-start bg-[#99de81] hover:bg-[#4db5ea] text-[#0a28e6] font-bold"
            size="sm"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Ajudar este Aluno
          </Button>

          {/* Botão Apadrinhar - Usando Rosa */}
          <Button 
            variant="outline" 
            className="w-full justify-start border-[#e073e5] text-[#e073e5] hover:bg-[#e073e5] hover:text-white" 
            size="sm" 
            onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Heart className="mr-2 h-4 w-4" />
            Apadrinhar em 2026
          </Button>
        </div>
      </div>
    </div>
  );
}