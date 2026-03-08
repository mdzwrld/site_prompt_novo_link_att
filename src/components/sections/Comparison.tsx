
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

      <div className="flex flex-col gap-12 md:gap-20 max-w-5xl mx-auto px-4">
        {comparisons.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-6 group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-dashed border-muted-foreground/30">
                  <div className="absolute top-4 left-4 z-10 bg-black/60 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Antes</div>
                  <div className="flex items-center justify-center h-full bg-secondary/10">
                    <p className="text-muted-foreground font-bold uppercase">Foto Comum</p>
                  </div>
               </div>
               <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Depois</div>
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    className="object-cover"
                    data-ai-hint={item.imageHint}
                  />
               </div>
            </div>
            <p className="text-center font-black text-primary text-lg md:text-2xl uppercase italic">
              Transformação completa em segundos
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
