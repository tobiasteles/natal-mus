"use client";

import Image from "next/image";
import heroImage from "@/public/mus-capa.jpg";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const handlePixCopy = () => {
    navigator.clipboard.writeText("50.615.676/0001-68");
    alert("Chave PIX copiada para a área de transferência!");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Container da imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Campanha"
          fill
          className="object-cover object-center" // Adicionei object-center
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          NATAL NA ESTRUTURAL 2025 🎄
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Transforme o Natal de uma criança e traga luz onde falta esperança!
        </p>

        {/* Container dos botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={handlePixCopy}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-3"
          >
            Doar via PIX
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
            onClick={() =>
              document
                .getElementById("children")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Heart className="mr-2 h-5 w-5" /> Conhecer as crianças
          </Button>
        </div>

        {/* Texto do PIX */}
        <div className="mt-8">
          <p className="text-white/90 text-sm md:text-base mb-2">
            PIX CNPJ:
          </p>
          <div className="font-mono text-white bg-blue-700 px-4 py-2 rounded-lg backdrop-blur-sm inline-block">
            50.615.676/0001-68
          </div>
        </div>
      </div>
    </section>
  );
}