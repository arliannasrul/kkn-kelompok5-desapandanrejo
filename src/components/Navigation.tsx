
"use client"

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Trees, Menu, X, ChevronRight } from "lucide-react";

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
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="p-2 bg-primary rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <Trees className="w-6 h-6 text-accent" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-headline text-xl font-black tracking-tighter transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}>KKN KELOMPOK 5</span>
            <span className={cn(
              "text-[10px] font-bold tracking-[0.2em] uppercase",
              isScrolled ? "text-accent" : "text-accent/80"
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
                "text-sm font-bold px-4 py-2 rounded-full transition-all hover:bg-accent/10",
                isScrolled 
                  ? "text-primary/70 hover:text-primary" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#archive" 
            className={cn(
              "ml-4 px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-accent text-primary hover:scale-105"
            )}
          >
            Lihat Luaran <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            isScrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-500 shadow-2xl">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-headline font-bold text-primary flex items-center justify-between group"
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              <ChevronRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
          <div className="h-px bg-border my-2" />
          <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold">
            Hubungi Tim
          </button>
        </div>
      )}
    </nav>
  );
}
