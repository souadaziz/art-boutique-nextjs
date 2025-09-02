import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script, Qwitcher_Grypen } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script',
});

const qwitcherGrypen = Qwitcher_Grypen({ 
  subsets: ['latin'],
  variable: '--font-qwitcher-grypen',
  weight: '400',
});


export const metadata: Metadata = {
  title: 'SouadAzizArt - Galerie d\'Art Contemporain',
  description: 'Découvrez la collection unique d\'œuvres d\'art originales de l\'artiste Souad Aziz. Peintures et créations artistiques exceptionnelles.',
  keywords: 'art, galerie, peinture, sculpture, œuvres d\'art, galerie, contemporain',
  icons: [
    {
      rel: 'icon',
      url: '/logo/LOG.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'shortcut icon',
      url: '/logo/LOG.png',
      type: 'image/png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} ${qwitcherGrypen.variable}`}>
      <body className="font-sans antialiased">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
