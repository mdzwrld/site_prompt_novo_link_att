"use client";

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-impact');

  return (
    <section className="pt-4 md:pt-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6">
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight tracking-tight px-4">
        Como fiz qualquer pessoa parecer viver uma vida de luxo usando apenas <span className="text-primary italic">prompts de IA</span>
      </h1>
      <p className="text-base md:text-2xl text-muted-foreground max-w-2xl px-6 leading-relaxed">
        Transforme qualquer foto comum em imagens que transmitem poder, status e presença. Sem câmeras caras ou estúdio.
      </p>

      {heroImage && (
        <div className="relative w-full max-w-[320px] md:max-w-md aspect-[9/14] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10 transition-transform hover:scale-[1.02] duration-500 mx-4 mt-2">
          <Image
            src="https://i.imgur.com/ioqs2sC.jpeg"
            alt="Luxury Lifestyle Impact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 px-6">
        <Button asChild size="lg" className="h-14 md:h-16 px-10 text-base md:text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform font-bold group">
          <Link href="#packs">
            QUERO PARECER OUTRO NÍVEL
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
      <div className="mt-1 flex items-center gap-2 text-xs md:text-sm text-muted-foreground animate-pulse">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        Disponível agora para acesso imediato
      </div>
    </section>
  );
}
