"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // O navbar aparece após rolar 100 pixels
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Início", id: "hero" },
    { label: "O Edukhan", id: "about" },
    { label: "Como Ajudar", id: "kits" },
    { label: "Nossos Alunos", id: "children" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'top-0 bg-white shadow-xl border-b border-[#4db5ea]/20 py-2 opacity-100' 
          : '-top-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image 
              alt="Logo Edukhan" 
              src="/SIMBOLO-5.jpg" 
              width={45} 
              height={45} 
              className="rounded-full object-cover border-2 border-[#0a28e6]" 
            />
            <span className="font-black text-[#0a28e6] text-xl tracking-tighter">EDUKHAN</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#0a28e6]/70 hover:text-[#0a28e6] font-bold transition-colors relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#6e55f5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('kits')}
              className="bg-[#99de81] text-[#0a28e6] px-5 py-2 rounded-full font-black text-sm uppercase hover:bg-[#4db5ea] transition-all shadow-md"
            >
              Doar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0a28e6]"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6">
            <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl shadow-2xl border border-[#4db5ea]/20">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-[#0a28e6] hover:bg-[#4db5ea]/10 rounded-xl font-bold"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}