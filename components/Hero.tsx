"use client";

import Image from "next/image";
import heroImage from "@/public/mus.jpg";

export default function Hero() {
    const handlePixCopy = () => {
        navigator.clipboard.writeText("50.615.676/0001-68");
        alert("Chave PIX copiada para a área de transferência!");
    }


    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
               <Image
               src={heroImage}
               alt="Campanha"
               fill
               className="object-cover"
               priority
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black-ground"></div>
               <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Campanha de Natal 2025</h1>
                <p className="text-xl md:text-2xl mb-8"> Transforme o Natal de uma criança e traga luz onde falta esperança!</p>
                <button
                onClick={handlePixCopy}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg"
                >Doar via PIX</button>
               </div>
            </div>
        </section>
    )
}