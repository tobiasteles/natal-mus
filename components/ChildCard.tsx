import { FileText, Gift, Heart } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ChildCardProps {
  name: string;
  gift: string;
  photo?: string;
  letter?: string;
}

export default function ChildCard({ name, gift, photo, letter }: ChildCardProps) {
  
  const whatsappNumber = "5561981311414"; // (61) 98131-1414
  const message = "Olá! Quero doar um presente para campanha de Natal do Instituto Edukhan.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsApp = () => {
    window.open(
      whatsappUrl,
      "_blank"
    );
  };


  const handleOpenLetter = () => {
    if (letter) {
      window.open(letter, "_blank");
    }
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all hover:-translate-y-2 group">
      <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="text-6xl">👧🏽</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
        </div>

        <div className="bg-blue-700/5 p-4 rounded-lg border border-blue-700/20">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="h-5 w-5 text-blue-700" />
            <span className="font-semibold text-sm">Presente desejado:</span>
          </div>
          <p className="text-foreground">{gift}</p>
        </div>

        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            size="sm" 
            onClick={handleOpenLetter} 
            disabled={!letter}
          >
            <FileText className="mr-2 h-4 w-4" />
            {letter ? "Ler Cartinha de Natal" : "Cartinha em breve"}
          </Button>

          <Button
            variant="default"
            className="w-full justify-start"
            size="sm"
            onClick={handleWhatsApp}
          >
            <Gift className="mr-2 h-4 w-4" />
            Quero Doar Este Presente
          </Button>

          <Button 
            variant="outline" 
            className="w-full justify-start" 
            size="sm" 
            onClick={() => document.getElementById('sponsorship')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Heart className="mr-2 h-4 w-4" />
            Apadrinhar Edukhação/2026
          </Button>
        </div>
      </div>
    </div>
  );
}