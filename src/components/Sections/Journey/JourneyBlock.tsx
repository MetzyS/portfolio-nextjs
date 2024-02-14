"use client";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { IoIosLink } from "react-icons/io";

export default function JourneyBlock(props: {
  title: string;
  link?: string;
  detail?: string;
  company?: string;
  text?: string;
  htmlDom?: string | TrustedHTML;
  delay: number;
  date: string;
  tech?: string[];
  visible: boolean;
  links?: { title: string; link: string }[];
}) {
  return (
    <div className={`w-full group/item ${props.visible ? "block" : "hidden"}`}>
      <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] mb-12 sm:p-6 lg:hover:bg-blue-500/5 lg:hover:dark:bg-sky-300/5 lg:rounded-lg border-transparent border-t lg:hover:border-t-blue-100/50 lg:hover:dark:border-t-white/10 lg:hover:shadow-lg lg:hover:shadow-blue-800/5 lg:dark:hover:shadow-black/5">
        <span className="text-slate-500 font-semibold text-xs my-2">
          {props.date}
        </span>
        <div>
          <h3 className="flex flex-col font-medium text-slate-200">
            <div className="flex flex-col">
              {props.link ? (
                <a
                  href={props.link}
                  target="_blank"
                  className="inline-flex font-medium leading-snug text-slate-900 dark:text-slate-200 dark:hover:text-sky-300 hover:text-blue-600 group-hover/item:text-blue-600 group-hover/item:dark:text-sky-300"
                >
                  <span className="">
                    {props.title}{" "}
                    <span className="inline-block ml-2 align-text-bottom">
                      <LiaExternalLinkAltSolid className="w-5 h-5" />
                    </span>
                  </span>
                </a>
              ) : (
                <span className="font-medium leading-snug text-slate-900 dark:text-slate-200 dark:hover:text-sky-300 hover:text-blue-600 group-hover/item:text-blue-600 group-hover/item:dark:text-sky-300">
                  {props.title}
                </span>
              )}
              {props.detail && (
                <span className="font-medium leading-snug text-slate-500">
                  {props.detail}
                </span>
              )}
              {props.company && (
                <span className="font-medium leading-snug text-slate-500">
                  {props.company}
                </span>
              )}
            </div>
          </h3>
          {props.text && (
            <p className="text-sm leading-normal text-slate-700 dark:text-slate-400 mt-2">
              {props.text}
            </p>
          )}
          {props.htmlDom && (
            <p
              className="text-sm leading-normal text-slate-700 dark:text-slate-400 mt-2"
              dangerouslySetInnerHTML={{ __html: props.htmlDom }}
            ></p>
          )}
          {props.links && (
            <ul className="flex gap-4 mt-4">
              {props.links.map((link, index) => (
                <li
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
                </li>
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
    </div>
  );
}
