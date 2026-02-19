
"use client";

import { Zap, MessageCircle, Target, Bot, RefreshCw, Lock } from 'lucide-react';

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
    description: "Funciona na versão gratuita da IA."
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
  return (
    <section className="py-20 bg-secondary/10 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 group">
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
          ))}
        </div>
      </div>
    </section>
  );
}
