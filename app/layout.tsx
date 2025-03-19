// src/app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/app/context/theme-context";
import "@/app/styles/globals.css";


export const metadata: Metadata = {
  title: "Manvir Heer | Portfolio",
  description: "Personal portfolio of Manvir Heer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={` antialiased`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}