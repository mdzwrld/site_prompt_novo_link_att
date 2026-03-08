
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const packs = [
  {
    title: "+300 Prompts Imagens Ostentação",
    description: "Transforme suas fotos comuns em imagens de alto impacto usando inteligência artificial.",
    image: PlaceHolderImages.find(img => img.id === 'pack-ostentacao')!,
    features: [
      "+300 prompts premium",
      "Estilo luxo e ostentação",
      "Visual cinematográfico",
      "Ideal para marketing e branding"
    ],
    price: "R$12,90",
    oldPrice: "R$97",
    checkoutUrl: "https://compraseguraonline.org.ua/c/02cfd3da8d"
  },
  {
    title: "+100 Prompts Foto Influencer Feminina",
    description: "Gere fotos de Influencer com seu rosto! Viagens, festas, ensaios e muito mais!",
    image: PlaceHolderImages.find(img => img.id === 'pack-influencer')!,
    features: [
      "+100 prompts exclusivos",
      "Fotos de viagens, festas e ensaios",
      "Gere imagens com seu próprio rosto",
      "Estilo realista e profissional"
    ],
    price: "R$10,90",
    oldPrice: "R$77",
    checkoutUrl: "https://compraseguraonline.org.ua/c/71ee0c15d9"
  },
  {
    title: "+240 Prompts Ensaio de Bebês",
    description: "Crie ensaios newborn delicados e emocionantes com inteligência artificial.",
    image: PlaceHolderImages.find(img => img.id === 'pack-baby')!,
    features: [
      "+240 prompts prontos",
      "Ensaios newborn realistas",
      "Cenários criativos e delicados",
      "Ideal para fotógrafos"
    ],
    price: "R$9,90",
    oldPrice: "R$67",
    checkoutUrl: "https://compraseguraonline.org.ua/c/d26297b314"
  }
];

export function Packs() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="packs" className="space-y-8 md:space-y-16 py-12 md:py-24 scroll-mt-24">
      <div className="text-center space-y-4 px-4">
        <h2 className="text-3xl md:text-6xl font-black font-headline uppercase">Escolha seu pack</h2>
        <div className="flex flex-col items-center gap-2">
           <div className="bg-destructive/10 text-destructive px-6 py-2 rounded-full font-black text-sm md:text-base flex items-center gap-2 border border-destructive/20 animate-pulse">
             <AlertTriangle className="w-5 h-5" />
             ⚠️ Oferta promocional pode sair do ar a qualquer momento.
           </div>
           <p className="text-lg md:text-2xl text-muted-foreground font-medium">O acesso que vai mudar sua presença digital.</p>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {packs.map((pack, index) => (
          <PackCard key={index} pack={pack} />
        ))}
      </div>

      <div className="md:hidden">
        <Carousel setApi={setApi} opts={{ align: "center", loop: false }} className="w-full">
          <CarouselContent className="-ml-2">
            {packs.map((pack, index) => (
              <CarouselItem key={index} className="pl-2 basis-[88%] first:pl-4 last:pr-4">
                <PackCard pack={pack} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            {packs.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-6" : "bg-primary/20"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function PackCard({ pack }: { pack: typeof packs[0] }) {
  return (
    <Card className="group overflow-hidden border-2 border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={pack.image.imageUrl}
          alt={pack.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white font-black text-2xl leading-tight uppercase italic tracking-tight">
          {pack.title}
        </div>
      </div>
      <CardContent className="space-y-6 flex-grow p-8">
        <p className="text-muted-foreground font-medium leading-relaxed">
          {pack.description}
        </p>
        <ul className="space-y-3">
          {pack.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-start gap-3 text-sm font-bold text-foreground/80">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 p-8 pt-0">
        <div className="w-full space-y-1">
          <p className="text-center text-sm font-bold text-muted-foreground line-through">Valor real: {pack.oldPrice}</p>
          <div className="text-center w-full py-4 bg-primary/5 rounded-2xl border-2 border-primary/20">
            <p className="text-xs font-black uppercase tracking-widest text-primary/60 mb-1">Hoje disponível por apenas</p>
            <div className="text-5xl font-black text-primary tracking-tighter">{pack.price}</div>
            <p className="text-[10px] font-black text-primary/60 uppercase mt-1">Pagamento Único</p>
          </div>
        </div>
        <div className="space-y-2 w-full text-center">
          <Button asChild className="w-full h-16 rounded-full font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform uppercase bg-primary">
            <a href={pack.checkoutUrl}>QUERO ACESSO AGORA</a>
          </Button>
          <p className="text-xs font-bold text-muted-foreground">Acesso imediato após pagamento.</p>
        </div>
      </CardFooter>
    </Card>
  );
}
