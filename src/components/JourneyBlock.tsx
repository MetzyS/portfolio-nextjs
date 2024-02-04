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
      className="w-full flex flex-col load-hidden mb-12"
      useDelay="always"
      opacity={0}
      reset={false}
    >
      <span className="text-slate-500 font-semibold text-xs my-2">
        {props.date}
      </span>
      <h3 className="flex flex-col font-medium text-slate-200">
        {props.link ? (
          <a
            href={props.link}
            className="flex gap-2 items-center justify-start font-medium leading-snug text-slate-900 dark:text-slate-200 dark:hover:text-teal-300 hover:text-blue-600"
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
      </h3>
      <div
        className="text-sm leading-normal text-slate-700 dark:text-slate-400 mt-2"
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></div>
      {props.links && (
        <ul className="flex gap-4 mt-4">
          {props.links.map((link, index) => (
            <div className="group font-medium text-sm">
              <a
                href={link.link}
                className="flex items-center group-hover:text-blue-600 group-hover:dark:text-teal-300"
              >
                <IoIosLink className="w-3 h-3 mr-1" />
                {link.title}
              </a>
            </div>
          ))}
        </ul>
      )}
      {/* {props.tech && (
        <ul className="mt-2 flex flex-wrap" aria-label="stack utilisé">
          {props.tech.map((stack, index) => (
            <li
              key={"stack-" + index}
              className={
                "flex items-center px-3 py-1 leading-5 text-xs font-medium rounded-full mr-1.5 mt-2 " +
                stack.className
              }
            >
              {stack.tech}
            </li>
          ))}
        </ul>
      )} */}
      {props.tech && (
        <ul className="mt-2 flex flex-wrap" aria-label="stack utilisé">
          {props.tech.map((stack, index) => (
            <li
              className="flex items-center px-3 py-1 leading-5 text-blue-600 dark:text-teal-300 text-xs font-medium bg-blue-600/10 dark:bg-teal-500/20 rounded-full mr-1.5 mt-2"
              key={"stack-" + index}
            >
              {stack}
            </li>
          ))}
        </ul>
      )}
    </RevealWrapper>
  );
}
