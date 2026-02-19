
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-rei-do-prompt');

  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/5">
      <Link href="/" className="flex items-center gap-3 font-bold text-xl text-primary tracking-tight">
        {logo && (
          <div className="relative w-12 h-12 overflow-hidden rounded-full">
            <Image
              src={logo.imageUrl}
              alt="Rei do Prompt Logo"
              fill
              className="object-cover"
            />
          </div>
        )}
        <span className="font-headline hidden sm:inline-block">Rei do Prompt</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link href="#vsl" className="hover:text-primary transition-colors">Como funciona</Link>
        <Link href="#comparisons" className="hover:text-primary transition-colors">Antes & Depois</Link>
        <Link href="#packs" className="hover:text-primary transition-colors">Packs</Link>
      </div>
    </nav>
  );
}
