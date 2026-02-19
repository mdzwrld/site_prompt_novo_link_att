"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function FullBundle() {
  return (
    <section className="py-4 md:py-10 max-w-4xl mx-auto px-4">
      <Card className="relative overflow-hidden border-4 border-primary shadow-2xl bg-gradient-to-br from-white to-primary/5">
        <div className="absolute top-4 right-4 bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full animate-bounce flex items-center gap-1 z-10">
          <Sparkles className="w-3 h-3" />
          MELHOR CUSTO-BENEFÍCIO
        </div>
        
        <CardHeader className="text-center space-y-2 pt-10 pb-4">
          <CardTitle className="text-2xl md:text-4xl font-black text-primary uppercase tracking-tight">
            Acesso Completo (Combo)
          </CardTitle>
          <p className="text-sm md:text-lg text-muted-foreground font-medium px-4">
            Leve todos os nossos packs por um preço especial.
          </p>
          
          <div className="relative w-full aspect-video md:aspect-[2/1] rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg mt-4">
            <Image
              src="https://i.imgur.com/Km3dJhc.jpeg"
              alt="Combo Completo Banner"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm md:text-base font-semibold">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>+300 Prompts Imagens Ostentação</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base font-semibold">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>+100 Prompts Foto Influencer Feminina</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base font-semibold">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>+240 Prompts Ensaio de Bebês</span>
              </li>
            </ul>
            <div className="bg-primary/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-primary/10">
              <span className="text-sm text-muted-foreground line-through">De R$ 33,70</span>
              <div className="text-4xl md:text-6xl font-black text-primary">R$ 27,90</div>
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">Pagamento Único</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pb-10 px-6 md:px-12">
          <Button asChild className="w-full h-16 md:h-20 rounded-full font-black text-xl md:text-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all bg-primary hover:bg-primary/90 text-white group uppercase">
            <a href="https://ambienteseguro.org.ua/c/a58da6695b">
              QUERO TODOS OS PROMPTS
            </a>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
