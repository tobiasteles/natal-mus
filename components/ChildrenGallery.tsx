"use client";

import ChildCard from "./ChildCard";

export default function ChildrenGallery() {
  const children = [
    { 
      name: "Amanda",
      gift: "Kit Maquiagem Infantil",
      photo: "/criancas/Amanda_Oliveira.jpeg",        // Removido /public
      letter: "/Cartinhas-2025/Amanda_Oliveira.jpg" // Removido /public
    },
    { 
      name: "Benjamim",
      gift: "Carrinho de controle remoto",
      photo: "/criancas/Benjamim_Sousa.jpeg",
      letter: "/Cartinhas-2025/Benjamim_Sousa.jpg", // Corrigido para letter
    },
    { 
      name: "Calebe",
      gift: "Camera Fotográfica Infantil",
      photo: "/criancas/Calebe_Rodrigues.jpeg",
      letter: "/Cartinhas-2025/Calebe_Rodrigues.jpg", // Corrigido para letter
    },
    { 
      name: "Davi Barbosa",
      gift: "Carrinho de controle remoto",
      photo: "/criancas/Davi_Barbosa.jpeg",
      letter: "/Cartinhas-2025/Davi_Barbosa.jpg", // Corrigido para letter
    },
    { 
      name: "Laylah Beatriz",
      gift: "Boneca",
      photo: "/criancas/Laylah_Beatriz.jpeg",
      letter: "/Cartinhas-2025/Laylah_Beatriz.jpg", // Corrigido para letter
    },
    { 
      name: "Maria Eduarda", 
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.jpeg",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
    },
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
        </div>
      </div>
    </section>
  );
}