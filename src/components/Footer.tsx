
"use client"

import React from 'react';
import { Trees, Mail, Instagram, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Trees className="w-10 h-10 text-accent" />
              <span className="font-headline text-2xl font-bold tracking-tight">KKN Kelompok 5</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8 font-body leading-relaxed">
              Program Kuliah Kerja Nyata Universitas Merdeka Malang. 
              Fokus pada pengembangan ekonomi desa, kesehatan masyarakat, dan kelestarian lingkungan di Desa Pandanrejo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-accent hover:text-primary transition-colors rounded-full"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/10 hover:bg-accent hover:text-primary transition-colors rounded-full"><Mail className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/10 hover:bg-accent hover:text-primary transition-colors rounded-full"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-6 font-headline">Tautan Cepat</h5>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-accent transition-colors">Beranda</a></li>
              <li><a href="#organization" className="hover:text-accent transition-colors">Struktur Organisasi</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">Program Kerja</a></li>
              <li><a href="#archive" className="hover:text-accent transition-colors">Arsip Digital</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-6 font-headline">Kontak Desa</h5>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Kecamatan Wagir, Kabupaten Malang, Jawa Timur</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>kkn5unmer@student.unmer.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2024 Kelompok 5 KKN Unmer Malang. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
