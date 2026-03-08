
"use client";

import { Star } from 'lucide-react';

const testimonials = [
  {
    stars: 5,
    text: "Minhas fotos parecem de revista agora.",
    author: "Ricardo S."
  },
  {
    stars: 5,
    text: "Usei no Instagram e todo mundo perguntou quem tirou.",
    author: "Amanda M."
  },
  {
    stars: 5,
    text: "Vale muito mais que o preço.",
    author: "Gustavo K."
  }
];

export function Testimonials() {
  return (
    <section className="py-12 bg-secondary/5 rounded-3xl border border-primary/5">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        <h2 className="text-2xl md:text-4xl font-black text-primary uppercase tracking-tight">
          MAIS DE 3.000 PESSOAS JÁ ESTÃO USANDO ESSES PROMPTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-primary/5 flex flex-col items-center gap-4">
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg font-medium italic text-foreground/90">"{t.text}"</p>
              <span className="text-sm text-muted-foreground font-bold">— {t.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
