"use client";

import Image from "next/image";
import heroImage from "@/public/mus-capa.jpg";
import { Info, Construction, Users, HandHeart } from "lucide-react";
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/70 md:to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in text-center">
          {/* Título */}
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Transforme a trajetória de uma <br className="hidden md:block" />
            <span className="text-red-500">Criança</span> da Estrutural
          </h1>

          {/* Subtítulo */}
          <p className="text-white/90 text-lg md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md font-mono uppercase tracking-tight">
            Educação, cuidado e oportunidade constroem futuros reais.
          </p>

          {/* Botões */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center pt-6 max-w-3xl mx-auto">
            <Button
              size="lg"
              className="w-full text-base font-black h-16 shadow-xl bg-red-600 hover:bg-red-700 text-white uppercase tracking-tighter hover:scale-105 transition-transform"
              onClick={() => openLink("https://www.edukhan.ong.br/doe")}
            >
              <Users className="mr-2 h-6 w-6" />
              Conhecer os Alunos
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full text-base font-black h-16 bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 uppercase tracking-tighter"
              onClick={() => openLink("https://reforma.edukhan.ong.br/")}
            >
              <Construction className="mr-2 h-6 w-6 text-yellow-400" />
              Apoie a Nova Sede
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full text-base font-black h-16 bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 uppercase tracking-tighter"
              onClick={() => openLink("https://www.edukhan.ong.br/doe")}
            >
              <HandHeart className="mr-2 h-6 w-6 text-pink-500" />
              Torne-se um Edukamigo
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full text-base font-black h-16 bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 uppercase tracking-tighter"
              onClick={() => openLink("https://www.edukhan.ong.br/")}
            >
              <Info className="mr-2 h-6 w-6 text-blue-400" />
              Conheça o Edukhan
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-linear-to-b from-white to-transparent rounded-full" />
      </div>
    </section>
  );
}
