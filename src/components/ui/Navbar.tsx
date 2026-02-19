
"use client";

import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary tracking-tight">
        <Sparkles className="w-6 h-6" />
        <span className="font-headline">ImageElevate AI</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link href="#vsl" className="hover:text-primary transition-colors">Como funciona</Link>
        <Link href="#comparisons" className="hover:text-primary transition-colors">Antes & Depois</Link>
        <Link href="#packs" className="hover:text-primary transition-colors">Packs</Link>
      </div>
    </nav>
  );
}
