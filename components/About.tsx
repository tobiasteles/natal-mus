"use client";

import Image from "next/image";
import educationImage from "@/public/mus-9.jpg";
import { BookOpen, Laptop, Notebook } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-linear-to-b from-white to-[#4db5ea]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a28e6] mb-4">
              O Que Faz o Edukhan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Um projeto de resgate acadêmico que transforma vidas na Estrutural
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Detalhe decorativo atrás da imagem usando a cor f5cd50 */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f5cd50] rounded-2xl -z-10" />
                <Image
                  src={educationImage}
                  alt="Crianças aprendendo no programa Edukhan"
                  className="rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300 border-4 border-white"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#6e55f5] rounded-2xl -z-10" />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              {/* Reforço Escolar - Usando o Azul Claro 4db5ea */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-l-8 border-[#4db5ea] shadow-md hover:shadow-lg transition-all">
                <div className="bg-[#4db5ea]/10 p-3 rounded-lg">
                  <Notebook className="h-8 w-8 text-[#0a28e6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0a28e6]">
                    Reforço Escolar
                  </h3>
                  <p className="text-gray-600">
                    Quarenta crianças no contraturno escolar, com uma professora
                    auxiliando nas tarefas de casa e realizando atividades
                    pedagógicas e psicomotoras.
                  </p>
                </div>
              </div>

              {/* Tecnologia - Usando o Roxo 6e55f5 */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-l-8 border-[#6e55f5] shadow-md hover:shadow-lg transition-all">
                <div className="bg-[#6e55f5]/10 p-3 rounded-lg">
                  <Laptop className="h-8 w-8 text-[#6e55f5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#6e55f5]">
                    Português e Matemática no computador
                  </h3>
                  <p className="text-gray-600">
                    Tutores capacitados e plataforma digital gamificada para
                    tornar o aprendizado divertido e eficaz.
                  </p>
                </div>
              </div>

              {/* Alfabetização - Usando o Verde 99de81 */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-l-8 border-[#99de81] shadow-md hover:shadow-lg transition-all">
                <div className="bg-[#99de81]/10 p-3 rounded-lg">
                  <BookOpen className="h-8 w-8 text-[#0a28e6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0a28e6]">
                    Alfabetização de Adultos
                  </h3>
                  <p className="text-gray-600">
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