"use client";
import { MainDescription } from "@/components/Sections/Home/MainDescription";
import { MainAvatar } from "@/components/Sections/Home/MainAvatar";
import { About } from "@/components/Sections/About/About";
import { RevealWrapper } from "next-reveal";
import { Journey } from "@/components/Sections/Journey/Journey";

export default function Home() {
  return (
    <>
      <RevealWrapper
        delay={0}
        useDelay="always"
        opacity={0}
        reset={false}
        className="load-hidden"
      >
        <div className="md:grid md:grid-cols-6 min-h-screen relative">
          <div className="flex col-span-full m-auto min-h-screen">
            <MainDescription />
            <MainAvatar />
          </div>
        </div>
      </RevealWrapper>
      <RevealWrapper
        delay={75}
        useDelay="always"
        reset={false}
        className="load-hidden"
      >
        <section className="mx-10 relative" id="about-section">
          <div className="shadow-md border-2 border-t-0 border-slate-100 dark:border-slate-700 mb-12 border-dashed" />
          <About />
        </section>
        <section className="mx-10 mt-32 relative" id="journey-section">
          <div className="shadow-md border-2 border-t-0 border-slate-100 dark:border-slate-700 mb-12 border-dashed" />
          <Journey />
        </section>
      </RevealWrapper>
    </>
  );
}
