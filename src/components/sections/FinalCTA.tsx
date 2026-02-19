
"use client";

import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 text-center space-y-10 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold font-headline leading-tight tracking-tight">
          Seu próximo nível começa aqui.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          Acesso imediato • Sem mensalidade • Uso simples
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Button 
          size="lg" 
          className="h-20 px-12 text-xl rounded-full shadow-2xl shadow-primary/30 font-bold bg-primary hover:scale-105 hover:shadow-primary/40 transition-all duration-300 flex items-center gap-3"
        >
          <Sparkles className="w-6 h-6" />
          QUERO LIBERAR MEU ACESSO
        </Button>
      </div>
    </section>
  );
}
