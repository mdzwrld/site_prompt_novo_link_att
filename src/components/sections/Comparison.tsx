
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featuredComparison = PlaceHolderImages.find(img => img.id === 'comparison-1-composite')!;

const comparisons = [
  {
    before: PlaceHolderImages.find(img => img.id === 'before-2')!,
    after: PlaceHolderImages.find(img => img.id === 'after-2')!,
  },
  {
    before: PlaceHolderImages.find(img => img.id === 'before-3')!,
    after: PlaceHolderImages.find(img => img.id === 'after-3')!,
  },
];

export function Comparison() {
  return (
    <section id="comparisons" className="space-y-16 py-12 scroll-mt-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary">A percepção muda tudo</h2>
        <p className="text-lg text-muted-foreground">Veja o impacto real dos nossos prompts exclusivos.</p>
      </div>

      <div className="space-y-24">
        {/* Featured Composite Image */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full max-w-4xl aspect-[16/10] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
            <Image
              src={featuredComparison.imageUrl}
              alt={featuredComparison.description}
              fill
              className="object-cover"
              data-ai-hint={featuredComparison.imageHint}
            />
          </div>
          <p className="text-center font-bold text-primary text-xl italic">Qualidade cinematográfica em segundos</p>
        </div>

        {/* Secondary Comparisons */}
        {comparisons.map((item, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Before Container */}
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center lg:text-left">
                Normal. Esquecível.
              </span>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden grayscale-[0.5] opacity-80 border shadow-sm">
                <Image
                  src={item.before.imageUrl}
                  alt={item.before.description}
                  fill
                  className="object-cover"
                  data-ai-hint={item.before.imageHint}
                />
              </div>
            </div>

            {/* Desktop Center Text */}
            <div className="hidden lg:flex flex-col items-center justify-center text-primary font-bold text-center gap-2">
              <div className="w-px h-12 bg-border"></div>
              <span className="whitespace-nowrap italic text-xl">Outro nível</span>
              <div className="w-px h-12 bg-border"></div>
            </div>

            {/* After Container */}
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <span className="text-sm font-bold text-primary uppercase tracking-wider text-center lg:text-right">
                Agora parece outro nível.
              </span>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-primary shadow-2xl shadow-primary/10 transition-transform hover:scale-[1.02] duration-500">
                <Image
                  src={item.after.imageUrl}
                  alt={item.after.description}
                  fill
                  className="object-cover"
                  data-ai-hint={item.after.imageHint}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
