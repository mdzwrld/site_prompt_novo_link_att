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
    <section id="comparisons" className="space-y-16 py-12 scroll-mt-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary">A percepção muda tudo</h2>
        <p className="text-lg text-muted-foreground">Veja o impacto real dos nossos prompts exclusivos em resultados reais.</p>
      </div>

      <div className="space-y-16 max-w-5xl mx-auto">
        {comparisons.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-6 group">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-primary/10 shadow-xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl">
              <Image
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover"
                data-ai-hint={item.imageHint}
              />
            </div>
            <p className="text-center font-bold text-primary text-xl italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Transformação completa em segundos
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}