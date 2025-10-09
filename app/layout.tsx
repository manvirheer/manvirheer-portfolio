import type { Metadata } from "next";
import { ThemeProvider } from "@/app/context/theme-context";
import { fonts } from "@/app/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manvir Heer | Portfolio",
  description: "Personal portfolio of Manvir Heer - Software Engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

function useFontClasses() {
  const fontClasses = Object.values(fonts)
    .map((font) => font.variable)
    .join(" ");
  return fontClasses;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = useFontClasses();

  return (
    <html lang="en" className={`${fontClasses} overflow-x-hidden`}>
      <ThemeProvider>
        <body className="antialiased min-h-screen flex flex-col overflow-x-hidden">
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
