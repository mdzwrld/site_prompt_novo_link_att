"use client";

import { useState, useEffect } from 'react';
import { Hero } from '@/components/sections/Hero';
import { VSL } from '@/components/sections/VSL';
import { Comparison } from '@/components/sections/Comparison';
import { Packs } from '@/components/sections/Packs';
import { Benefits } from '@/components/sections/Benefits';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { FullBundle } from '@/components/sections/FullBundle';

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-16 pb-12 md:pb-24">
        <Hero />
        <VSL />
        <Comparison />
        <Benefits />
        <Packs />
        <FullBundle />
        <FinalCTA />
      </main>
      <footer className="w-full py-8 md:py-12 border-t text-center text-sm text-muted-foreground">
        <p>© {year ?? '...'} Rei do Prompt. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
