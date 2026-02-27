"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export function Organization() {
  const dpl = { name: "Almer Rasyid, S.AB., M.AB", role: "Dosen Pembimbing Lapangan (DPL)" };
  
  const members = [
    { name: "Arwin Danga Renya", role: "Koordinator Desa" },
    { name: "Anma Santya Putri", role: "Sekretaris" },
    { name: "Aretha Altakezia", role: "Bendahara" },
    { name: "Arya Dewangga", role: "Divisi Humas" },
    { name: "Anisa Putri Nur A.", role: "Divisi Humas" },
    { name: "Ardian Gefi Algifari", role: "Divisi Peralatan" },
    { name: "Aranda Bimantara", role: "Divisi Peralatan" },
    { name: "Arin Eki Yunia", role: "Divisi Konsumsi" },
    { name: "Aprilisa Wulandari", role: "Divisi Konsumsi" },
    { name: "Arlian Nasrul R.", role: "Divisi Dokumentasi" },
    { name: "Apbrarin Nusantari", role: "Divisi Dokumentasi" },
    { name: "Annisa Nuur A.M", role: "Divisi Acara" },
    { name: "Anggie Yunika V.", role: "Divisi Acara" },
    { name: "Antonius Dwi S.", role: "Divisi Teknis" },
    { name: "Dewi Wardani", role: "Divisi Teknis" },
    { name: "Anggreni Kahi A.", role: "Divisi Kebersihan" },
    { name: "Antonio Dwi A.", role: "Divisi Kebersihan" },
    { name: "Anselmus Rama Liko S.", role: "Anggota" },
    { name: "Damianus Gordon T.L.", role: "Anggota" },
    { name: "Aren Retang Mila A.", role: "Anggota" },
    { name: "Arnoldus Ferdinando", role: "Anggota" },
  ];

  return (
    <section id="organization" className="py-32 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.4em] mb-4">Penggerak Perubahan</h2>
          <h3 className="text-5xl md:text-7xl font-bold font-headline mb-8 text-primary">Struktur Organisasi</h3>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full shadow-sm" />
        </div>

        {/* DPL Section */}
        <div className="flex justify-center mb-24">
          <div className="text-center group">
            <div className="relative w-48 h-48 mx-auto mb-6 p-2 rounded-full border-4 border-primary/10 group-hover:border-accent transition-all duration-700 overflow-hidden shadow-2xl">
              <Image
                src={PlaceHolderImages.find(img => img.id === 'member-1')?.imageUrl || ''}
                alt={dpl.name}
                fill
                className="object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="inline-flex items-center gap-2 mb-4">
               <div className="h-px w-8 bg-accent/40" />
               <Badge className="bg-primary text-white text-xs py-1 px-4 rounded-full">DPL KKN</Badge>
               <div className="h-px w-8 bg-accent/40" />
            </div>
            <h4 className="text-3xl font-bold font-headline text-primary mb-1 tracking-tight">{dpl.name}</h4>
            <p className="text-accent font-bold text-xs uppercase tracking-[0.3em]">{dpl.role}</p>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-16 gap-x-8">
          {members.map((member, idx) => {
            const imageIdx = (idx % 3) + 1;
            const memberImage = PlaceHolderImages.find(img => img.id === `member-${imageIdx}`);
            
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="relative w-24 h-24 mb-5 rounded-full overflow-hidden border-2 border-border group-hover:border-accent group-hover:shadow-glow transition-all duration-500 shadow-sm ring-4 ring-transparent group-hover:ring-accent/10">
                  <Image
                    src={memberImage?.imageUrl || ''}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    data-ai-hint="student portrait"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1 transform group-hover:-translate-y-1 transition-transform">
                  <h4 className="text-sm font-black text-primary leading-tight px-1 group-hover:text-accent transition-colors">{member.name}</h4>
                  <div className="h-0.5 w-0 bg-accent mx-auto group-hover:w-full transition-all duration-300" />
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest pt-1">
                    {member.role}
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
