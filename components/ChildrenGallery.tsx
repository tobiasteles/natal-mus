"use client";

import ChildCard from "./ChildCard";

export default function ChildrenGallery() {
  const children = [
    { name: "Maria", age: 8, gift: "Boneca" },
    { name: "João", age: 10, gift: "Bola de futebol" },
    { name: "Ana", age: 7, gift: "Kit de pintura" },
    { name: "Pedro", age: 9, gift: "Carrinho de controle remoto" },
    { name: "Julia", age: 6, gift: "Conjunto de massinha" },
    { name: "Lucas", age: 11, gift: "Jogo de tabuleiro" },
  ];

  return (
    <section id="children" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conheça Nossas Crianças
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada criança escreveu uma cartinha com um sonho, e você pode
              ajudar a realizá-lo neste Natal!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {children.map((child, index) => (
              <ChildCard key={index} {...child} />
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-700/10 to-green-600/10 rounded-2xl p-8 text-center border border-blue-700/20">
            <p className="text-lg text-muted-foreground mb-4">
              Quer ver todas as 40 crianças que atendemos?
            </p>
            <p className="text-sm text-muted-foreground">
              As cartinhas e histórias completas serão adicionadas em breve.
              Entre em contato pelo WhatsApp para mais informações!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
