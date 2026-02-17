import { Inter, Roboto_Mono } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: 'DEV_PORTFOLIO | System Online',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${robotoMono.variable} bg-neutral-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
