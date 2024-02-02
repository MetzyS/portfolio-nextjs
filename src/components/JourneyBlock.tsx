"use client";

import { RevealWrapper } from "next-reveal";

export default function JourneyBlock(props: {
  title: string;
  text: string;
  right: boolean;
  delay: number;
  date: string;
  rounded?: string;
}) {
  return (
    <RevealWrapper
      delay={props.delay}
      className="w-full flex flex-col load-hidden"
      useDelay="always"
      opacity={0}
      reset={false}
    >
      <div className="grid grid-cols-[1fr_20px_5px_20px_1fr] gap-10">
        <div
          className={`flex flex-col w-full bg-blue-100/25 dark:bg-slate-700/50 border border-blue-500/10 dark:border-white/10 shadow-md h-full rounded-md p-2 ${
            props.right ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="self-center font-semibold capitalize mb-2">
            {props.title}
          </span>
          <p className="text-sm">{props.text}</p>
        </div>
        <span className="self-center text-xs">
          {props.right ? "" : props.date}
        </span>
        <div
          className={
            "w-full bg-blue-500 h-full flex flex-col justify-center items-center " +
            props.rounded
          }
        >
          <span className="w-3 h-3 rounded-full border-blue-500 border-4 bg-white dark:bg-slate-800 self-center justify-self-center"></span>
        </div>
        <span className="self-center text-xs">
          {props.right ? props.date : ""}
        </span>

        <div
          className={`flex flex-col w-full bg-slate-700/50 border border-white/10 h-full rounded-md p-2 ${
            props.right ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="self-center font-semibold capitalize">
            {props.title}
          </span>
          <p className="text-sm">{props.text}</p>
        </div>
      </div>
    </RevealWrapper>
  );
}
