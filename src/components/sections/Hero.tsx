"use client";

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-impact');
  const logo = PlaceHolderImages.find(img => img.id === 'logo-rei-do-prompt');

  return (
    <section className="pt-12 lg:pt-20 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
      {logo && (
        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4">
          <Image
            src={logo.imageUrl}
            alt="Rei do Prompt Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      )}
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight tracking-tight">
        Como fiz qualquer pessoa parecer viver uma vida de luxo usando apenas <span className="text-primary italic">prompts de IA</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
        Transforme qualquer foto comum em imagens que transmitem poder, status e presença. Sem câmeras caras ou estúdio.
      </p>

      {heroImage && (
        <div className="relative w-full max-w-md aspect-[9/14] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10 transition-transform hover:scale-[1.02] duration-500">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
        <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform font-bold group">
          QUERO PARECER OUTRO NÍVEL
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        Disponível agora para acesso imediato
      </div>
    </section>
  );
}
