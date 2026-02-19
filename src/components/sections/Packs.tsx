
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const packs = [
  {
    title: "Pack Ostentação",
    description: "Imagens de luxo, carros, viagens e estilo de vida alto padrão.",
    image: PlaceHolderImages.find(img => img.id === 'pack-ostentacao')!,
    features: ["+50 prompts de luxo", "Cenários de iates e jatos", "Foco em status e poder"]
  },
  {
    title: "Pack Ensaio de Bebê",
    description: "Fotos delicadas, emocionantes e profissionais para eternizar momentos.",
    image: PlaceHolderImages.find(img => img.id === 'pack-baby')!,
    features: ["Iluminação suave", "Cenários lúdicos", "Qualidade de estúdio profissional"]
  },
  {
    title: "Pack Influenciadora",
    description: "Imagens modernas, estéticas e de alto impacto para redes sociais.",
    image: PlaceHolderImages.find(img => img.id === 'pack-influencer')!,
    features: ["Estética de Instagram", "Street style premium", "Presets de cores vibrantes"]
  }
];

export function Packs() {
  return (
    <section id="packs" className="space-y-12 py-12 scroll-mt-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold font-headline">Escolha seu pack</h2>
        <p className="text-lg text-muted-foreground">O acesso que vai mudar sua presença digital.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packs.map((pack, index) => (
          <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={pack.image.imageUrl}
                alt={pack.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                data-ai-hint={pack.image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">{pack.title}</div>
            </div>
            <CardHeader>
              <CardDescription className="text-base text-foreground/80 min-h-[3rem]">
                {pack.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {pack.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full h-12 rounded-lg font-bold group" variant={index === 0 ? "default" : "outline"}>
                QUERO ESSE PACK
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
