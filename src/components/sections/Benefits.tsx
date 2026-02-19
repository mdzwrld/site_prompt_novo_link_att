"use client";

import { Zap, MessageCircle, Target, Bot, RefreshCw, Lock } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Entrega Imediata",
    description: "Acesso liberado automaticamente após a confirmação do pagamento."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    title: "Suporte via WhatsApp",
    description: "Atendimento direto para tirar dúvidas e ajudar você."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Fácil de Usar",
    description: "Prompts prontos para copiar e colar."
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Compatível com Gemini Free",
    description: "Funciona na version gratuita da IA."
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
    title: "Atualizações Inclusas",
    description: "Você recebe melhorias futuras sem custo adicional."
  },
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: "Pagamento Seguro",
    description: "Ambiente protegido e compra garantida."
  }
];

export function Benefits() {
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
    <section className="py-8 md:py-20 bg-secondary/10 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} benefit={benefit} />
          ))}
        </div>

        {/* Mobile View: Carousel */}
        <div className="md:hidden">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {benefits.map((benefit, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <BenefitItem benefit={benefit} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index ? "bg-primary w-6" : "bg-primary/20 w-1.5"
                  }`}
                  aria-label={`Ir para benefício ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ benefit }: { benefit: typeof benefits[0] }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 group">
      <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
        {benefit.icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-primary">{benefit.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
