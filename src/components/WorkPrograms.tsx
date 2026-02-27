
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Target, Settings, Info, CheckCircle2, AlertCircle } from "lucide-react";

export function WorkPrograms() {
  const methods = [
    { title: "Observasi", desc: "Kondisi pengelolaan sampah di desa." },
    { title: "Perancangan", desc: "Prototipe mesin pirolisis." },
    { title: "Pembuatan", desc: "Proses perakitan mesin pirolisis." },
    { title: "Pemilahan", desc: "Pemisahan jenis sampah plastik." },
    { title: "Pelatihan", desc: "Bersama Karang Taruna RW 03." },
  ];

  const reasons = [
    "Plastik butuh ratusan tahun untuk terurai",
    "Plastik yang terbakar menghasilkan racun berbahaya",
    "Sampah plastik mencemari tanah dan udara",
    "Hewan bisa menelan plastik dan mati"
  ];

  const pirolisisImg = PlaceHolderImages.find(img => img.id === 'work-program-2');

  return (
    <section id="programs" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Program Utama</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-6">Inovasi Teknologi Pirolisis</h3>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Latar Belakang */}
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <Info className="w-6 h-6 text-accent" />
                <CardTitle className="font-headline text-xl">Latar Belakang</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-8">
              <p className="text-muted-foreground leading-relaxed">
                Pengelolaan sampah di desa saat ini masih dilakukan dengan cara ditumpuk dan belum memiliki sistem yang terpadu. Sampah rumah tangga, khususnya sampah plastik, belum dikelola secara optimal sehingga berpotensi menimbulkan pencemaran lingkungan, bau tidak sedap, serta mengganggu kesehatan masyarakat.
              </p>
            </CardContent>
          </Card>

          {/* Tujuan */}
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-accent" />
                <CardTitle className="font-headline text-xl">Tujuan Program</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-8">
              <ul className="space-y-3">
                {[
                  "Mengurangi penumpukan sampah plastik di lingkungan desa.",
                  "Menciptakan sistem pengelolaan sampah yang terpadu.",
                  "Mengubah sampah plastik menjadi bahan bakar bernilai ekonomi.",
                  "Meningkatkan kesadaran masyarakat tentang lingkungan."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Metode Pelaksanaan */}
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-accent" />
                <CardTitle className="font-headline text-xl">Metode Pelaksanaan</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-8">
              <div className="space-y-4">
                {methods.map((m, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-secondary/20 rounded-xl">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-sm">{m.title}</h5>
                      <p className="text-xs text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mengapa Harus Mengurangi Sampah Plastik */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-accent/20 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h4 className="text-3xl font-headline font-bold text-primary mb-6">Mengapa Harus Mengurangi Sampah Plastik?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-2xl border border-accent/10">
                    <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-primary/80">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden">
               <Image 
                src={pirolisisImg?.imageUrl || ''} 
                alt="Pengolahan Sampah" 
                fill 
                className="object-cover"
                data-ai-hint="waste management plastic"
               />
            </div>
          </div>
        </div>

        {/* Hasil & Kesimpulan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary text-white p-10 rounded-3xl">
            <h4 className="text-2xl font-headline font-bold mb-6 flex items-center gap-2">
              <Sprout className="text-accent" /> Hasil Program
            </h4>
            <div className="grid grid-cols-2 gap-6 mb-8 text-center">
              <div className="space-y-3">
                <div className="text-accent font-bold">SEBELUM</div>
                <p className="text-xs text-white/70 italic">Sampah plastik masih ditumpuk dan belum ada sistem pengelolaan terpadu.</p>
              </div>
              <div className="space-y-3">
                <div className="text-accent font-bold">SESUDAH</div>
                <p className="text-xs text-white/70 italic">Dihasilkannya bahan bakar cair dari proses pirolisis sebagai nilai tambah.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-border shadow-sm">
            <h4 className="text-2xl font-headline font-bold text-primary mb-6">Kesimpulan</h4>
            <p className="text-muted-foreground leading-relaxed italic">
              "Program penyulingan sampah plastik menjadi bahan bakar melalui mesin pirolisis merupakan solusi inovatif dalam mengatasi permasalahan penumpukan sampah di desa. Program ini tidak hanya membantu mengurangi volume sampah, tetapi juga meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah yang ramah lingkungan."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
