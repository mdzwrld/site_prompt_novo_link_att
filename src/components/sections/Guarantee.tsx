
"use client";

import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-12 md:py-20 max-w-4xl mx-auto px-6">
      <div className="bg-primary/5 border-4 border-primary/20 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
           <ShieldCheck className="w-full h-full text-primary" strokeWidth={1} />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase leading-tight tracking-tight">
            GARANTIA INCONDICIONAL DE 7 DIAS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            Se você não gostar dos prompts ou achar que não servem para você, basta solicitar reembolso. Devolvemos seu dinheiro sem burocracia. O risco é todo meu.
          </p>
        </div>
      </div>
    </section>
  );
}
