
"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Briefcase, Camera, Coffee, Wrench, Mic2, Instagram } from "lucide-react";

interface Member {
  name: string;
  role: string;
  isKoord?: boolean;
  instagram?: string;
  imageId: string;
}

interface Division {
  title: string;
  icon: React.ReactNode;
  members: Member[];
}

export function Organization() {
  const dpl: Member = { 
    name: "Almer Rasyid, S.AB., M.AB", 
    role: "Dosen Pembimbing Lapangan",
    instagram: "@almerasyid",
    imageId: "member-dpl"
  };
  
  const bph: Member[] = [
    { name: "Arwin Danga Renya", role: "Ketua (Kordes)", instagram: "@arwindanga", imageId: "member-1" },
    { name: "Anma Santya Putri", role: "Sekretaris", instagram: "@anmasantya", imageId: "member-2" },
    { name: "Aretha Altakezia", role: "Bendahara", instagram: "@arethaalt", imageId: "member-3" },
  ];

  const divisions: Division[] = [
    {
      title: "Sie Acara",
      icon: <Mic2 className="w-4 h-4" />,
      members: [
        { name: "Annisa Nuur A.M", role: "Koordinator", isKoord: true, instagram: "@annisaan", imageId: "member-4" },
        { name: "Anggie Yunika V.", role: "Anggota", instagram: "@anggiey", imageId: "member-5" },
      ]
    },
    {
      title: "Sie Humas",
      icon: <Users className="w-4 h-4" />,
      members: [
        { name: "Arya Dewangga", role: "Koordinator", isKoord: true, instagram: "@aryadew", imageId: "member-6" },
        { name: "Anisa Putri Nur A.", role: "Anggota", instagram: "@anisaputri", imageId: "member-7" },
      ]
    },
    {
      title: "Sie PDD",
      icon: <Camera className="w-4 h-4" />,
      members: [
        { name: "Arlian Nasrul R.", role: "Koordinator", isKoord: true, instagram: "@arliannas", imageId: "member-8" },
        { name: "Apbrarin Nusantari", role: "Anggota", instagram: "@apbrarin", imageId: "member-9" },
      ]
    },
    {
      title: "Sie Konsumsi",
      icon: <Coffee className="w-4 h-4" />,
      members: [
        { name: "Arin Eki Yunia", role: "Koordinator", isKoord: true, instagram: "@arineki", imageId: "member-10" },
        { name: "Aprilisa Wulandari", role: "Anggota", instagram: "@aprilisaw", imageId: "member-11" },
      ]
    },
    {
      title: "Sie Perlengkapan",
      icon: <Wrench className="w-4 h-4" />,
      members: [
        { name: "Ardian Gefi Algifari", role: "Koordinator", isKoord: true, instagram: "@ardiang", imageId: "member-12" },
        { name: "Aranda Bimantara", role: "Anggota", instagram: "@arandab", imageId: "member-13" },
        { name: "Antonius Dwi S.", role: "Anggota", instagram: "@antoniuss", imageId: "member-14" },
        { name: "Dewi Wardani", role: "Anggota", instagram: "@dewiwar", imageId: "member-15" },
        { name: "Anggreni Kahi A.", role: "Anggota", instagram: "@anggrenik", imageId: "member-16" },
        { name: "Antonio Dwi A.", role: "Anggota", instagram: "@antonioa", imageId: "member-17" },
        { name: "Anselmus Rama Liko S.", role: "Anggota", instagram: "@anselmusr", imageId: "member-18" },
        { name: "Damianus Gordon T.L.", role: "Anggota", instagram: "@damianusg", imageId: "member-19" },
        { name: "Aren Retang Mila A.", role: "Anggota", instagram: "@arenretang", imageId: "member-20" },
        { name: "Arnoldus Ferdinando", role: "Anggota", instagram: "@arnoldusf", imageId: "member-21" },
      ]
    }
  ];

  const MemberCard = ({ member, small = false }: { member: Member, small?: boolean }) => {
    const memberImage = PlaceHolderImages.find(img => img.id === member.imageId);
    
    return (
      <div className="flex flex-col items-center text-center group">
        <div className={`relative ${small ? 'w-16 h-16' : 'w-24 h-24'} mb-3 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-accent group-hover:shadow-glow transition-all duration-500`}>
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
        <h4 className={`${small ? 'text-[10px]' : 'text-sm'} font-bold text-primary leading-tight group-hover:text-accent transition-colors`}>{member.name}</h4>
        <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">
          {member.isKoord ? <span className="text-accent font-bold">Koordinator</span> : member.role}
        </p>
        {member.instagram && (
          <a 
            href={`https://instagram.com/${member.instagram.replace('@', '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-1 text-[9px] font-bold text-accent/60 hover:text-accent transition-colors"
          >
            <Instagram className="w-2.5 h-2.5" />
            {member.instagram}
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="organization" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-accent text-accent mb-4 px-4 py-1">Struktur Tim</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Penggerak Perubahan</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Sinergi 21 Mahasiswa & 1 DPL Universitas Merdeka Malang untuk Desa Pandanrejo.</p>
        </div>

        {/* DPL Section */}
        <div className="mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6 text-accent">
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold text-sm tracking-widest uppercase">Dosen Pembimbing Lapangan</span>
          </div>
          <div className="bg-secondary/30 p-8 rounded-[2rem] border border-primary/10 hover:border-accent/30 transition-all group">
            <MemberCard member={dpl} />
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
              <MemberCard key={i} member={member} />
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
                    <MemberCard key={idx} member={m} small />
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
                  <MemberCard key={idx} member={m} small />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
