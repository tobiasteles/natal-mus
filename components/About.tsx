"use client";

import Image from "next/image";
import educationImage from "@/public/mus.jpg";
import { BookOpen, GraduationCap, Users } from "lucide-react";

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
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">40 Crianças no Contraturno</h3>
                  <p className="text-muted-foreground">
                    Tutores capacitados e plataforma digital gamificada para tornar o aprendizado divertido e eficaz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alfabetização de Adultos</h3>
                  <p className="text-muted-foreground">
                    40 adultos alfabetizados no período noturno, transformando suas vidas através da educação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cursos Profissionalizantes</h3>
                  <p className="text-muted-foreground">
                    Capacitação profissional para inserção no mercado de trabalho e transformação social.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
            <p className="text-center text-lg">
              <strong>Instituto Edukhan de Resgate Acadêmico e Escolar</strong>
              <br />
              <span className="text-muted-foreground">CNPJ: 50.615.676/0001-68</span>
              <br />
              <a 
                href="https://www.instagram.com/edukhan_multiplicando_sorrisos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @edukhan_multiplicando_sorrisos
              </a>
              <a 
                href="https://www.instagram.com/_edukhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @_edukhan
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
