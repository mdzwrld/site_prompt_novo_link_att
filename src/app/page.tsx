
"use client";

import { useState, useEffect } from 'react';
import { Hero } from '@/components/sections/Hero';
import { VSL } from '@/components/sections/VSL';
import { Comparison } from '@/components/sections/Comparison';
import { Packs } from '@/components/sections/Packs';
import { Benefits } from '@/components/sections/Benefits';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { FullBundle } from '@/components/sections/FullBundle';
import { Testimonials } from '@/components/sections/Testimonials';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Guarantee } from '@/components/sections/Guarantee';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Rocket } from 'lucide-react';

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-24 pb-12 md:pb-24">
        <Hero />
        
        <Testimonials />
        
        <div className="flex justify-center py-4">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 md:h-20 px-12 text-lg md:text-xl rounded-full shadow-2xl font-black bg-primary hover:scale-105 transition-all uppercase">
            <Link href="#packs">QUERO MINHAS FOTOS DE LUXO AGORA</Link>
          </Button>
        </div>

        <VSL />
        
        <HowItWorks />
        
        <Comparison />

        <div className="flex justify-center py-4">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 md:h-20 px-12 text-lg md:text-xl rounded-full shadow-2xl font-black bg-primary hover:scale-105 transition-all uppercase">
            <Link href="#packs">QUERO MINHAS FOTOS DE LUXO AGORA</Link>
          </Button>
        </div>

        <section className="py-12 md:py-20 max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase leading-tight">ESSE PACK É PERFEITO PARA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "Criadores de conteúdo",
              "Quem quer melhorar o Instagram",
              "Influencers iniciantes",
              "Quem quer fotos com aparência profissional",
              "Quem quer mais impacto visual nas redes"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-secondary/5 rounded-2xl border border-primary/5">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-bold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </section>
        
        <Benefits />

        <Packs />
        
        <div className="flex justify-center py-4">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 md:h-20 px-12 text-lg md:text-xl rounded-full shadow-2xl font-black bg-primary hover:scale-105 transition-all uppercase">
            <Link href="#packs">QUERO MINHAS FOTOS DE LUXO AGORA</Link>
          </Button>
        </div>

        <Guarantee />
        
        <FullBundle />
        
        <FinalCTA />
      </main>
      <footer className="w-full py-8 md:py-12 border-t text-center text-sm text-muted-foreground">
        <p>© {year ?? '...'} Rei do Prompt. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
