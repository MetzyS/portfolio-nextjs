"use client";

import { RevealWrapper } from "next-reveal";
import { Ubuntu } from "@next/font/google";
import JourneyBlock from "@/components/JourneyBlock";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export default function Journey() {
  const fakeText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsam perferendis doloribus accusamus, nihil impedit ipsum aut totam similique veniam maiores mollitia nam quaerat aliquid! Eos tenetur deserunt ratione nobis. Assumenda nostrum dolore officiis deserunt et excepturi harum error voluptates, eos esse, cupiditate rerum saepe porro, eveniet ad quod culpa. Officia repellat itaque rerum quidem voluptatem animi minima corporis fugit!";
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
            "gap-2 text-xl xl:text-4xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-xl mb-10 text-center " +
            ubuntu.className
          }
        >
          Parcours ⌛
        </h1>
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <JourneyBlock
          title="titre"
          text={fakeText}
          date="2024"
          delay={150}
          right={false}
          rounded="rounded-t-full"
        />
        <JourneyBlock
          title="titre"
          text={fakeText}
          date="2024"
          delay={250}
          right={true}
        />
        <JourneyBlock
          title="titre"
          text={fakeText}
          date="2024"
          delay={350}
          right={false}
        />
        <JourneyBlock
          title="titre"
          text={fakeText}
          date="2024"
          delay={450}
          right={true}
          rounded="rounded-b-full"
        />
      </RevealWrapper>
    </div>
  );
}
