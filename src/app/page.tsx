
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
import { Rocket } from 'lucide-react';

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
          <Button asChild size="lg" className="w-full sm:w-auto h-16 px-12 text-lg rounded-full shadow-2xl font-bold bg-primary hover:scale-105 transition-all">
            <Link href="#packs">QUERO ACESSO AGORA</Link>
          </Button>
        </div>

        <VSL />
        
        <HowItWorks />
        
        <Comparison />
        
        <Benefits />

        <div className="flex justify-center py-4">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 px-12 text-lg rounded-full shadow-2xl font-bold bg-primary hover:scale-105 transition-all">
            <Link href="#packs">QUERO ACESSO AGORA</Link>
          </Button>
        </div>

        <Packs />
        
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
