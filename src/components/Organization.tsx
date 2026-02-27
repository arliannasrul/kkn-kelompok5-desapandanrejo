
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="organization" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Struktur Organisasi</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary">KKN Kelompok 5 Unmer Malang</h3>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        {/* DPL Section */}
        <div className="flex justify-center mb-20">
          <div className="text-center group">
            <div className="relative w-32 h-32 mx-auto mb-4 p-1 rounded-full border-4 border-primary/20 group-hover:border-accent transition-colors duration-500 overflow-hidden">
              <Image
                src={PlaceHolderImages.find(img => img.id === 'member-1')?.imageUrl || ''}
                alt={dpl.name}
                fill
                className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <Badge className="bg-primary text-white mb-2">DPL</Badge>
            <h4 className="text-xl font-bold font-headline text-primary">{dpl.name}</h4>
            <p className="text-muted-foreground text-xs uppercase tracking-widest">{dpl.role}</p>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6">
          {members.map((member, idx) => {
            const imageIdx = (idx % 3) + 1;
            const memberImage = PlaceHolderImages.find(img => img.id === `member-${imageIdx}`);
            
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-accent transition-all duration-300 shadow-sm">
                  <Image
                    src={memberImage?.imageUrl || ''}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    data-ai-hint="student portrait"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-primary leading-tight px-2">{member.name}</h4>
                  <p className="text-[10px] text-accent font-bold uppercase tracking-tighter opacity-80 group-hover:opacity-100">
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
