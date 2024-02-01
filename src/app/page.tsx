"use client";
import { MainDescription } from "@/components/Sections/Home/MainDescription";
import { MainAvatar } from "@/components/Sections/Home/MainAvatar";
import { RevealWrapper } from "next-reveal";

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
    </>
  );
}
