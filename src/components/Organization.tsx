
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Organization() {
  const dpl = { name: "Almer Rasyid, S.AB., M.AB", role: "Dosen Pembimbing Lapangan (DPL)" };
  
  const members = [
    { name: "Arya Dewangga", role: "Anggota" },
    { name: "Anma Santya Putri", role: "Anggota" },
    { name: "Aretha Altakezia", role: "Anggota" },
    { name: "Ardian Gefi Algifari", role: "Anggota" },
    { name: "Anisa Putri Nur A.", role: "Anggota" },
    { name: "Arin Eki Yunia", role: "Anggota" },
    { name: "Aprilisa Wulandari", role: "Anggota" },
    { name: "Arlian Nasrul R.", role: "Anggota" },
    { name: "Aranda Bimantara", role: "Anggota" },
    { name: "Apbrarin Nusantari", role: "Anggota" },
    { name: "Annisa Nuur A.M", role: "Anggota" },
    { name: "Anggie Yunika V.", role: "Anggota" },
    { name: "Antonius Dwi S.", role: "Anggota" },
    { name: "Dewi Wardani", role: "Anggota" },
    { name: "Anggreni Kahi A.", role: "Anggota" },
    { name: "Antonio Dwi A.", role: "Anggota" },
    { name: "Anselmus Rama Liko S.", role: "Anggota" },
    { name: "Damianus Gordon T.L.", role: "Anggota" },
    { name: "Aren Retang Mila A.", role: "Anggota" },
    { name: "Arwin Danga Renya", role: "Anggota" },
    { name: "Arnoldus Ferdinando", role: "Anggota" },
  ];

  return (
    <section id="organization" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Tim Pelaksana</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary">KKN Kelompok 5 Unmer Malang</h3>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        {/* DPL Card */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="bg-primary text-white text-center p-8 rounded-3xl overflow-hidden relative">
            <div className="relative z-10">
              <Badge variant="secondary" className="mb-4 bg-accent text-primary border-none">DPL</Badge>
              <h4 className="text-2xl font-bold font-headline mb-2">{dpl.name}</h4>
              <p className="text-white/70 text-sm">{dpl.role}</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Card>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {members.map((member, idx) => {
            // Using a rotating set of placeholder images to avoid exhaustion
            const imageIdx = (idx % 3) + 1;
            const memberImage = PlaceHolderImages.find(img => img.id === `member-${imageIdx}`);
            
            return (
              <Card key={idx} className="group overflow-hidden hover:shadow-lg transition-all border-none bg-white">
                <CardContent className="p-0 relative aspect-[4/5]">
                  <Image
                    src={memberImage?.imageUrl || ''}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    data-ai-hint="student portrait"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h4 className="text-sm font-bold font-headline">{member.name}</h4>
                    <p className="text-[10px] text-accent font-medium uppercase tracking-wider">{member.role}</p>
                  </div>
                </CardContent>
                <div className="p-3 text-center">
                  <h4 className="text-xs font-bold text-primary truncate">{member.name}</h4>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
