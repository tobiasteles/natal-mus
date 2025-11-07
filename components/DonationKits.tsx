"use client";

import { Gift, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function DonationKits() {
  const handlePixCopy = () => {
    navigator.clipboard.writeText("50.615.676/0001-68");
    alert("PIX CNPJ copiado! 50.615.676/0001-68");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como Você Pode Ajudar
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha uma das opções de doação e faça a diferença
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all hover:-translate-y-2 border-2 border-blue-700/20">
              <div className="bg-gradient-to-br from-blue-700 to-blue-700/80 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-glow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                Kit Natal Completo
              </h3>
              <div className="text-4xl font-bold mb-6 text-foreground">
                R$ 300
              </div>
              <p className="text-muted-foreground mb-6">
                Kit Presente + Kit Festa para uma criança ter um Natal completo
                e inesquecível
              </p>
              <Button
                className="w-full"
                size="lg"
                variant="default"
                onClick={handlePixCopy}
              >
                Doar R$ 300
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-red-600 to-red-600/80 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kit Presente</h3>
              <div className="text-4xl font-bold mb-6 text-foreground">
                R$ 150
              </div>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>✓ 1 brinquedo</li>
                <li>✓ 1 mochila</li>
                <li>✓ 1 tênis</li>
                <li>✓ Auxílio para festa</li>
              </ul>
              <Button
                className="w-full"
                size="lg"
                variant="outline"
                onClick={handlePixCopy}
              >
                Doar R$ 150
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-600 to-green-600/80 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kit Festa</h3>
              <div className="text-4xl font-bold mb-6 text-foreground">
                R$ 150
              </div>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>✓ 1 Cesta básica (16 itens)</li>
                <li>✓ 1Kg peito de frango</li>
                <li>✓ 1 Panetone</li>
                <li>✓ 1 Refrigerante</li>
                <li>✓ Auxílio para festa</li>
              </ul>
              <Button
                className="w-full"
                size="lg"
                variant="outline"
                onClick={handlePixCopy}
              >
                Doar R$ 150
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-700/10 to-red-600/10 rounded-2xl p-8 text-center border border-blue-700/20">
            <h3 className="text-2xl font-bold mb-4">PIX para Doações</h3>
            <p className="text-xl mb-4">
              CNPJ:{" "}
              <span className="font-mono font-bold text-blue-700">
                50.615.676/0001-68
              </span>
            </p>
            <Button size="lg" variant="default" onClick={handlePixCopy}>
              Copiar PIX
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
