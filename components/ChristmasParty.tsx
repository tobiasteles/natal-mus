import Image from "next/image";
import partyImage from "@/public/mus-8.jpg"
import { Calendar, Clock, MapPin, PartyPopper } from "lucide-react";

export default function ChristmasParty() {
     return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Festa de Natal 2025
            </h2>
            <p className="text-xl text-muted-foreground">
              Celebração especial para as crianças da Estrutural
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Image 
                src={partyImage} 
                alt="Festa de Natal com brinquedos infláveis"
                className="rounded-2xl shadow-card w-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft">
                <div className="bg-blue-700/10 p-3 rounded-lg">
                  <Calendar className="h-8 w-8 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Data</h3>
                  <p className="text-muted-foreground">20 de Dezembro de 2025 (Sábado)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft">
                <div className="bg-red-600/10 p-3 rounded-lg">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Horário</h3>
                  <p className="text-muted-foreground">A partir das 9h30</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft">
                <div className="bg-green-600/10 p-3 rounded-lg">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Local</h3>
                  <p className="text-muted-foreground">Colégio CEF 2 da Estrutural</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-700/5 to-red-600/5 rounded-2xl p-8 border border-blue-700/20">
            <div className="flex items-center gap-3 mb-6">
              <PartyPopper className="h-8 w-8 text-blue-700" />
              <h3 className="text-2xl font-bold">O que teremos na festa?</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🌭</span>
                <span>Cachorro quente</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🧀</span>
                <span>Pães de queijo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🎂</span>
                <span>Bolos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🥤</span>
                <span>Refrigerantes e sucos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🍿</span>
                <span>Pipoca</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🍦</span>
                <span>Dindin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🎨</span>
                <span>Pintura de rosto</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🎈</span>
                <span>Balão mania</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🤸</span>
                <span>2 camas elásticas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🏰</span>
                <span>Brinquedo inflável</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700">🎉</span>
                <span>Muita diversão!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}