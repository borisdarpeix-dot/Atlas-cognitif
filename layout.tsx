"use client";

import { LangProvider } from "@/lib/lang";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LoiMere from "@/components/LoiMere";
import OSection from "@/components/OSection";
import Couches from "@/components/Couches";
import Agents from "@/components/Agents";
import Modes from "@/components/Modes";
import Vivo from "@/components/Vivo";

export default function Home() {
  return (
    <LangProvider>
      <Navigation />
      <main>
        <Hero />
        <LoiMere />
        <OSection />
        <Couches />
        <Agents />
        <Modes />
        <Vivo />
      </main>
    </LangProvider>
  );
}
