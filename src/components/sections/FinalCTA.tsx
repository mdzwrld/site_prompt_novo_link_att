
"use client";

import { Button } from '@/components/ui/button';
import { Rocket, Star } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-16 md:py-32 text-center space-y-12 max-w-5xl mx-auto px-4">
      <div className="space-y-6">
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
        </div>
        <h2 className="text-4xl md:text-7xl font-black font-headline leading-none tracking-tight uppercase italic">
          CHEGOU A HORA DE TER <span className="text-primary underline">FOTOS DE CINEMA</span>.
        </h2>
        <div className="space-y-2 text-xl md:text-3xl text-muted-foreground font-bold">
          <p>Enquanto você pensa, alguém já está criando.</p>
          <p className="text-primary uppercase tracking-wider">Acesso imediato por apenas R$12,90.</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-8">
        <Button 
          asChild
          size="lg" 
          className="h-20 md:h-24 w-full max-w-2xl px-8 md:px-12 text-2xl md:text-4xl rounded-full shadow-2xl shadow-primary/40 font-black bg-primary hover:scale-105 transition-all flex items-center gap-4 uppercase italic tracking-tight"
        >
          <Link href="#packs">
            <Rocket className="w-8 h-8 md:w-10 md:h-10" />
            QUERO MINHAS FOTOS DE LUXO AGORA
          </Link>
        </Button>
        <div className="space-y-1">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-green-600">Satisfação Garantida ou seu Dinheiro de Volta</p>
          <div className="flex items-center justify-center gap-4 grayscale opacity-50">
            <span className="text-xs font-bold">PIX</span>
            <span className="text-xs font-bold">CARTÃO</span>
            <span className="text-xs font-bold">BOLETO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
