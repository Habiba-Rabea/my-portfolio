import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habiba Rabea",
  description: "Full-Stack Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#090d16] text-white">
        {children}
      </body>
    </html>
  );
}