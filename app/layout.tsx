import type { Metadata } from "next";
import { ThemeProvider } from "@/app/context/theme-context";
import { fonts } from "@/app/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://manvirheer.com'),
  title: {
    default: "Manvir Heer | Software Engineer",
    template: "%s | Manvir Heer",
  },
  description: "Full-stack software engineer specializing in Python, TypeScript, and modern web technologies. Building data-driven applications and developer tools.",
  keywords: [
    "Manvir Heer",
    "Software Engineer",
    "Full Stack Developer",
    "Python Developer",
    "TypeScript Developer",
    "Next.js",
    "React",
    "Data Analysis",
    "DevOps",
    "Web Development",
  ],
  authors: [{ name: "Manvir Heer" }],
  creator: "Manvir Heer",
  publisher: "Manvir Heer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manvirheer.com",
    siteName: "Manvir Heer",
    title: "Manvir Heer | Software Engineer",
    description: "Full-stack software engineer specializing in Python, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manvir Heer - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manvir Heer | Software Engineer",
    description: "Full-stack software engineer specializing in Python, TypeScript, and modern web technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
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
