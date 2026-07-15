
"use client"

import React from 'react';
import Image from 'next/image';
import { Mail, Instagram, MapPin, Phone, Heart } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none" 
    className={className}
  >
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.02.53-.01 1.05.01 1.58.11 1.15.75 2.21 1.71 2.85.96.65 2.15.91 3.29.73 1.14-.15 2.15-.81 2.76-1.78.47-.72.69-1.59.67-2.45V.02z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-secondary p-1 overflow-hidden flex items-center justify-center">
                <Image src="/logo.webp" alt="Logo KKN" width={56} height={56} className="object-cover scale-150" />
              </div>
              <span className="font-headline text-2xl font-bold tracking-tight">KKN Kelompok 5</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8 font-body leading-relaxed">
              Program Kuliah Kerja Nyata Universitas Merdeka Malang. 
              Inovasi Mesin Pirolisis untuk Desa Pandanrejo mandiri energi dan bebas sampah plastik.
            </p>
            <div className="space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-widest text-secondary/80">Ikuti Perjalanan Kami</h5>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/kknpandanrejo5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-[#E1306C] hover:text-white transition-all duration-300 rounded-full group shadow-lg" 
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://tiktok.com/@kknunmerkelompok5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-black hover:text-white transition-all duration-300 rounded-full group shadow-lg" 
                  title="TikTok"
                >
                  <TikTokIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:almer.rasyid@unmer.ac.id" 
                  className="p-3 bg-white/10 hover:bg-secondary hover:text-primary transition-all duration-300 rounded-full group shadow-lg" 
                  title="Email"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="tel:087849776598" 
                  className="p-3 bg-white/10 hover:bg-secondary hover:text-primary transition-all duration-300 rounded-full group shadow-lg" 
                  title="WhatsApp"
                >
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-6 font-headline">Tautan Cepat</h5>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><a href="#home" className="hover:text-secondary transition-colors">Beranda</a></li>
              <li><a href="#organization" className="hover:text-secondary transition-colors">Tim Pelaksana</a></li>
              <li><a href="#programs" className="hover:text-secondary transition-colors">Program Kerja</a></li>
              <li><a href="#moments" className="hover:text-secondary transition-colors">Dokumentasi</a></li>
              <li><a href="#archive" className="hover:text-secondary transition-colors">Arsip Luaran</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-6 font-headline">Informasi Kontak</h5>
            <ul className="space-y-4 text-white/60 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Kecamatan Wagir, Kabupaten Malang, Jawa Timur</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>almer.rasyid@unmer.ac.id</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>0878-4977-6598</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Kelompok 5 KKN Unmer Malang. Desa Pandanrejo.</p>
          <div className="flex gap-8 items-center">
            <span className="text-secondary/60 italic font-medium">19 Jan - 19 Feb 2026</span>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <span className="flex items-center gap-1 font-bold">Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Group 5</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
