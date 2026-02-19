
"use client";

import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 text-center space-y-12 max-w-4xl mx-auto border-t">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
          Se você parece comum, será tratado como comum.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Eleve sua imagem agora e comece a colher os frutos de uma presença de alto nível.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Button size="lg" className="h-20 px-12 text-xl rounded-full shadow-2xl shadow-primary/30 font-bold bg-primary hover:scale-105 transition-transform flex items-center gap-3">
          <Sparkles className="w-6 h-6" />
          GARANTIR MEU ACESSO AGORA
        </Button>
        <p className="text-sm font-medium text-muted-foreground">
          Pagamento único. Acesso vitalício aos packs.
        </p>
      </div>
    </section>
  );
}
