
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Sprout, Heart, Users } from "lucide-react";

export function WorkPrograms() {
  const programs = [
    {
      title: "Pemberdayaan UMKM Digital",
      category: "Ekonomi",
      icon: <Users className="w-6 h-6" />,
      desc: "Pelatihan pemasaran digital dan pembuatan konten kreatif untuk pengusaha lokal Desa Pandanrejo.",
      imageId: "work-program-1"
    },
    {
      title: "Pandanrejo Hijau",
      category: "Lingkungan",
      icon: <Sprout className="w-6 h-6" />,
      desc: "Program reboisasi dan edukasi pengolahan limbah rumah tangga menjadi pupuk organik cair.",
      imageId: "work-program-2"
    },
    {
      title: "Cerdas Bersama",
      category: "Pendidikan",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Bimbingan belajar pasca sekolah dan revitalisasi perpustakaan desa untuk meningkatkan minat baca.",
      imageId: "work-program-3"
    },
    {
      title: "Posyandu Sehat",
      category: "Kesehatan",
      icon: <Heart className="w-6 h-6" />,
      desc: "Pendampingan kegiatan rutin posyandu dan penyuluhan gizi seimbang bagi balita dan lansia.",
      imageId: "work-program-1"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Program Unggulan</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-6 leading-tight">Membangun Desa Melalui Inovasi Berkelanjutan</h3>
          </div>
          <p className="text-muted-foreground max-w-sm mb-2">
            Setiap program kerja dirancang berdasarkan kebutuhan riil masyarakat Desa Pandanrejo melalui observasi mendalam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => {
            const progImage = PlaceHolderImages.find(img => img.id === prog.imageId);
            return (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row border border-border/50 hover:border-accent transition-colors duration-300">
                <div className="relative w-full sm:w-2/5 min-h-[250px]">
                  <Image
                    src={progImage?.imageUrl || ''}
                    alt={prog.title}
                    fill
                    className="object-cover"
                    data-ai-hint="kkn activity"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary rounded-lg text-primary">
                      {prog.icon}
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-primary border-none">{prog.category}</Badge>
                  </div>
                  <h4 className="text-2xl font-bold font-headline text-primary mb-3 group-hover:text-accent transition-colors">{prog.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
