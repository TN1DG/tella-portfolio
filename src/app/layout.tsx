import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { initPerformanceMonitoring } from "@/lib/performance";

// Body font - Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display font for headings - Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
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
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased font-sans bg-base-cream text-base-text overflow-x-hidden">
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
