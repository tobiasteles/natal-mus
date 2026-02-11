"use client";

import { BookOpen, Heart, Utensils, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function DonationKits() {
  const handlePixCopy = () => {
    navigator.clipboard.writeText("50.615.676/0001-68");
    alert("PIX CNPJ copiado! 50.615.676/0001-68");
  };

  return (
    <section id="kits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a28e6] mb-4">
              Apoie o Dia a Dia dos Nossos Alunos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sua doação garante que nossas crianças tenham educação de qualidade e alimentação digna todos os meses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Kit Refeição - Foco em Alimentação */}
            <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-t-8 border-[#99de81]">
              <div className="bg-[#99de81]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-[#0a28e6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0a28e6]">
                Kit Alimentação
              </h3>
              <div className="text-4xl font-bold mb-6 text-foreground">
                R$ 100
              </div>
              <p className="text-muted-foreground mb-6">
                Garante refeições nutritivas e lanches para um aluno durante o mês letivo no Edukhan.
              </p>
              <Button
                className="w-full bg-[#99de81] hover:bg-[#4db5ea] text-[#0a28e6] font-bold"
                size="lg"
                onClick={handlePixCopy}
              >
                Doar R$ 100
              </Button>
            </div>

            {/* Kit Educação - Foco em Material/Aulas */}
            <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-t-8 border-[#6e55f5]">
              <div className="bg-[#6e55f5]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-[#6e55f5]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#6e55f5]">Kit Acadêmico</h3>
              <div className="text-4xl font-bold mb-6 text-foreground">
                R$ 150
              </div>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>✓ Materiais didáticos</li>
                <li>✓ Reforço escolar</li>
                <li>✓ Acesso a tecnologia</li>
                <li>✓ Oficinas culturais</li>
              </ul>
              <Button
                className="w-full bg-[#6e55f5] hover:bg-[#0a28e6] text-white font-bold"
                size="lg"
                onClick={handlePixCopy}
              >
                Doar R$ 150
              </Button>
            </div>

            {/* Kit Transformação - Foco em Sustento da Sede/Geral */}
            <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-t-8 border-[#e073e5]">
              <div className="bg-[#e073e5]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-[#e073e5]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#e073e5]">Kit Transformação</h3>
              <div className="text-4xl font-bold mb-6 text-foreground">
                R$ 250
              </div>
              <p className="text-muted-foreground mb-6">
                Apoio completo: alimentação, educação e manutenção da sede para acolher nossas famílias.
              </p>
              <Button
                className="w-full bg-[#e073e5] hover:bg-[#6e55f5] text-white font-bold"
                size="lg"
                onClick={handlePixCopy}
              >
                Doar R$ 250
              </Button>
            </div>
          </div>

          {/* Footer de Doação */}
          <div className="bg-[#4db5ea]/10 border-2 border-[#4db5ea]/30 p-8 rounded-2xl shadow-inner">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-black text-[#0a28e6]">
                Instituto Edukhan de Resgate Acadêmico e Escolar
              </h3>
              <p className="text-[#0a28e6] text-xl font-mono font-bold bg-white inline-block px-4 py-2 rounded-lg border border-[#4db5ea]">
                PIX: 50.615.676/0001-68
              </p>

              <div>
                <Button 
                  size="lg" 
                  className="bg-[#0a28e6] hover:bg-[#6e55f5] text-white px-10 font-black uppercase tracking-widest"
                  onClick={handlePixCopy}
                >
                  Copiar Chave PIX
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                <a
                  href="https://www.instagram.com/edukhan_multiplicando_sorrisos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6e55f5] hover:text-[#0a28e6] transition-colors font-bold"
                >
                  <Instagram className="h-5 w-5" />
                  @edukhan_multiplicando_sorrisos
                </a>

                <a
                  href="https://www.instagram.com/_edukhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6e55f5] hover:text-[#0a28e6] transition-colors font-bold"
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