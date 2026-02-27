
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export function Organization() {
  const members = [
    { name: "Andi Saputra", role: "Ketua Kelompok", imageId: "member-1" },
    { name: "Siti Aminah", role: "Sekretaris", imageId: "member-2" },
    { name: "Budi Raharjo", role: "Bendahara", imageId: "member-3" },
    { name: "Rina Kartika", role: "Divisi Program", imageId: "member-1" },
    { name: "Deni Prasetyo", role: "Divisi Dokumentasi", imageId: "member-2" },
    { name: "Eka Putri", role: "Divisi Humas", imageId: "member-3" },
  ];

  return (
    <section id="organization" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Struktur Organisasi</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-primary">Kelompok 5 KKN Unmer</h3>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => {
            const memberImage = PlaceHolderImages.find(img => img.id === member.imageId);
            return (
              <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-none bg-white">
                <CardContent className="p-0 relative aspect-square">
                  <Image
                    src={memberImage?.imageUrl || ''}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint="professional portrait"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                    <h4 className="text-2xl font-bold font-headline">{member.name}</h4>
                    <p className="text-accent font-medium">{member.role}</p>
                  </div>
                </CardContent>
                <div className="p-6 text-center group-hover:hidden">
                    <h4 className="text-xl font-bold font-headline text-primary">{member.name}</h4>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
