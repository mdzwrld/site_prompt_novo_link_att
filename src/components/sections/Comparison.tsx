
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const comparisons = [
  PlaceHolderImages.find(img => img.id === 'comparison-1')!,
  PlaceHolderImages.find(img => img.id === 'comparison-2')!,
  PlaceHolderImages.find(img => img.id === 'comparison-3')!,
];

export function Comparison() {
  return (
    <section id="comparisons" className="space-y-10 md:space-y-16 py-12 md:py-24 scroll-mt-24">
      <div className="text-center space-y-4 px-4">
        <h2 className="text-3xl md:text-6xl font-black font-headline text-primary uppercase leading-tight">
          A MESMA FOTO.<br />UMA PERCEPÇÃO COMPLETAMENTE DIFERENTE.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-medium italic">Veja o impacto real dos nossos prompts exclusivos em resultados reais.</p>
      </div>

      <div className="flex flex-col gap-12 md:gap-20 max-w-4xl mx-auto px-4">
        {comparisons.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-6 group">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 bg-secondary/5">
              {/* Usando uma div que mantém a proporção natural baseada em largura total */}
              <div className="relative w-full">
                <img
                  src={item.imageUrl}
                  alt={item.description}
                  className="w-full h-auto object-contain block"
                  data-ai-hint={item.imageHint}
                />
              </div>
            </div>
            <p className="text-center font-black text-primary text-lg md:text-2xl uppercase italic tracking-tight">
              Transformação completa em segundos
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
