import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { UnifrakturMaguntia } from "next/font/google";
import "./globals.css";
import { initPerformanceMonitoring } from "@/lib/performance";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-tech",
  subsets: ["latin"],
});

const unifrakturMaguntia = UnifrakturMaguntia({
  variable: "--font-oldenglish",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tella-portfolio.vercel.app'),
  title: "Tella Portfolio - Full-Stack Developer",
  description: "Portfolio of Tella - Full-Stack Developer specializing in modern web technologies, React, TypeScript, and Three.js",
  keywords: "Full-Stack Developer, React, TypeScript, Three.js, Next.js, Portfolio, Web Development",
  authors: [{ name: "Tella" }],
  creator: "Tella",
  openGraph: {
    title: "Tella Portfolio - Full-Stack Developer",
    description: "Portfolio of Tella - Full-Stack Developer specializing in modern web technologies",
    url: "https://tella-portfolio.vercel.app",
    siteName: "Tella Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tella Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tella Portfolio - Full-Stack Developer",
    description: "Portfolio of Tella - Full-Stack Developer specializing in modern web technologies",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} ${unifrakturMaguntia.variable} antialiased font-body bg-ink text-white`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                (${initPerformanceMonitoring.toString()})();
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
