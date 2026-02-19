"use client";

import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-12 md:py-24 text-center space-y-8 md:space-y-10 max-w-4xl mx-auto px-4">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-3xl md:text-6xl font-bold font-headline leading-tight tracking-tight">
          Enquanto você pensa, alguém já está criando.
        </h2>
        <div className="space-y-1 md:space-y-2 text-base md:text-xl text-muted-foreground font-medium">
          <p>Acesso imediato por apenas R$12,90.</p>
          <p>Comece agora.</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 pt-2 md:pt-4">
        <Button 
          size="lg" 
          className="h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl rounded-full shadow-2xl shadow-primary/30 font-bold bg-primary hover:scale-105 hover:shadow-primary/40 transition-all duration-300 flex items-center gap-3"
        >
          <Rocket className="w-6 h-6" />
          COMEÇAR AGORA
        </Button>
      </div>
    </section>
  );
}
