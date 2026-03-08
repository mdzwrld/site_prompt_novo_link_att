
"use client";

import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const benefits = [
    "Fotos com aparência de luxo",
    "Estética cinematográfica instantânea",
    "Ideal para Instagram e branding pessoal",
    "Resultado em segundos"
  ];

  return (
    <section className="pt-8 md:pt-16 text-center max-w-5xl mx-auto flex flex-col items-center gap-6 md:gap-10">
      <div className="space-y-4 px-4">
        <h1 className="text-4xl md:text-7xl font-black font-headline leading-tight tracking-tight uppercase">
          TRANSFORME QUALQUER FOTO COMUM EM UMA <span className="text-primary italic">FOTO DE LUXO</span> USANDO IA
        </h1>
        <div className="space-y-2">
          <p className="text-xl md:text-3xl text-muted-foreground font-medium">
            Mesmo que você não saiba nada de inteligência artificial.
          </p>
          <p className="text-lg md:text-2xl text-primary font-bold">
            Basta copiar e colar os prompts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left max-w-3xl px-6">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-secondary/20 p-4 rounded-xl border border-primary/5">
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
            <span className="font-semibold text-sm md:text-base">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-[320px] md:max-w-md aspect-[9/14] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10 transition-transform hover:scale-[1.02] duration-500 mx-4">
        <Image
          src="https://i.imgur.com/ioqs2sC.jpeg"
          alt="Luxury Lifestyle Impact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="flex flex-col items-center gap-4 w-full px-6">
        <Button asChild size="lg" className="w-full sm:w-auto h-16 md:h-20 px-10 text-lg md:text-xl rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-all font-black group bg-primary uppercase">
          <Link href="#comparisons">
            QUERO PARECER OUTRO NÍVEL
            <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground animate-pulse font-medium">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          Disponível agora para acesso imediato
        </div>
      </div>
    </section>
  );
}
