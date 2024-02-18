"use client";
import AboutSection from "@/components/Sections/About/AboutSection";
import { HomeSection } from "@/components/Sections/Home/HomeSection";
import JourneySection from "@/components/Sections/Journey/JourneySection";
import ProjectSection from "@/components/Sections/Projects/ProjectSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <JourneySection />
    </>
  );
}
