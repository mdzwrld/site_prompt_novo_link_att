
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rei do Prompt - Transforme sua Imagem com IA',
  description: 'Eleve sua percepção de status e poder com os prompts mais exclusivos do mercado.',
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
        
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1256757253223112');
          fbq('track', 'PageView');
        ` }} />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1256757253223112&ev=PageView&noscript=1"
            alt="pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        <script dangerouslySetInnerHTML={{ __html: `
          window.pixelId = "6997348f230d36c4029e9793";
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        ` }} />
      </head>
      <body className="font-body antialiased bg-background selection:bg-accent selection:text-primary">
        {children}
      </body>
    </html>
  );
}
