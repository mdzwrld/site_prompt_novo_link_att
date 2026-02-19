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
    <section id="comparisons" className="space-y-6 md:space-y-16 py-4 md:py-12 scroll-mt-24">
      <div className="text-center space-y-2 md:space-y-4 px-4">
        <h2 className="text-2xl md:text-5xl font-bold font-headline text-primary">A percepção muda tudo</h2>
        <p className="text-base md:text-lg text-muted-foreground">Veja o impacto real dos nossos prompts exclusivos em resultados reais.</p>
      </div>

      <div className="flex flex-col gap-8 md:gap-16 max-w-5xl mx-auto px-4">
        {comparisons.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 md:gap-6 group">
            <div className="relative w-full aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden border-2 border-primary/10 shadow-lg md:shadow-xl transition-all duration-500 md:group-hover:border-primary/30 md:group-hover:shadow-2xl">
              <Image
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover"
                data-ai-hint={item.imageHint}
              />
            </div>
            <p className="text-center font-bold text-primary text-sm md:text-xl italic md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              Transformação completa em segundos
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
