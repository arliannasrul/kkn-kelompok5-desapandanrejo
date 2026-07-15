
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight, Instagram } from "lucide-react";

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

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tim Kami', href: '#organization' },
    { name: 'Program Kerja', href: '#programs' },
    { name: 'Dokumentasi', href: '#moments' },
    { name: 'Arsip Luaran', href: '#archive' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
      isScrolled 
        ? "bg-primary/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="p-1 bg-secondary rounded-full group-hover:rotate-12 transition-transform duration-300 overflow-hidden">
            <Image src="/logo.webp" alt="Logo KKN" width={40} height={40} className="object-cover rounded-full scale-125" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-headline text-xl font-black tracking-tighter transition-colors text-white"
            )}>KKN KELOMPOK 5</span>
            <span className={cn(
              "text-[10px] font-bold tracking-[0.2em] uppercase text-secondary"
            )}>Desa Pandanrejo</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold px-4 py-2 rounded-full transition-all text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="h-6 w-px bg-white/20 mx-2" />
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com/kknpandanrejo5" 
              target="_blank" 
              className="text-white/70 hover:text-secondary transition-colors"
              title="Follow Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://tiktok.com/@kknunmerkelompok5" 
              target="_blank" 
              className="text-white/70 hover:text-secondary transition-colors"
              title="Follow TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
          <a 
            href="#archive" 
            className={cn(
              "ml-4 px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2",
              "bg-secondary text-primary hover:scale-105 shadow-lg active:scale-95"
            )}
          >
            Lihat Luaran <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors text-white hover:bg-white/10"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-500 shadow-2xl">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-headline font-bold text-white flex items-center justify-between group"
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              <ChevronRight className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center gap-8">
              <a 
                href="https://instagram.com/kknpandanrejo5" 
                target="_blank" 
                className="flex items-center gap-3 text-white font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="w-6 h-6 text-secondary" /> Instagram
              </a>
              <a 
                href="https://tiktok.com/@kknunmerkelompok5" 
                target="_blank" 
                className="flex items-center gap-3 text-white font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                <TikTokIcon className="w-6 h-6 text-secondary" /> TikTok
              </a>
            </div>
            <button className="w-full bg-secondary text-primary py-4 rounded-2xl font-bold shadow-glow">
              Hubungi Tim Kami
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
