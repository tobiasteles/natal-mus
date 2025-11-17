import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campanha de Natal 2025 - Instituto Edukhan - Multiplicando Sorrisos",
  description:
    "Transforme o Natal de uma criança da Estrutural. Faça sua doação via PIX e leve alegria para quem mais precisa. Kit Natal R$300, Kit Presente R$150, Kit Festa R$150.",
  keywords:
    "Natal, Doação, Crianças, Instituto Edukhan, Solidariedade, Kit Natal, Kit Presente, Kit Festa, Comunidade Estrutural",
  authors: [{ name: "Instituto Edukhan", url: "https://edukhan.org.br" }],
  openGraph: {
    title:
      "Campanha de Natal 2025 - Instituto Edukhan - Multiplicando Sorrisos",
    description: "Transforme o Natal de uma criança da Estrutural",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/app/favicon.ico"  />
        <meta property="og:title" content="Campanha de Natal 2025 - Instituto Edukhan - Multiplicando Sorrisos" />
        <meta  property="og:description" content="Transforme o Natal de uma criança da Estrutural. Doe via PIX: 50.615.676/0001-68"/>
        <meta property="og:image" content="https://sonhosdenatal.vercel.app/_next/image?url=%2Fsimbolo_natal.png&w=64&q=75"/>
         <meta property="og:url" content="https://sonhosdenatal.vercel.app/" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
