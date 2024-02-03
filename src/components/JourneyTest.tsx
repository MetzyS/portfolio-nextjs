"use client";

import { RevealWrapper } from "next-reveal";

export default function JourneyTest(props: {
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
      <div className="grid grid-cols-[5px_1fr] gap-6 group">
        {/* line */}
        <div
          className={
            "w-full bg-blue-500/60 h-full flex flex-col justify-center items-center " +
            props.rounded
          }
        >
          {/* circle */}
          <div className="flex flex-col">
            <div className="flex p-2 justify-center items-center rounded-md bg-[#2F5FB1] shadow-md box-border border border-transparent group-hover:border-blue-500/50 transition-all">
              <span className="text-xs">{props.date}</span>
            </div>
            <span className="w-3 h-3 rounded-full border-blue-500 border-4 bg-white dark:bg-slate-800 self-center justify-self-center shadow-sm"></span>
          </div>
        </div>
        {/* date */}
        {/* <span className="self-center text-xs">{props.date}</span> */}
        {/* text block */}
        <div
          className={
            "flex flex-col w-full transition-all bg-blue-100/25 dark:bg-slate-700/50 border border-blue-500/10 dark:border-white/10 shadow-md h-full rounded-md p-2 group-hover:dark:border-blue-500/50"
          }
        >
          <span className="self-center font-semibold capitalize mb-2">
            {props.title}
          </span>
          <p className="text-sm">{props.text}</p>
        </div>
      </div>
    </RevealWrapper>
  );
}
