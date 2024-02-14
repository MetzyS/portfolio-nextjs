"use client";

import StickyTitle from "@/components/StickyTitle";
import NoSsr from "@/utils/NoSsr";
import { RevealWrapper } from "next-reveal";

export default function ProjectSection() {
  return (
    <NoSsr>
      <RevealWrapper
        delay={0}
        useDelay="always"
        opacity={0}
        className="load-hidden relative"
      >
        <section id="projets" className="pt-20">
          <StickyTitle title="Projets" type="title" />
        </section>
      </RevealWrapper>
    </NoSsr>
  );
}
