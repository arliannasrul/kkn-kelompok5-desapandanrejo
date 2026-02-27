
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { User, Users, GraduationCap, Briefcase, Camera, Coffee, Wrench, Mic2, Heart } from "lucide-react";

interface Member {
  name: string;
  role: string;
  isKoord?: boolean;
}

interface Division {
  title: string;
  icon: React.ReactNode;
  members: Member[];
}

export function Organization() {
  const dpl = { name: "Almer Rasyid, S.AB., M.AB", role: "Dosen Pembimbing Lapangan" };
  
  const bph: Member[] = [
    { name: "Arwin Danga Renya", role: "Koordinator Desa (Ketua)" },
    { name: "Anma Santya Putri", role: "Sekretaris" },
    { name: "Aretha Altakezia", role: "Bendahara" },
  ];

  const divisions: Division[] = [
    {
      title: "Sie Acara",
      icon: <Mic2 className="w-4 h-4" />,
      members: [
        { name: "Annisa Nuur A.M", role: "Koordinator", isKoord: true },
        { name: "Anggie Yunika V.", role: "Anggota" },
      ]
    },
    {
      title: "Sie Humas",
      icon: <Users className="w-4 h-4" />,
      members: [
        { name: "Arya Dewangga", role: "Koordinator", isKoord: true },
        { name: "Anisa Putri Nur A.", role: "Anggota" },
      ]
    },
    {
      title: "Sie PDD",
      icon: <Camera className="w-4 h-4" />,
      members: [
        { name: "Arlian Nasrul R.", role: "Koordinator", isKoord: true },
        { name: "Apbrarin Nusantari", role: "Anggota" },
      ]
    },
    {
      title: "Sie Konsumsi",
      icon: <Coffee className="w-4 h-4" />,
      members: [
        { name: "Arin Eki Yunia", role: "Koordinator", isKoord: true },
        { name: "Aprilisa Wulandari", role: "Anggota" },
      ]
    },
    {
      title: "Sie Perlengkapan",
      icon: <Wrench className="w-4 h-4" />,
      members: [
        { name: "Ardian Gefi Algifari", role: "Koordinator", isKoord: true },
        { name: "Aranda Bimantara", role: "Anggota" },
        { name: "Antonius Dwi S.", role: "Anggota" },
        { name: "Dewi Wardani", role: "Anggota" },
        { name: "Anggreni Kahi A.", role: "Anggota" },
        { name: "Antonio Dwi A.", role: "Anggota" },
        { name: "Anselmus Rama Liko S.", role: "Anggota" },
        { name: "Damianus Gordon T.L.", role: "Anggota" },
        { name: "Aren Retang Mila A.", role: "Anggota" },
        { name: "Arnoldus Ferdinando", role: "Anggota" },
      ]
    }
  ];

  const MemberCard = ({ member, index, small = false }: { member: Member | {name: string, role: string}, index: number, small?: boolean }) => {
    const imageIdx = (index % 3) + 1;
    const memberImage = PlaceHolderImages.find(img => img.id === `member-${imageIdx}`);
    
    return (
      <div className="flex flex-col items-center text-center group">
        <div className={`relative ${small ? 'w-20 h-20' : 'w-24 h-24'} mb-3 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-accent group-hover:shadow-glow transition-all duration-500`}>
          {memberImage?.imageUrl && (
            <Image
              src={memberImage.imageUrl}
              alt={member.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              data-ai-hint="student portrait"
            />
          )}
        </div>
        <h4 className={`${small ? 'text-xs' : 'text-sm'} font-bold text-primary leading-tight group-hover:text-accent transition-colors`}>{member.name}</h4>
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
          {('isKoord' in member && member.isKoord) ? <span className="text-accent font-bold">Koordinator</span> : member.role}
        </p>
      </div>
    );
  };

  return (
    <section id="organization" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-accent text-accent mb-4 px-4 py-1">Struktur Tim</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Penggerak Perubahan</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Sinergi kelompok 5 Universitas Merdeka Malang untuk Desa Pandanrejo.</p>
        </div>

        {/* DPL Section */}
        <div className="mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6 text-accent">
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold text-sm tracking-widest uppercase">Dosen Pembimbing Lapangan</span>
          </div>
          <div className="bg-secondary/30 p-8 rounded-[2rem] border border-primary/10 hover:border-accent/30 transition-all group">
            <MemberCard member={dpl} index={0} />
          </div>
        </div>

        {/* BPH Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-primary/20" />
            <div className="inline-flex items-center gap-2 text-primary">
              <Briefcase className="w-5 h-5" />
              <span className="font-bold text-sm tracking-widest uppercase">Badan Pengurus Harian</span>
            </div>
            <div className="h-px w-12 bg-primary/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {bph.map((member, i) => (
              <MemberCard key={i} member={member} index={i + 1} />
            ))}
          </div>
        </div>

        {/* Divisions Section */}
        <div className="space-y-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <Users className="w-5 h-5" />
              <span className="font-bold text-sm tracking-widest uppercase">Divisi Pelaksana</span>
            </div>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {divisions.slice(0, 4).map((div, i) => (
              <div key={i} className="space-y-8 p-6 rounded-3xl bg-secondary/20 border border-transparent hover:border-accent/20 transition-all">
                <div className="flex items-center gap-3 text-primary border-b border-primary/10 pb-4">
                  <div className="p-2 bg-primary text-white rounded-lg">{div.icon}</div>
                  <h3 className="font-headline font-bold text-lg">{div.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {div.members.map((m, idx) => (
                    <MemberCard key={idx} member={m} index={idx + i + 5} small />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Large Perlengkapan Division */}
          <div className="mt-16 p-8 md:p-12 rounded-[3rem] bg-secondary/30 border border-primary/5">
             <div className="flex items-center gap-4 text-primary mb-10 border-b border-primary/10 pb-6">
                <div className="p-3 bg-primary text-white rounded-2xl">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-2xl">Sie Perlengkapan</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Teknis, Kebersihan & Logistik</p>
                </div>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-6">
                {divisions[4].members.map((m, idx) => (
                  <MemberCard key={idx} member={m} index={idx + 10} small />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
