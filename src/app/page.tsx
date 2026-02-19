import { Hero } from '@/components/sections/Hero';
import { VSL } from '@/components/sections/VSL';
import { Comparison } from '@/components/sections/Comparison';
import { Packs } from '@/components/sections/Packs';
import { Benefits } from '@/components/sections/Benefits';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-24 pb-12 md:pb-24">
        <Hero />
        <VSL />
        <Benefits />
        <Comparison />
        <Packs />
        <FinalCTA />
      </main>
      <footer className="w-full py-8 md:py-12 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rei do Prompt. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
