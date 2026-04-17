
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Camera, Sparkles, Heart } from "lucide-react";

const MOMENTS = [
  // Images from /foto folder (9)
  { id: 1, url: "/foto/pembukaan1.JPG", title: "Pembukaan KKN 1", category: "Community" },
  { id: 2, url: "/foto/pembukaan2.JPG", title: "Pembukaan KKN 2", category: "Community" },
  { id: 3, url: "/foto/pembukaan3.JPG", title: "Pembukaan KKN 3", category: "Community" },
  { id: 4, url: "/foto/Serah%20terima%20alat.JPG", title: "Serah Terima Alat", category: "Innovation" },
  { id: 5, url: "/foto/serah%20terima%20alat2.JPG", title: "Implementasi Teknologi", category: "Innovation" },
  { id: 6, url: "/foto/sosialisasi%20mesin%20dengan%20warga.jpg", title: "Sosialisasi Warga", category: "Community" },
  { id: 7, url: "/foto/sosialisasid%20mesin%20dengan%20warga%202.jpg", title: "Diskusi Publik", category: "Coordination" },
  { id: 8, url: "/foto/makrab%20perpisahan%20karang%20taruna.jpg", title: "Makrab Karang Taruna", category: "Life" },
  { id: 9, url: "/foto/20260215_100813.jpg", title: "Momen Kegiatan", category: "Team Work" },
  
  // Images from /best moments folder (30)
  { id: 10, url: "/best%20moments/photo_2026-04-17_08-55-16.jpg", title: "Dokumentasi KKN", category: "Documentation" },
  { id: 11, url: "/best%20moments/photo_2026-04-17_09-10-03.jpg", title: "Kebersamaan Tim", category: "Team Work" },
  { id: 12, url: "/best%20moments/photo_2026-04-17_09-10-05.jpg", title: "Kegiatan Harian", category: "Life" },
  { id: 13, url: "/best%20moments/photo_2026-04-17_09-10-09.jpg", title: "Momen Terbaik", category: "Nature" },
  { id: 14, url: "/best%20moments/photo_2026-04-17_09-10-11.jpg", title: "Interaksi Sosial", category: "Community" },
  { id: 15, url: "/best%20moments/photo_2026-04-17_09-10-13.jpg", title: "Kerja Lapangan", category: "Innovation" },
  { id: 16, url: "/best%20moments/photo_2026-04-17_09-10-14.jpg", title: "Keakraban Warga", category: "Community" },
  { id: 17, url: "/best%20moments/photo_2026-04-17_09-10-18.jpg", title: "Rapat Koordinasi", category: "Coordination" },
  { id: 18, url: "/best%20moments/photo_2026-04-17_09-10-21.jpg", title: "Persiapan Alat", category: "Innovation" },
  { id: 19, url: "/best%20moments/photo_2026-04-17_09-10-22.jpg", title: "Canda Tawa", category: "Life" },
  { id: 20, url: "/best%20moments/photo_2026-04-17_09-10-23.jpg", title: "Kegiatan Pagi", category: "Nature" },
  { id: 21, url: "/best%20moments/photo_2026-04-17_09-10-27.jpg", title: "Momen KKN", category: "Documentation" },
  { id: 22, url: "/best%20moments/photo_2026-04-17_09-10-29.jpg", title: "Potret Desa", category: "Nature" },
  { id: 23, url: "/best%20moments/photo_2026-04-17_09-10-32.jpg", title: "Penyuluhan", category: "Community" },
  { id: 24, url: "/best%20moments/photo_2026-04-17_09-10-34.jpg", title: "Workshop Tim", category: "Innovation" },
  { id: 25, url: "/best%20moments/photo_2026-04-17_09-10-35.jpg", title: "Senyum Bahagia", category: "Life" },
  { id: 26, url: "/best%20moments/photo_2026-04-17_09-10-37.jpg", title: "Kegiatan Bersama", category: "Team Work" },
  { id: 27, url: "/best%20moments/photo_2026-04-17_09-10-39.jpg", title: "Sinergi Tim", category: "Coordination" },
  { id: 28, url: "/best%20moments/photo_2026-04-17_09-10-40.jpg", title: "Suasana Desa", category: "Nature" },
  { id: 29, url: "/best%20moments/photo_2026-04-17_09-10-42.jpg", title: "Program Kerja", category: "Innovation" },
  { id: 30, url: "/best%20moments/photo_2026-04-17_09-10-44.jpg", title: "Momen Berharga", category: "Life" },
  { id: 31, url: "/best%20moments/photo_2026-04-17_09-10-46.jpg", title: "Kebersamaan", category: "Team Work" },
  { id: 32, url: "/best%20moments/photo_2026-04-17_09-10-47.jpg", title: "Aktivitas KKN", category: "Documentation" },
  { id: 33, url: "/best%20moments/photo_2026-04-17_09-10-48.jpg", title: "Kerja Keras Tim", category: "Innovation" },
  { id: 34, url: "/best%20moments/photo_2026-04-17_09-10-50.jpg", title: "Potret Kenangan", category: "Life" },
  { id: 35, url: "/best%20moments/photo_2026-04-17_09-10-51.jpg", title: "Diskusi Sore", category: "Coordination" },
  { id: 36, url: "/best%20moments/photo_2026-04-17_09-10-52.jpg", title: "Panorama Desa", category: "Nature" },
  { id: 37, url: "/best%20moments/photo_2026-04-17_09-10-54.jpg", title: "Kegiatan Lapangan", category: "Community" },
  { id: 38, url: "/best%20moments/photo_2026-04-17_09-10-55.jpg", title: "Momen Indah", category: "Life" },
  { id: 39, url: "/best%20moments/photo_2026-04-17_09-10-56.jpg", title: "Dokumentasi Akhir", category: "Documentation" },
  { id: 40, url: "/best%20moments/20260208_084906%280%29.jpg", title: "Persiapan Pagi", category: "Team Work" },
  { id: 41, url: "/best%20moments/20260208_101705.jpg", title: "Kegiatan Inti", category: "Innovation" },
  { id: 42, url: "/best%20moments/20260208_103041.jpg", title: "Momen Spesial", category: "Life" },
  { id: 43, url: "/best%20moments/20260208_110359.jpg", title: "Diskusi Hangat", category: "Coordination" },
  { id: 44, url: "/best%20moments/20260212_153444%20%281%29.jpg", title: "Kunjungan Lapangan", category: "Community" },
  { id: 45, url: "/best%20moments/20260212_153444.jpg", title: "Survei Desa", category: "Nature" },
  { id: 46, url: "/best%20moments/IMG_20260207_163237.jpg", title: "Dokumentasi Tim", category: "Documentation" },
  { id: 47, url: "/best%20moments/IMG_20260209_093657.jpg", title: "Aktivitas Bersama", category: "Team Work" },
  { id: 48, url: "/best%20moments/IMG_20260220_155641.jpg", title: "Kenangan KKN", category: "Life" }
];

