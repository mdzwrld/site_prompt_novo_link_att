"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const comparisons = [
  PlaceHolderImages.find(img => img.id === 'comparison-1')!,
  PlaceHolderImages.find(img => img.id === 'comparison-2')!,
  PlaceHolderImages.find(img => img.id === 'comparison-3')!,
];

export function Comparison() {
  return (
    <section id="comparisons" className="space-y-8 md:space-y-16 py-8 md:py-12 scroll-mt-24">
      <div className="text-center space-y-4 px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary">A percepção muda tudo</h2>
        <p className="text-lg text-muted-foreground">Veja o impacto real dos nossos prompts exclusivos em resultados reais.</p>
      </div>

      {/* Desktop View: Stacked List */}
      <div className="hidden md:flex flex-col gap-16 max-w-5xl mx-auto px-4">
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

      {/* Mobile View: Horizontal Carousel */}
      <div className="md:hidden px-4">
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {comparisons.map((item, idx) => (
              <CarouselItem key={idx}>
                <div className="space-y-4">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border-2 border-primary/10 shadow-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.description}
                      fill
                      className="object-cover"
                      data-ai-hint={item.imageHint}
                    />
                  </div>
                  <p className="text-center font-bold text-primary text-sm italic">
                    Arraste para ver mais →
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
