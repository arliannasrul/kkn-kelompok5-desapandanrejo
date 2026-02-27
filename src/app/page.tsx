"use client"

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Organization } from "@/components/Organization";
import { WorkPrograms } from "@/components/WorkPrograms";
import { ArchiveGallery } from "@/components/ArchiveGallery";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Optionally unobserve after animating once
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen selection:bg-accent selection:text-primary">
      <Navigation />
      
      <Hero />
      
      <section className="reveal-on-scroll">
        <Organization />
      </section>

      <section className="reveal-on-scroll">
        <WorkPrograms />
      </section>

      <section className="reveal-on-scroll">
        <ArchiveGallery />
      </section>

      <Footer />
    </main>
  );
}
