import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-black uppercase tracking-tight transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none active:scale-95",
  {
    variants: {
      variant: {
        // Azul Royal Principal - Forçado com Hexadecimal
        default: "bg-[#0a28e6] text-white border-4 border-[#020617] shadow-[4px_4px_0px_#020617] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        
        // Rosa Edukhan (Ações de Doação) - Forçado com Hexadecimal
        destructive: "bg-[#e60a78] text-white border-4 border-[#020617] shadow-[4px_4px_0px_#020617] hover:bg-[#c50866] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        
        // Estilo Outline com borda azul marinho forte
        outline: "border-4 border-[#0a28e6] bg-white text-[#0a28e6] shadow-[4px_4px_0px_rgba(10,40,230,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        
        // Azul Celeste (Secondary)
        secondary: "bg-[#0aaae6] text-white border-4 border-[#020617] shadow-[4px_4px_0px_#020617] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        
        // Ghost para links
        ghost: "text-[#0a28e6] hover:bg-[#0a28e6]/10",
        
        // Link clássico
        link: "text-[#0a28e6] underline-offset-4 hover:underline",

        // Amarelo Edukhan (Festive) - Texto em Azul Marinho para contraste
        festive: "bg-[#FFD700] text-[#0a28e6] border-4 border-[#0a28e6] shadow-[4px_4px_0px_#0a28e6] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        
        // Donate (Rosa com destaque)
        donate: "bg-[#e60a78] text-white border-4 border-white shadow-[0_0_15px_rgba(230,10,120,0.4)] hover:scale-105"
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-4 text-xs",
        lg: "h-16 px-10 text-lg",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };