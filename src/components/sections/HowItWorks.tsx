
"use client";

import { Copy, Terminal, ImagePlus, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Copy className="w-8 h-8 text-primary" />,
    title: "Passo 1",
    desc: "Escolha um prompt."
  },
  {
    icon: <Terminal className="w-8 h-8 text-primary" />,
    title: "Passo 2",
    desc: "Cole no ChatGPT ou IA de imagem."
  },
  {
    icon: <ImagePlus className="w-8 h-8 text-primary" />,
    title: "Passo 3",
    desc: "Envie sua foto."
  }
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-20 max-w-5xl mx-auto px-6 text-center space-y-12">
      <h2 className="text-3xl md:text-5xl font-black text-primary uppercase">COMO FUNCIONA</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
              {step.icon}
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-primary uppercase">{step.title}</h3>
              <p className="text-muted-foreground font-medium leading-tight">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-200 flex items-center justify-center gap-3">
        <CheckCircle className="w-6 h-6 text-green-600" />
        <span className="text-lg md:text-xl font-bold text-green-800">Resultado: imagem com aparência profissional.</span>
      </div>
    </section>
  );
}
