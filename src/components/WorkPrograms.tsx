"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Target, Settings, Info, CheckCircle2, AlertCircle, Zap } from "lucide-react";

export function WorkPrograms() {
  const methods = [
    { title: "Observasi", desc: "Observasi kondisi pengelolaan sampah di desa." },
    { title: "Perancangan", desc: "Perancangan Prototipe Mesin pirolisis." },
    { title: "Pembuatan", desc: "Proses Pembuatan Mesin Pirolisis." },
    { title: "Pemilahan", desc: "Pemilahan Sampah Plastik." },
    { title: "Pelatihan", desc: "Pelatihan Dengan Karang Taruna RW 03." },
  ];

  const reasons = [
    "Plastik butuh ratusan tahun untuk terurai",
    "Plastik yang terbakar menghasilkan racun berbahaya bagi kesehatan",
    "Sampah plastik bisa mencemari tanah dan udara",
    "Hewan bisa menelan plastik dan mati karena tersedak"
  ];

  const pirolisisImg = PlaceHolderImages.find(img => img.id === 'work-program-2');

  return (
    <section id="programs" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-4">Langkah Strategis</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-headline text-primary mb-6">Inovasi Teknologi Pirolisis</h3>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Latar Belakang */}
          <Card className="hover-lift border-none shadow-xl group overflow-hidden">
            <div className="h-2 w-full bg-primary group-hover:h-3 transition-all" />
            <CardHeader className="pt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <Info className="w-6 h-6" />
                </div>
                <CardTitle className="font-headline text-2xl text-primary">Latar Belakang</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Pengelolaan sampah di desa saat ini masih dilakukan dengan cara ditumpuk dan belum memiliki sistem pengelolaan yang terpadu. Sampah plastik berpotensi menimbulkan pencemaran lingkungan dan mengganggu kesehatan.
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
                <CardTitle className="font-headline text-2xl text-primary">Tujuan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Mengurangi penumpukan sampah plastik.",
                  "Menciptakan sistem pengelolaan sampah terpadu.",
                  "Mengubah sampah plastik menjadi bahan bakar.",
                  "Meningkatkan kesadaran masyarakat."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-primary/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Metode Pelaksanaan */}
          <Card className="hover-lift border-none shadow-xl group overflow-hidden">
            <div className="h-2 w-full bg-primary group-hover:h-3 transition-all" />
            <CardHeader className="pt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <Settings className="w-6 h-6" />
                </div>
                <CardTitle className="font-headline text-2xl text-primary">Metode Pelaksanaan</CardTitle>
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

        {/* Mengapa Harus Section */}
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden mb-20 group">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 group-hover:bg-white/10 transition-colors" />
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-8">
              <Badge className="bg-secondary text-primary font-bold px-6 py-2 text-sm rounded-full">Urgent Action</Badge>
              <h4 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight">
                MENGAPA HARUS <br/><span className="text-secondary italic">MENGURANGI SAMPAH PLASTIK?</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/20 transition-all">
                    <div className="p-2 bg-secondary rounded-xl text-primary">
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

        {/* Conclusion Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-primary/20 flex flex-col justify-between hover-lift">
            <h4 className="text-3xl font-headline font-bold text-primary mb-8 flex items-center gap-4">
              <Sprout className="text-primary w-10 h-10" /> Hasil & Kesimpulan
            </h4>
            <div className="space-y-10">
              <div className="relative pl-8 border-l-4 border-muted">
                <span className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-muted" />
                <h5 className="font-black text-muted-foreground text-xs uppercase tracking-widest mb-2">Sebelum</h5>
                <p className="text-muted-foreground italic font-medium mb-4">Sampah plastik masih ditumpuk dan belum ada pengelolaan terpadu.</p>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-sm grayscale opacity-70">
                  <Image 
                    src="/before%20after/before.jpg" 
                    alt="Kondisi Sebelum" 
                    fill 
                    className="object-cover object-[center_65%]" 
                  />
                </div>
              </div>
              <div className="relative pl-8 border-l-4 border-primary">
                <span className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-primary animate-ping" />
                <span className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-primary" />
                <h5 className="font-black text-primary text-xs uppercase tracking-widest mb-2">Sesudah</h5>
                <p className="text-primary font-bold mb-4">Dihasilkannya bahan bakar cair dari proses pirolisis sebagai nilai tambah sampah plastik.</p>
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 shadow-glow">
                  <Image 
                    src="/before%20after/after.jpg" 
                    alt="Kondisi Sesudah" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary p-12 rounded-[3rem] shadow-xl flex flex-col justify-center text-white group hover-lift">
            <h4 className="text-4xl font-headline font-bold mb-8 italic text-secondary">Kesimpulan</h4>
            <p className="text-xl font-medium leading-relaxed opacity-90">
              "Program penyulingan sampah plastik menjadi bahan bakar melalui mesin pirolisis merupakan solusi inovatif dalam mengatasi permasalahan penumpukan sampah di desa, sekaligus meningkatkan kesadaran masyarakat tentang pengelolaan sampah yang ramah lingkungan."
            </p>
            <div className="mt-10 pt-8 border-t border-white/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-black">5</div>
              <span className="font-bold uppercase tracking-widest text-sm text-secondary">Kelompok 5 Unmer Malang</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
