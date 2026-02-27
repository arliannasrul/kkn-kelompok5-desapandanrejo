
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Target, Settings, Info, CheckCircle2, AlertCircle, Zap } from "lucide-react";

export function WorkPrograms() {
  const methods = [
    { title: "Observasi", desc: "Pemetaan pola sampah desa." },
    { title: "Perancangan", desc: "Desain teknis reaktor pirolisis." },
    { title: "Pembuatan", desc: "Fabrikasi mesin & pengelasan." },
    { title: "Uji Coba", desc: "Proses penyulingan plastik." },
    { title: "Edukasi", desc: "Transfer ilmu ke Karang Taruna." },
  ];

  const reasons = [
    "Plastik butuh 400+ tahun terurai",
    "Pembakaran liar rilis gas dioksin",
    "Mikroplastik cemari rantai makanan",
    "Potensi ekonomi bahan bakar cair"
  ];

  const pirolisisImg = PlaceHolderImages.find(img => img.id === 'work-program-2');

  return (
    <section id="programs" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.4em] mb-4">Langkah Strategis</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-headline text-primary mb-6">Inovasi Teknologi Pirolisis</h3>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Latar Belakang */}
          <Card className="hover-lift border-none shadow-xl group overflow-hidden">
            <div className="h-2 w-full bg-accent group-hover:h-3 transition-all" />
            <CardHeader className="pt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                  <Info className="w-6 h-6" />
                </div>
                <CardTitle className="font-headline text-2xl text-primary">Latar Belakang</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Krisis sampah plastik di Desa Pandanrejo menuntut solusi luar biasa. Metode penimbunan konvensional tidak lagi cukup untuk menjaga kelestarian lingkungan jangka panjang.
              </p>
            </CardContent>
          </Card>

          {/* Tujuan */}
          <Card className="hover-lift border-none shadow-xl group overflow-hidden">
            <div className="h-2 w-full bg-primary group-hover:h-3 transition-all" />
            <CardHeader className="pt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <CardTitle className="font-headline text-2xl text-primary">Tujuan Utama</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Eliminasi limbah plastik non-organik.",
                  "Hasilkan bahan bakar alternatif ekonomis.",
                  "Kemandirian pengelolaan sampah desa.",
                  "Edukasi teknologi tepat guna."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-primary/80">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Metode Pelaksanaan */}
          <Card className="hover-lift border-none shadow-xl group overflow-hidden">
            <div className="h-2 w-full bg-accent group-hover:h-3 transition-all" />
            <CardHeader className="pt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                  <Settings className="w-6 h-6" />
                </div>
                <CardTitle className="font-headline text-2xl text-primary">Roadmap Eksekusi</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {methods.map((m, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-white/50 rounded-2xl border border-border/50 hover:bg-white transition-colors">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-xs uppercase">{m.title}</h5>
                      <p className="text-[10px] text-muted-foreground font-medium">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlight Section */}
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden mb-20 group">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 group-hover:bg-white/10 transition-colors" />
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-8">
              <Badge className="bg-accent text-primary font-bold px-6 py-2 text-sm rounded-full">Urgent Action</Badge>
              <h4 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight">
                Mengapa Pandanrejo Harus <span className="text-accent italic">Bebas Plastik?</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/20 transition-all">
                    <div className="p-2 bg-accent rounded-xl text-primary">
                      <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-white/90 leading-snug">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-2/5 aspect-[4/5] relative rounded-[2.5rem] overflow-hidden shadow-glow animate-float">
               {pirolisisImg?.imageUrl && (
                 <Image 
                  src={pirolisisImg.imageUrl} 
                  alt="Pengolahan Sampah" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="waste management plastic"
                 />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-lg italic">"Waste is only waste if we waste it."</p>
               </div>
            </div>
          </div>
        </div>

        {/* Impact Tracker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-accent/20 flex flex-col justify-between hover-lift">
            <h4 className="text-3xl font-headline font-bold text-primary mb-8 flex items-center gap-4">
              <Sprout className="text-accent w-10 h-10" /> Dampak Program
            </h4>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-muted">
                <span className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-muted" />
                <h5 className="font-black text-muted-foreground text-xs uppercase tracking-widest mb-2">Sebelum Program</h5>
                <p className="text-muted-foreground italic font-medium">Penumpukan sampah plastik tak terkendali di area pemukiman dan lahan pertanian.</p>
              </div>
              <div className="relative pl-8 border-l-4 border-accent">
                <span className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-accent animate-ping" />
                <span className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-accent" />
                <h5 className="font-black text-accent text-xs uppercase tracking-widest mb-2">Setelah Program</h5>
                <p className="text-primary font-bold">Limbah plastik terkonversi menjadi bahan bakar cair bernilai ekonomi tinggi untuk UMKM.</p>
              </div>
            </div>
          </div>
          <div className="bg-accent p-12 rounded-[3rem] shadow-xl flex flex-col justify-center text-primary group hover-lift">
            <h4 className="text-4xl font-headline font-bold mb-8 italic">Konklusi Tim</h4>
            <p className="text-xl font-medium leading-relaxed">
              "Mesin pirolisis ini bukan sekadar alat, melainkan simbol perlawanan kami terhadap pencemaran. Kami ingin mewariskan Pandanrejo yang lebih bersih untuk generasi mendatang."
            </p>
            <div className="mt-10 pt-8 border-t border-primary/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent font-black">5</div>
              <span className="font-bold uppercase tracking-widest text-sm">Kelompok 5 Unmer Malang</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
