
"use client";

import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    stars: 5,
    text: "Usei o prompt ostentação e do nada várias meninas começaram a responder meus stories kkkkk surreal."
  },
  {
    stars: 5,
    text: "Postei uma foto que gerei com esses prompts e meu amigo perguntou qual fotógrafo eu paguei."
  },
  {
    stars: 5,
    text: "Mano isso aqui é cheat code. Minha foto ficou parecendo capa de revista."
  },
  {
    stars: 5,
    text: "Usei só por curiosidade e fiquei em choque com o resultado. Parece foto de ensaio caro."
  },
  {
    stars: 5,
    text: "Meu Instagram parecia morto. Postei uma foto com esses prompts e o engajamento subiu muito."
  },
  {
    stars: 5,
    text: "Eu gerei uma foto em menos de 30 segundos e parece que fiz um ensaio profissional."
  },
  {
    stars: 5,
    text: "Comprei achando que era só mais um pack de prompts, mas o resultado ficou absurdo."
  },
  {
    stars: 5,
    text: "Testei o prompt ostentação e minha foto ficou nível milionário."
  },
  {
    stars: 5,
    text: "Esse pack por 12 reais é piada. Vale muito mais."
  },
  {
    stars: 5,
    text: "Depois que usei esses prompts minhas fotos ficaram muito mais profissionais."
  }
];

export function Testimonials() {
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
    <section className="py-12 bg-secondary/5 rounded-3xl border border-primary/5">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-black text-primary uppercase tracking-tight">
            MAIS DE 3.000 PESSOAS JÁ ESTÃO USANDO ESSES PROMPTS
          </h2>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            +3.200 pessoas já transformaram seu perfil
          </p>
        </div>
        
        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} />
          ))}
        </div>

        {/* Mobile View: Carousel */}
        <div className="md:hidden">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-1">
                    <TestimonialCard testimonial={t} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-1.5 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index ? "bg-primary w-6" : "bg-primary/20 w-1.5"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col items-center gap-3 text-center h-full">
      <div className="flex gap-0.5">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-base font-medium italic text-foreground/90 leading-relaxed">
        "{testimonial.text}"
      </p>
    </div>
  );
}
