"use client";

import Image from "next/image";
import heroImage from "@/public/mus-capa.jpg";
import { Gift, Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {

  return (
     <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            Transforme o Natal de uma Criança
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Sua contribuição pode espalhar alegria e multiplicar sorrisos! 
            Ajude as crianças da Estrutural a terem um Natal mágico.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center pt-6 max-w-3xl mx-auto">
            <Button 
              size="lg" 
              variant="default"
              className="text-base px-6 py-6 h-auto w-full"
              onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Gift className="mr-2 h-5 w-5" />
              Doar 1 kit de Natal
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost"
              className="text-base px-6 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full"
              onClick={() => document.getElementById('children')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-5 w-5" />
              Conhecer as Crianças
            </Button>

            <Button 
              size="lg" 
              variant="ghost"
              className="text-base px-6 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full"
              onClick={() => document.getElementById('sponsorship')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-5 w-5" />
              Apadrinhar Edukhação de 1 criança em 2026
            </Button>

            <Button 
              size="lg" 
              variant="ghost"
              className="text-base px-6 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-5 w-5" />
              Conhecer o Edukhan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}