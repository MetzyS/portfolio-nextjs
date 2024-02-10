"use client";
import AboutSection from "@/components/Sections/About/AboutSection";
import { HomeSection } from "@/components/Sections/Home/HomeSection";
import JourneySection from "@/components/Sections/Journey/JourneySection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <JourneySection />
    </>
  );
}
