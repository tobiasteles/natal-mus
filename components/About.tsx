"use client";

import Image from "next/image";
import educationImage from "@/public/mus.jpg";
import { BookOpen, GraduationCap, Users, Instagram } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O Que Faz o Edukhan?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um projeto de resgate acadêmico que transforma vidas na Estrutural
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <Image 
                src={educationImage} 
                alt="Crianças aprendendo no programa Edukhan"
                className="rounded-2xl shadow-card w-full hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-card transition-all">
                <div className="bg-blue-700/10 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">40 Crianças no Contraturno</h3>
                  <p className="text-muted-foreground">
                    Tutores capacitados e plataforma digital gamificada para tornar o aprendizado divertido e eficaz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-card transition-all">
                <div className="bg-green-600/10 p-3 rounded-lg">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Alfabetização de Adultos</h3>
                  <p className="text-muted-foreground">
                    40 adultos alfabetizados no período noturno, transformando suas vidas através da educação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-card transition-all">
                <div className="bg-red-600/10 p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Cursos Profissionalizantes</h3>
                  <p className="text-muted-foreground">
                    Capacitação profissional para inserção no mercado de trabalho e transformação social.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-700/10 border border-blue-700/20 p-8 rounded-2xl">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Instituto Edukhan de Resgate Acadêmico e Escolar
              </h3>
              <p className="text-muted-foreground text-lg">
                CNPJ: 50.615.676/0001-68
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
                <a 
                  href="https://www.instagram.com/edukhan_multiplicando_sorrisos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-700/80 transition-colors font-medium"
                >
                  <Instagram className="h-5 w-5" />
                  @edukhan_multiplicando_sorrisos
                </a>
                
                <a 
                  href="https://www.instagram.com/_edukhan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-700/80 transition-colors font-medium"
                >
                  <Instagram className="h-5 w-5" />
                  @_edukhan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}