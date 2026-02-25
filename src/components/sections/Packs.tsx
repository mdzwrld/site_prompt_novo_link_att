"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
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
    <section id="packs" className="space-y-4 md:space-y-10 py-4 md:py-10 scroll-mt-24">
      <div className="text-center space-y-1">
        <h2 className="text-2xl md:text-5xl font-bold font-headline">Escolha seu pack</h2>
        <p className="text-sm md:text-lg text-muted-foreground">O acesso que vai mudar sua presença digital.</p>
      </div>

      {/* Desktop View: Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {packs.map((pack, index) => (
          <PackCard key={index} pack={pack} index={index} />
        ))}
      </div>

      {/* Mobile View: Carousel with Peek Effect */}
      <div className="md:hidden">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "center",
            loop: false,
            startIndex: 0,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {packs.map((pack, index) => (
              <CarouselItem key={index} className="pl-2 basis-[88%] first:pl-4 last:pr-4">
                <div className="p-1">
                  <PackCard pack={pack} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-2 mt-4">
            {packs.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-6" : "bg-primary/20"
                }`}
                aria-label={`Ir para pack ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function PackCard({ pack, index }: { pack: typeof packs[0], index: number }) {
  return (
    <Card className="group overflow-hidden border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={pack.image.imageUrl}
          alt={pack.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          data-ai-hint={pack.image.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg leading-tight">
          {pack.title}
        </div>
      </div>
      <CardHeader className="py-4">
        <CardDescription className="text-sm text-foreground/80 min-h-[2.5rem] line-clamp-2">
          {pack.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow pb-4">
        <ul className="space-y-2">
          {pack.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
              <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 pt-0 pb-6">
        <div className="text-center w-full py-3 bg-secondary/30 rounded-xl">
          <div className="text-2xl font-black text-primary">{pack.price}</div>
          <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">pagamento único</div>
        </div>
        <Button 
          asChild
          className="w-full h-12 rounded-full font-bold text-base shadow-lg shadow-primary/20 hover:scale-105 transition-transform" 
          variant="default"
        >
          <a href={pack.checkoutUrl}>
            QUERO ACESSAR AGORA
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
