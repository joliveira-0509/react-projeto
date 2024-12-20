/* import localFont from "next/font/local"; */
import "./globals.css";
import Header from "@/components/Header"

export const metadata = {
  title: "Folha de Teste",
  description: "Aplicação de Front-End II",
  charset: 'UTF-8',
  author: 'João Oliveira',
  keywords: "HTML, CSS, JavaScript, React, Next.js, Joliveira"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
