
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Sparkles, Heart } from "lucide-react";

export function MomentsGallery() {
  const moments = [
    { id: 1, imageId: "moment-1", title: "Kebersamaan di Balai Desa", category: "Team Work" },
    { id: 2, imageId: "moment-2", title: "Fabrikasi Reaktor Pirolisis", category: "Innovation" },
    { id: 3, imageId: "moment-3", title: "Sharing & Briefing", category: "Coordination" },
    { id: 4, imageId: "moment-4", title: "Interaksi dengan Warga", category: "Community" },
    { id: 5, imageId: "moment-5", title: "Senja Pandanrejo", category: "Nature" },
    { id: 6, imageId: "moment-6", title: "Makan Malam Kelompok", category: "Life" },
  ];

  return (
    <section id="moments" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-accent/20">
            <Camera className="w-3 h-3 text-accent" />
            Dokumentasi Visual
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-headline text-primary mb-6 tracking-tight">
            Our Best <span className="text-accent italic">Moments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Setiap detik yang kami habiskan di Desa Pandanrejo adalah cerita yang tak terlupakan. 
            Berikut adalah cuplikan kenangan terbaik kami.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {moments.map((moment, idx) => {
            const momentImg = PlaceHolderImages.find(img => img.id === moment.imageId);
            return (
              <Dialog key={moment.id}>
                <DialogTrigger asChild>
                  <div 
                    className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-zoom-in hover-lift border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <Image
                      src={momentImg?.imageUrl || ''}
                      alt={moment.title}
                      width={800}
                      height={600}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">{moment.category}</span>
                      </div>
                      <h4 className="text-white font-headline text-xl font-bold">{moment.title}</h4>
                      <div className="mt-4 flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                         </div>
                         <span className="text-white/60 text-[10px] font-medium">Capture by Team Documentation</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-black/90 shadow-none">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={momentImg?.imageUrl || ''}
                      alt={moment.title}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                       <h3 className="text-white font-headline text-2xl font-bold mb-1">{moment.title}</h3>
                       <p className="text-white/60 text-sm">Dokumentasi KKN Kelompok 5 Unmer Malang di Desa Pandanrejo.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-accent to-primary">
            <div className="bg-background px-8 py-4 rounded-full flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                       <Image src={PlaceHolderImages.find(img => img.id === `member-${i}`)?.imageUrl || ''} alt="Team" width={40} height={40} className="object-cover" />
                    </div>
                  ))}
               </div>
               <p className="text-sm font-bold text-primary">Dibuat dengan <Heart className="inline-block w-4 h-4 text-accent fill-accent mx-1" /> oleh Tim Dokumentasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
