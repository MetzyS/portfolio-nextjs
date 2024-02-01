"use client";

import { RevealWrapper } from "next-reveal";
import { Ubuntu } from "@next/font/google";
import JourneyBlock from "@/components/JourneyBlock";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export default function Journey() {
  return (
    <div className="flex flex-col gap-10 my-20 xs:my-24 mx-6">
      <RevealWrapper
        delay={0}
        useDelay="always"
        opacity={0}
        reset={false}
        className="load-hidden"
      >
        <h1
          className={
            "text-xl xl:text-4xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-xl mb-10 text-center " +
            ubuntu.className
          }
        >
          Parcours ⌛
        </h1>
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <JourneyBlock text="test" delay={150} right={false} />
        <JourneyBlock text="test" delay={150} right={true} />
        <JourneyBlock text="test" delay={150} right={false} />
        <JourneyBlock text="test" delay={150} right={true} />
      </RevealWrapper>
    </div>
  );
}
