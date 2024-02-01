"use client";

import { RevealWrapper } from "next-reveal";

export default function JourneyBlock(props: {
  text: string;
  right: boolean;
  delay: number;
}) {
  return (
    <RevealWrapper delay={props.delay} className="w-full flex flex-col">
      <span className="w-3 h-3 rounded-full border-blue-500 border-4 bg-white dark:bg-slate-800 self-center absolute top-3"></span>
      <div className="grid grid-cols-[1fr_5px_1fr] gap-10 h-10">
        <div
          className={`w-full bg-red-500 h-full ${
            props.right ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div className="w-full bg-blue-500 h-full"></div>
        <div
          className={`w-full bg-red-500 h-full ${
            props.right ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </RevealWrapper>
  );
}
