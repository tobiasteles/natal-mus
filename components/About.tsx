"use client";

import Image from "next/image";
import educationImage from "@/public/mus-9.jpg";
import { BookOpen, Laptop, Notebook } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
                  <Notebook className="h-8 w-8 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Reforço Escolar
                  </h3>
                  <p className="text-muted-foreground">
                    Quarenta crianças no contraturno escolar, com uma professora
                    auxiliando nas tarefas de casa e realizando atividades
                    pedagógicas e psicomotoras.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-card transition-all">
                <div className="bg-red-600/10 p-3 rounded-lg">
                  <Laptop className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Português e Matemática no computador
                  </h3>
                  <p className="text-muted-foreground">
                    Tutores capacitados e plataforma digital gamificada para
                    tornar o aprendizado divertido e eficaz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-card transition-all">
                <div className="bg-green-600/10 p-3 rounded-lg">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Alfabetização de Adultos
                  </h3>
                  <p className="text-muted-foreground">
                    Quarenta adultos alfabetizados no período noturno,
                    transformando suas perspectivas pessoais e profissionais por
                    meio da educação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
