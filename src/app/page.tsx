
"use client"

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Organization } from "@/components/Organization";
import { WorkPrograms } from "@/components/WorkPrograms";
import { ArchiveGallery } from "@/components/ArchiveGallery";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Simple intersection observer for reveals
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero />
      
      <div className="reveal-on-scroll opacity-0">
        <Organization />
      </div>

      <div className="reveal-on-scroll opacity-0">
        <WorkPrograms />
      </div>

      <div className="reveal-on-scroll opacity-0">
        <ArchiveGallery />
      </div>

      <Footer />
    </main>
  );
}
