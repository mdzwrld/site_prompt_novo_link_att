
"use client";

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-20 lg:pt-32 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight tracking-tight">
        Como fiz qualquer pessoa parecer viver uma vida de luxo usando apenas <span className="text-primary italic">prompts de IA</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
        Transforme qualquer foto comum em imagens que transmitem poder, status e presença. Sem câmeras caras ou estúdio.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
        <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform font-bold group">
          QUERO PARECER OUTRO NÍVEL
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        Disponível agora para acesso imediato
      </div>
    </section>
  );
}
