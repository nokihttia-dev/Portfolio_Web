import type { Metadata } from "next";
import "./globals.css";
import { Inter, Noto_Sans_Thai } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoThai = Noto_Sans_Thai({ subsets: ["thai"], variable: "--font-thai" });

export const metadata: Metadata = {
  title: "Aitthikon Makdee | Web Developer",
  description:
    "Portfolio of Aitthikon Makdee (Web Developer) - Experience, Projects, Skills, and Contact.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} ${notoThai.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
