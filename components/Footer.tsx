"use client"

import { Heart, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a28e6]/5 border-t border-[#4db5ea]/20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Sobre */}
            <div className="space-y-4">
              <h3 className="font-black text-xl text-[#0a28e6] uppercase tracking-tighter">
                Instituto Edukhan
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Resgate Acadêmico e Escolar.
                <br />
                Transformando a trajetória de crianças da Estrutural através da educação e do afeto.
              </p>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h3 className="font-black text-xl text-[#0a28e6] uppercase tracking-tighter">
                Contato
              </h3>
              <div className="flex flex-col gap-2 text-gray-600 text-sm">
                <a 
                  href="https://wa.me/5561981311414" 
                  className="flex items-center gap-2 hover:text-[#6e55f5] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#99de81]" />
                  (61) 98131-1414
                </a>
                <p className="font-mono bg-white inline-block px-2 py-1 rounded border border-[#4db5ea]/30 w-fit">
                  CNPJ: 50.615.676/0001-68
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="font-black text-xl text-[#0a28e6] uppercase tracking-tighter">
                Redes Sociais
              </h3>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.instagram.com/edukhan_multiplicando_sorrisos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-[#e073e5] transition-colors text-sm font-medium"
                >
                  <Instagram className="h-5 w-5" />
                  @edukhan_multiplicando_sorrisos
                </a>
                <a 
                  href="https://www.instagram.com/_edukhan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-[#e073e5] transition-colors text-sm font-medium"
                >
                  <Instagram className="h-5 w-5" />
                  @_edukhan
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#4db5ea]/30 pt-8 text-center space-y-4">
            <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 text-[#e073e5] fill-[#e073e5]" /> para as crianças da Estrutural
            </p>

            <div className="space-y-1">
              <p className="text-gray-400 text-xs">
                © 2026 Instituto Edukhan - Educação e Transformação Social
              </p>

              {/* Seus Créditos com a cor da paleta */}
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                Desenvolvido por{" "}
                <a
                  href="https://www.linkedin.com/in/tobias-teles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6e55f5] font-bold hover:underline transition-all"
                >
                  Tobias Teles
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}