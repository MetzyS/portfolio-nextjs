"use client";

import NoSsr from "@/utils/NoSsr";
import { RevealWrapper } from "next-reveal";

export default function ProjectSection() {
  return (
    <NoSsr>
      <RevealWrapper
        delay={100}
        useDelay="always"
        opacity={0}
        className="load-hidden relative"
      >
        <section id="projets" className="pt-20">
          <span>Projets</span>
        </section>
      </RevealWrapper>
    </NoSsr>
  );
}
