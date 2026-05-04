import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Carolina } from "@/components/carolina";
import { Services } from "@/components/services";
import { Collection } from "@/components/collection";
import { Editorial } from "@/components/editorial";
import { Testimonials } from "@/components/testimonials";
import { InstagramFeed } from "@/components/instagram-feed";
import { MythsTruths } from "@/components/myths-truths";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Carolina />
        <Services />
        <Collection />
        <Editorial />
        <Testimonials />
        <InstagramFeed />
        <MythsTruths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
