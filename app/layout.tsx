import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Movers On The Move | Moving Labor & Delivery Services in Orlando, FL",
    template: "%s | Movers On The Move",
  },
  description:
    "Movers On The Move offers reliable moving labor and delivery services in Orlando, FL. Call today for local moving help, furniture delivery, and loading or unloading assistance.",
  openGraph: {
    title: "Movers On The Move | Orlando Moving Labor & Delivery",
    description:
      "Dependable moving labor, furniture delivery, and loading help in Orlando and Central Florida.",
    locale: "en_US",
    type: "website",
    url: getSiteUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-mo-white text-mo-black antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
