"use client";

import { useState } from "react";
import ChildCard from "./ChildCard";

export default function ChildrenGallery() {
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const children = [
    {
      name: "Amanda",
      gift: "Kit Maquiagem Infantil",
      photo: "/criancas/Amanda_Oliveira.jpeg", // Removido /public
      letter: "/Cartinhas-2025/Amanda_Oliveira.jpg", // Removido /public
    },
    {
      name: "Benjamim",
      gift: "Carrinho de controle remoto",
      photo: "/criancas/Benjamim_Sousa.JPG",
      letter: "/Cartinhas-2025/Benjamim_Sousa.jpg", // Corrigido para letter
    },
    {
      name: "Calebe",
      gift: "Camera Fotográfica Infantil",
      photo: "/criancas/Calebe_Rodrigues.JPG",
      letter: "/Cartinhas-2025/Calebe_Rodrigues.jpg", // Corrigido para letter
    },
    {
      name: "Davi Barbosa",
      gift: "Carrinho de controle remoto",
      photo: "/criancas/Davi_Barbosa.JPG",
      letter: "/Cartinhas-2025/Davi_Barbosa.jpg", // Corrigido para letter
    },
    {
      name: "Laylah Beatriz",
      gift: "Boneca",
      photo: "/criancas/Laylah_Beatriz.JPG",
      letter: "/Cartinhas-2025/Laylah_Beatriz.jpg", // Corrigido para letter
    },
    {
      name: "Maria Eduarda",
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.JPG",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
    },
    {
      name: "Catarina Bastos",
      gift: "Roupa 7anos / Bebê Reborn",
      photo: "/criancas/Catarina.jpg",
      letter: "/Cartinhas-2025/Catarina.jpg", // Corrigido para letter
    },
    {
      name: "Cibelly de Carvalho",
      gift: "Bebê Reborn",
      photo: "/criancas/Cibelly_Carvalho.JPG",
      letter: "/Cartinhas-2025/Cibelly_Carvalho.jpg", // Corrigido para letter
    },
    {
      name: "Cindy Alexia",
      gift: "BobieGoods / Stitch",
      photo: "/criancas/Cindy.jpeg",
      letter: "/Cartinhas-2025/Cindy.jpg", // Corrigido para letter
    },
    {
      name: "Davi Felipe",
      gift: "Câmera fotográfica infantil/Coleção Diário de um Banana",
      photo: "/criancas/Davi_Felipe.JPG",
      letter: "/Cartinhas-2025/Davi_Felipe.jpg", // Corrigido para letter
    },
    {
      name: "Davi Henrique",
      gift: "Homem Aranha/Naruto/Carrinho controle remoto",
      photo: "/criancas/Davi Henrique.JPG",
      letter: "/Cartinhas-2025/Davi_Henrique.jpg", // Corrigido para letter
    },
    {
      name: "Davi Lucca",
      gift: "Arco e flecha/Robô",
      photo: "/criancas/Davi_Lucca.JPG",
      letter: "/Cartinhas-2025/Davi_Lucca.jpg", // Corrigido para letter
    },
    {
      name: "Deynner Jesus",
      gift: "Carrinho corrida/ Tenis Homem Aranha 29",
      photo: "/criancas/Deynner.jpeg",
      letter: "/Cartinhas-2025/Deynner.jpg", // Corrigido para letter
    },
    {
      name: "Emanoel Evangelista",
      gift: "Uniforme Cruzeiro",
      photo: "/criancas/Emanoel.JPG",
      letter: "/Cartinhas-2025/Emanoel.jpg", // Corrigido para letter
    },
    {
      name: "Ester Ferreira",
      gift: "Bicicleta 4 anos/Barbie",
      photo: "/criancas/Ester_Ferreira.JPG",
      letter: "/Cartinhas-2025/Ester_Ferreira.jpg", // Corrigido para letter
    },
    {
      name: "Isabella Sousa",
      gift: "Bebe Reborn/Patins 31-32",
      photo: "/criancas/Isabella_Sousa.JPG",
      letter: "/Cartinhas-2025/Isabella_Sousa.jpg", // Corrigido para letter
    },
    {
      name: "Isabelly Batista",
      gift: "Roupa 10 anos/Kit Escolar",
      photo: "/criancas/Isabelly_batista.JPG",
      letter: "/Cartinhas-2025/Isabelly_Batista.jpg", // Corrigido para letter
    },
    {
      name: "Jhennifer Gabrielly",
      gift: "Kit Escolar/ Patins 35-36",
      photo: "/criancas/Jennyfer.jpeg",
      letter: "/Cartinhas-2025/Jennyfer.jpg", // Corrigido para letter
    },
    {
      name: "José Arthur",
      gift: "Tênis Nike/Uniforme Santos",
      photo: "/criancas/Jose_Arthur.jpeg",
      letter: "/Cartinhas-2025/Jose_Arthur.jpg", // Corrigido para letter
    },
    {
      name: "Jesus Alerrandro",
      gift: "Beyblade/Skate",
      photo: "/criancas/Jesus_Alerandro.JPG",
      letter: "/Cartinhas-2025/Jesus_Alerandro.jpg", // Corrigido para letter
    },
    {
      name: "Júlio Cesar",
      gift: "Tênis Nike/Uniforme Santos",
      photo: "/criancas/Julio.JPG",
      letter: "/Cartinhas-2025/Julio.jpg", // Corrigido para letter
    },
    {
      name: "Lorenna Souza",
      gift: "Stitch/Cozinha/Boneca",
      photo: "/criancas/Lorenna_Sousa.jpeg",
      letter: "/Cartinhas-2025/Lorenna_Sousa.jpg", // Corrigido para letter
    },
    {
      name: "Maria Fernanda",
      gift: "Kit cozinha/Kit médico",
      photo: "/criancas/Maria_Fernanda.JPG",
      letter: "/Cartinhas-2025/Maria_Fernanda.jpg", // Corrigido para letter
    },
    {
      name: "Maria Helena",
      gift: "Barbie Sereia/Kit Pulseira",
      photo: "/criancas/Maria_Helena.JPG",
      letter: "/Cartinhas-2025/Maria_Helena.jpg", // Corrigido para letter
    },
    {
      name: "Miguel da Silva",
      gift: "Beyblade/Cartinhas Pokemon",
      photo: "/criancas/Miguel_da_Silva.JPG",
      letter: "/Cartinhas-2025/Miguel_da_Silva.jpg", // Corrigido para letter
    },
    {
      name: "Nicolas Samuel",
      gift: "Carretilha Pipa/Cartinhas Pokemon",
      photo: "/criancas/Nicolas_Samuel.JPG",
      letter: "/Cartinhas-2025/Nicolas_Samuel.jpg", // Corrigido para letter
    },
    {
      name: "Sarah Emanoele",
      gift: "Kit Pulseira Barbie",
      photo: "/criancas/Sarah_Emanoele.JPG",
      letter: "/Cartinhas-2025/Sarah_Emanoele.jpg", // Corrigido para letter
    },
    {
      name: "Stella Mota",
      gift: "Patinete/Boneca",
      photo: "/criancas/Stella_Mota.JPG",
      letter: "/Cartinhas-2025/Stella_Mota.jpg", // Corrigido para letter
    },
    {
      name: "Talia Emanuelly",
      gift: "Bebe Reborn/Patins 31/37-38",
      photo: "/criancas/Talia_Emanuelly.JPG",
      letter: "/Cartinhas-2025/Talia_Emanuelly.jpg", // Corrigido para letter
    },
  ];

  const start = (page - 1) * pageSize;
  const currentChildren = children.slice(start, start + pageSize);
  const totalPages = Math.ceil(children.length / pageSize);


  


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
            {currentChildren.map((child, index) => (
              <ChildCard key={index} {...child} />
            ))}

            <div className="flex justify-center gap-4 mt-8 alin-items-center w-full col-span-full">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="
      px-4 py-2 rounded-lg border border-border
      hover:bg-green-500 hover:text-green-600/20-foreground
      transition-colors
      disabled:opacity-50 disabled:hover:bg-transparent
    "
              >
                Anterior
              </button>

              <span className="px-4 py-2 text-lg font-medium text-black bg-green-600 rounded-lg">
                {page} / {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 rounded-lg border border-border
      hover:bg-green-600 hover:text-green-600-foreground
      transition-colors
      disabled:opacity-50 disabled:hover:bg-transparent"
              >
                Próxima
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
