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
      name: "Maria Eduarda",
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.JPG",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
    },
    {
      name: "Maria Eduarda",
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.JPG",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
    },
    {
      name: "Maria Eduarda",
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.JPG",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
    },
    {
      name: "Maria Eduarda",
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.JPG",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
    },
    {
      name: "Maria Eduarda",
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.JPG",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
    },
    {
      name: "Maria Eduarda",
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.JPG",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
    },
    {
      name: "Maria Eduarda",
      gift: "Boneca Barbie",
      photo: "/criancas/Maria_Eduarda.JPG",
      letter: "/Cartinhas-2025/Maria_Eduarda.jpg", // Corrigido para letter
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
