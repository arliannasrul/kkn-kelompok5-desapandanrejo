"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Sparkles } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background with slow zoom animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImage?.imageUrl && (
          <Image
            src={heroImage.imageUrl}
            alt="Desa Pandanrejo"
            fill
            priority
            className="object-cover brightness-[0.4] animate-slow-zoom"
            data-ai-hint="nature landscape village"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 pt-12">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/40 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 animate-reveal shadow-2xl">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-bold tracking-widest uppercase">Desa Pandanrejo, Wagir</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 animate-reveal delay-100">
            <Calendar className="w-4 h-4 text-white/80" />
            <span className="text-white/90 text-sm font-medium">19 Januari - 19 Februari 2026</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-reveal delay-200 tracking-tight">
          Optimalisasi Pengelolaan Sampah Plastik <br className="hidden md:block" />
          Melalui <span className="text-secondary italic font-headline inline-flex items-center gap-4">
             Teknologi Mesin Pirolisis <Sparkles className="w-8 h-8 md:w-12 md:h-12 animate-pulse text-secondary" />
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto font-body leading-relaxed animate-reveal delay-300">
          Sebagai Sumber Bahan Bakar Alternatif. Inovasi KKN Kelompok 5 Universitas Merdeka Malang untuk keberlanjutan Desa Pandanrejo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal delay-400">
          <Button 
            size="lg" 
            className="bg-secondary text-primary font-black hover:bg-secondary/90 px-10 py-7 text-lg rounded-full shadow-glow transition-all hover:scale-105 active:scale-95 group border-none"
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Detail Program
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white/40 backdrop-blur-md hover:bg-white/10 px-10 py-7 text-lg rounded-full transition-all hover:border-white"
            onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jelajahi Arsip
          </Button>
        </div>
      </div>
    </section>
  );
}
