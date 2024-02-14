"use client";
import { RevealWrapper } from "next-reveal";

type StickyTitleType = {
  title: string;
  type: "title" | "subtitle";
};
export default function StickyTitle(props: StickyTitleType) {
  return (
    <RevealWrapper delay={100}>
      {props.type == "title" && (
        <div className="text-slate-800 dark:text-slate-200 w-full">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold items-center">
            <span className="text-base md:text-lg font-light font-mono text-sky-600 dark:text-sky-300 cursor-default align-middle mr-2">{`<`}</span>
            {props.title}
            <span className="text-base md:text-lg font-light font-mono text-sky-600 dark:text-sky-300 cursor-default align-middle ml-2">{`/>`}</span>
          </h1>
        </div>
      )}
      {props.type == "subtitle" && (
        <div className="text-slate-800 dark:text-slate-200 w-full">
          <span className="text-base font-bold lg:text-lg flex gap-6 items-center">
            {props.title}
          </span>
        </div>
      )}
    </RevealWrapper>
  );
}
