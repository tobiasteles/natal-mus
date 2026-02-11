"use client";

import Image from "next/image";
import heroImage from "@/public/mus-capa.jpg";
import { Info, Users, HandHeart } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-[85vh] md:min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Educação e transformação social com o Edukhan"
          src={heroImage}
          fill
          priority
          quality={100}
          className="object-cover object-top md:object-center transition-all duration-700"
        />
        {/* Overlay - Usando o Azul Escuro 0a28e6 com opacidade */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0a28e6]/60 via-black/20 to-[#0a28e6]/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in text-center">
          
          {/* Novo Título conforme Imagem */}
          <h1 className="text-3xl md:text-6xl font-black text-white leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Transforme vidas alimentando corpo, alma e espírito das <br className="hidden md:block" />
            <span className="text-[#f5cd50]">famílias da Estrutural</span>
          </h1>

          {/* Subtítulo Atualizado */}
          <div className="space-y-4">
            <p className="text-[#99de81] text-lg md:text-2xl font-bold uppercase tracking-wide">
              Sua generosidade é o motor de transformação para o Edukhan!
            </p>
            <p className="text-white/90 text-md md:text-xl font-medium max-w-2xl mx-auto italic">
              Cada criança escreveu uma cartinha com um sonho, e você pode ajudar a realizá-lo <span className="text-[#4db5ea] font-bold">em 2026!</span>
            </p>
          </div>

          {/* Botões com a nova paleta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center pt-6 max-w-3xl mx-auto">
            
            {/* Botão de Destaque: Conheça Nossas Crianças */}
            <Button
              size="lg"
              className="w-full text-base font-black h-16 shadow-xl bg-[#6e55f5] hover:bg-[#0a28e6] text-white uppercase tracking-tighter hover:scale-105 transition-transform"
              onClick={() => openLink("#children")} // Ajuste o link se necessário
            >
              <Users className="mr-2 h-6 w-6" />
              Conheça Nossas Crianças
            </Button>

            {/* Botão: Torne-se um Voluntário EdukAmigo */}
            <Button
              size="lg"
              className="w-full text-base font-black h-16 bg-[#e073e5] hover:bg-[#6e55f5] text-white uppercase tracking-tighter"
              onClick={() => openLink("https://www.edukhan.ong.br/contato")}
            >
              <HandHeart className="mr-2 h-6 w-6" />
              Torne-se um Voluntário EdukAmigo!
            </Button>

            {/* Botão: Faça uma doação */}
            <Button
              size="lg"
              className="w-full text-base font-black h-16 bg-[#99de81] hover:bg-[#4db5ea] text-[#0a28e6] uppercase tracking-tighter"
              onClick={() => openLink("https://www.edukhan.ong.br/doe")}
            >
              <div className="flex flex-col leading-tight">
                <span>Faça uma doação!</span>
              </div>
            </Button>

            {/* Botão: Participe das Ações Sociais */}
            <Button
              size="lg"
              variant="outline"
              className="w-full text-base font-black h-16 bg-white/10 backdrop-blur-md border-[#4db5ea] text-white hover:bg-[#4db5ea]/20 uppercase tracking-tighter"
              onClick={() => openLink("https://www.edukhan.ong.br/acoessoais")}
            >
              <Info className="mr-2 h-6 w-6 text-[#f5cd50]" />
              Participe das Ações Sociais
            </Button>
          </div>

          {/* Seção Apadrinhe (Texto simplificado conforme pedido de exclusão) */}
          <div className="pt-8">
             <h3 className="text-white text-2xl font-bold border-t border-white/20 pt-4">
                Apadrinhe a Edukhação de uma Criança
             </h3>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll com cor da paleta */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-linear-to-b from-[#4db5ea] to-transparent rounded-full" />
      </div>
    </section>
  );
}