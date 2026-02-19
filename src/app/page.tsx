import { Hero } from '@/components/sections/Hero';
import { VSL } from '@/components/sections/VSL';
import { Comparison } from '@/components/sections/Comparison';
import { Packs } from '@/components/sections/Packs';
import { Navbar } from '@/components/ui/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <Navbar />
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <Hero />
        <VSL />
        <Comparison />
        <Packs />
      </main>
      <footer className="w-full py-12 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rei do Prompt. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