export function MomentsGallery() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <div className="py-32 bg-background min-h-[500px] flex items-center justify-center">
       <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

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
            Berikut adalah cuplikan kenangan terbaik kami selama masa pengabdian.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {MOMENTS.map((moment, idx) => {
            return (
              <Dialog key={moment.id}>
                <DialogTrigger asChild>
                  <div className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-zoom-in hover-lift border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 bg-muted">
                    <Image
                      src={moment.url}
                      alt={moment.title}
                      width={1200}
                      height={1200}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={idx < 12 ? "eager" : "lazy"}
                      priority={idx < 8}
                      className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
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
                      src={moment.url}
                      alt={moment.title}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                       <DialogTitle className="text-white font-headline text-2xl font-bold mb-1">{moment.title}</DialogTitle>
                       <DialogDescription className="text-white/60 text-sm">Dokumentasi KKN Kelompok 5 Unmer Malang di Desa Pandanrejo.</DialogDescription>
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
                  {[1, 2, 3].map(i => {
                    const memberImg = PlaceHolderImages.find(img => img.id === `member-${i}`);
                    if (!memberImg?.imageUrl) return null;
                    return (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted relative">
                        <Image 
                          src={memberImg.imageUrl} 
                          alt="Team" 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                    );
                  })}
               </div>
               <p className="text-sm font-bold text-primary">Dibuat dengan <Heart className="inline-block w-4 h-4 text-accent fill-accent mx-1" /> oleh Tim Dokumentasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
