
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ImageElevate AI - Percepção de Luxo',
  description: 'Transforme qualquer foto comum em imagens que transmitem poder, status e presença com IA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background selection:bg-accent selection:text-primary">
        {children}
      </body>
    </html>
  );
}
