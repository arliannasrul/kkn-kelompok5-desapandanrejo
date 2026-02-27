
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="Desa Pandanrejo"
          fill
          priority
          className="object-cover brightness-[0.4]"
          data-ai-hint="nature landscape village"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-8 animate-reveal">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-accent text-sm font-medium tracking-wide uppercase">Desa Pandanrejo, Wagir</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-reveal [animation-delay:200ms]">
          Mengabdi Untuk <br />
          <span className="text-accent italic font-headline">Masyarakat Desa</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-body leading-relaxed animate-reveal [animation-delay:400ms]">
          Dokumentasi dan Arsip Digital KKN Kelompok 5 Universitas Merdeka Malang. 
          Membawa inovasi dan dedikasi untuk kemajuan Desa Pandanrejo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal [animation-delay:600ms]">
          <Button size="lg" className="bg-accent text-primary font-bold hover:bg-accent/90 px-8 rounded-full">
            Lihat Program Kerja
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8 rounded-full">
            Jelajahi Arsip
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
