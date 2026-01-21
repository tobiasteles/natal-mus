import type { Metadata } from "next";
import { Inter, Kode_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Mantemos a Inter para textos longos (melhor leitura)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Adicionamos a Kode Mono para o estilo "EduKhan"
const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sonhosdenatal.vercel.app"),
  title: "Apadrinhamento Edukhan - Multiplicando Sorrisos",
  description:
    "Transforme vidas através do apadrinhamento e presenteie crianças da Estrutural. Escolha o seu afilhado!",
  keywords:
    "Apadrinhamento, Doação, Crianças, Instituto Edukhan, Solidariedade, Presentes, Edukamigo, Comunidade Estrutural",
  authors: [{ name: "Instituto Edukhan", url: "https://edukhan.org.br" }],
  openGraph: {
    title: "Apadrinhamento e Presentes - Instituto Edukhan",
    description: "Escolha uma criança para apadrinhar ou presentear. Faça parte da nossa comunidade!",
    type: "website",
    locale: "pt_BR",
    url: "https://sonhosdenatal.vercel.app/",
    images: [
      {
        url: "/simbolo_edukhan.png", // Sugiro trocar para o logo oficial do Edukhan
        width: 1200,
        height: 630,
        alt: "Instituto Edukhan",
      },
    ],
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
        {/* Favicon ajustado para o padrão do Next.js na pasta public */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${kodeMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}