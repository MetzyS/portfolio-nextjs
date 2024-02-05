"use client";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { IoIosLink } from "react-icons/io";
import { RevealWrapper } from "next-reveal";

export default function JourneyBlock(props: {
  title: string;
  link?: string;
  level?: string;
  text: string;
  delay: number;
  date: string;
  tech?: string[];
  // tech?: { tech: string; className: string }[];
  links?: { title: string; link: string }[];
}) {
  return (
    <RevealWrapper
      delay={props.delay}
      className="w-full group/item load-hidden cursor-pointer"
      useDelay="always"
      opacity={0}
      reset={false}
    >
      <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] mb-12 sm:p-6 lg:hover:bg-blue-500/5 lg:hover:dark:bg-sky-300/5 lg:rounded-lg border-transparent border-t lg:hover:dark:border-t-white/10 lg:hover:shadow-lg lg:hover:shadow-blue-800/5 lg:dark:hover:shadow-black/5">
        <span className="text-slate-500 font-semibold text-xs my-2">
          {props.date}
        </span>
        <div>
          <h3 className="flex flex-col font-medium text-slate-200">
            <div className="flex flex-col">
              {props.link ? (
                <a
                  href={props.link}
                  className="flex gap-2 items-center justify-start font-medium leading-snug text-slate-900 dark:text-slate-200 dark:hover:text-sky-300 hover:text-blue-600 group-hover/item:text-blue-600 group-hover/item:dark:text-sky-300"
                >
                  {props.title}
                  <LiaExternalLinkAltSolid className="w-4 h-4" />
                </a>
              ) : (
                <span className="font-medium leading-snug text-slate-900 dark:text-slate-200">
                  {props.title}
                </span>
              )}
              {props.level && (
                <span className="font-medium leading-snug text-slate-500">
                  {props.level}
                </span>
              )}
            </div>
          </h3>
          <p
            className="text-sm leading-normal text-slate-700 dark:text-slate-400 mt-2"
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></p>
          {props.links && (
            <ul className="flex gap-4 mt-4">
              {props.links.map((link, index) => (
                <div
                  className="group font-medium text-sm"
                  key={"linkdiv-" + index}
                >
                  <a
                    href={link.link}
                    className="flex items-center group-hover:text-blue-600 group-hover:dark:text-sky-300"
                    key={"link-" + index}
                  >
                    <IoIosLink className="w-3 h-3 mr-1" />
                    {link.title}
                  </a>
                </div>
              ))}
            </ul>
          )}

          {props.tech && (
            <ul className="mt-2 flex flex-wrap" aria-label="stack utilisé">
              {props.tech.map((stack, index) => (
                <li
                  className="flex items-center px-3 py-1 leading-5 text-blue-600 dark:text-sky-300 text-xs font-medium bg-blue-600/10 dark:bg-sky-500/20 rounded-full mr-1.5 mt-2"
                  key={"stack-" + index}
                >
                  {stack}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </RevealWrapper>
  );
}
