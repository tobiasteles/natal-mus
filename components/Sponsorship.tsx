"use client";

import { GraduationCap, Heart, Star } from "lucide-react";
import { Button } from "./ui/button";

export default function Sponsorship() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5561981311414?text=Olá! Gostaria de apadrinhar a educação de uma criança do Edukhan em 2026.",
      "_blank"
    );
  };

  return (
    <section id="sponsorship" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-700/10 px-4 py-2 rounded-full mb-6">
              <Star className="h-5 w-5 text-blue-700" />
              <span className="text-blue-700 font-semibold">
                Seja um Padrinho
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Apadrinhe a <span className="text-blue-700">Edukhação</span> de uma Criança
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme vidas através da educação. Seja parte da jornada de uma
              criança em 2026.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-700/5 to-green-600/5 rounded-3xl p-8 md:p-12 border-2 border-blue-700/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center shadow-glow">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-foreground">
                      R$ 200
                    </div>
                    <div className="text-muted-foreground">por mês</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold mb-4">O que inclui:</h3>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600/20 p-2 rounded-lg mt-1">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Professora</h4>
                      <p className="text-sm text-muted-foreground">
                        Acompanhamento das tarefas de casa, com incentivo ao
                        desenvolvimento pessoal e educacional.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600/20 p-2 rounded-lg mt-1">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Plataforma Digital</h4>
                      <p className="text-sm text-muted-foreground">
                        Português e Matemática ensinados no computador de forma
                        divertida e gamificada, por tutores capacitados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600/20 p-2 rounded-lg mt-1">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Material Didático</h4>
                      <p className="text-sm text-muted-foreground">
                        Livros, cadernos e todo material necessário
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600/20 p-2 rounded-lg mt-1">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Lanches</h4>
                      <p className="text-sm text-muted-foreground">
                        Enquanto aprendem e sonham, muitas crianças contam com a
                        nossa ajuda até para o lanche.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600/20 p-2 rounded-lg mt-1">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Aluguel, água, luz e internet
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Despesas simples, mas essenciais para manter nosso
                        espaço de aprendizado aberto e acolhedor.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600/20 p-2 rounded-lg mt-1">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Atividades Complementares
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Oficinas, eventos e apoio contínuo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-card space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    Escolha seu Edukhando
                  </h3>
                  <p className="text-muted-foreground">
                    Mude a história de uma criança da Estrutural
                  </p>
                </div>

                <Button
                  size="lg"
                  variant="default"
                  className="w-full text-lg py-6"
                  onClick={handleWhatsApp}
                >
                  <Heart className="mr-2 h-6 w-6" />
                  Quero Apadrinhar
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Entre em contato pelo WhatsApp para conhecer as crianças
                  disponíveis para apadrinhamento e escolher seu Edukhando
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-red-600/10 border border-red-600/30 rounded-xl p-6 text-center">
            <p className="text-foreground">
              <strong>💛 Impacto Real:</strong> Seu apadrinhamento garante um
              ano completo de educação de qualidade, mudando o futuro de uma
              criança e de sua família.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
