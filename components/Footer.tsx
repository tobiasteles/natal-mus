"use client"

import { Heart, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Instituto Edukhan</h3>
              <p className="text-muted-foreground text-sm">
                Resgate Acadêmico e Escolar
                <br />
                Transformando vidas através da educação
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <p className="text-muted-foreground text-sm">
                WhatsApp: (61) 98131-1414
                <br />
                CNPJ: 50.615.676/0001-68
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <a 
                href="https://www.instagram.com/edukhan_multiplicando_sorrisos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-700 transition-colors text-sm"
              >
                <Instagram className="h-5 w-5" />
                @edukhan_multiplicando_sorrisos
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 text-blue-700 fill-blue-700" /> para as crianças da Estrutural
            </p>

            <p className="text-muted-foreground text-xs mt-2">
              © 2025 Instituto Edukhan - Campanha de Natal
            </p>

            {/* Créditos discretos para você */}
            <p className="text-[10px] text-muted-foreground mt-1">
              Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/tobias-teles"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700 transition-colors"
              >
                Tobias Teles
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    )
}
