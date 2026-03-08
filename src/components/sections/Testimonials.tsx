
"use client";

import { Star } from 'lucide-react';

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
  return (
    <section className="py-12 bg-secondary/5 rounded-3xl border border-primary/5">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        <h2 className="text-2xl md:text-4xl font-black text-primary uppercase tracking-tight">
          MAIS DE 3.000 PESSOAS JÁ ESTÃO USANDO ESSES PROMPTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col items-center gap-3 text-center">
              <div className="flex gap-0.5">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base font-medium italic text-foreground/90 leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
