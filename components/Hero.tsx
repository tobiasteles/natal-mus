"use client";

import Image from "next/image";
import heroImage from "@/public/mus-capa.jpg";
import { Gift, Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
      <section id="hero" className="relative flex flex-col md:min-h-[90vh] md:items-center md:justify-center overflow-hidden">
      <div 
        className=""
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Image alt="Festa" src={heroImage} className="h-[60vh] md:h-auto md:absolute md:inset-0 bg-cover bg-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white md:from-black/50 md:via-black/40 md:to-background" />
      </div>
      
      <div className="bg-white md:bg-transparent relative z-10 md:container md:mx-auto px-4 py-8 md:py-20">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in md:text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-foreground md:text-white leading-tight md:drop-shadow-2xl">
            Transforme o Natal de uma Criança
          </h1>
          
          <p className="text-lg md:text-2xl text-foreground/80 md:text-white/95 max-w-2xl mx-auto leading-relaxed md:drop-shadow-lg">
            Sua contribuição pode espalhar alegria e multiplicar sorrisos! 
            Ajude as crianças da Estrutural a terem um Natal mágico.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center items-center pt-4 max-w-2xl mx-auto">
            <Button 
              size="default" 
              variant="festive"
              className="text-sm px-3 py-2 h-auto"
              onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Gift className="mr-2 h-4 w-4" />
              Doar 1 kit de Natal
            </Button>
            
            <Button 
              size="default" 
              variant="outline"
              className="text-sm px-3 py-2 h-auto bg-white/10 backdrop-blur-sm border-white/30 md:text-white md:hover:bg-white/20"
              onClick={() => document.getElementById('children')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-4 w-4" />
              Conhecer as Crianças
            </Button>

            <Button 
              size="default" 
              variant="outline"
              className="text-sm px-3 py-2 h-auto bg-white/10 backdrop-blur-sm border-white/30 md:text-white md:hover:bg-white/20"
              onClick={() => document.getElementById('sponsorship')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-4 w-4" />
              Apadrinhar Edukhação de 1 criança em 2026
            </Button>

            <Button 
              size="default" 
              variant="outline"
              className="text-sm px-3 py-2 h-auto bg-white/10 backdrop-blur-sm border-white/30 md:text-white md:hover:bg-white/20"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-4 w-4" />
              Conhecer o Edukhan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
