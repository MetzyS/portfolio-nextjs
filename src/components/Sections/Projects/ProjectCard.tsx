import Image from "next/image";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props: {
  title: string;
  link: string;
  description: string;
  img: string;
  tech: string[];
  github?: string;
}) {
  return (
    <div className="w-full sm:p-6 group/project-item flex flex-col gap-4 sm:grid sm:grid-cols-[200px_1fr] lg:hover:bg-blue-500/5 lg:hover:dark:bg-sky-300/5 lg:rounded-lg border-transparent border-t lg:hover:border-t-blue-100/50 lg:hover:dark:border-t-white/10 lg:hover:shadow-lg lg:hover:shadow-blue-800/5 lg:dark:hover:shadow-black/5">
      <div className="flex flex-col gap-2 sm:order-2">
        <h3 className="font-semibold">
          <a
            href={props.link}
            target="_blank"
            className="inline-flex font-medium leading-snug text-slate-900 dark:text-slate-200 dark:hover:text-sky-300 hover:text-blue-600 group-hover/item:text-blue-600 group-hover/item:dark:text-sky-300"
          >
            <span className="group-hover/project-item:dark:text-sky-300 group-hover/project-item:text-blue-600">
              {props.title}{" "}
              <span className="inline-block ml-2 align-text-bottom">
                <LiaExternalLinkAltSolid className="w-5 h-5" />
              </span>
            </span>
          </a>
        </h3>
        <p
          className="text-sm leading-normal text-slate-700 dark:text-slate-400 mt-2"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></p>
        {props.github && (
          <a
            className="hover:dark:text-sky-300 hover:text-blue-600 w-fit"
            href={props.github}
            target="_blank"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        )}
        <ul className="flex">
          {props.tech && (
            <ul className="flex flex-wrap" aria-label="stack utilisé">
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
        </ul>
      </div>
      <Image
        src={props.img}
        width={200}
        height={48}
        alt={"Screenshot " + props.title}
        className="rounded border-2 border-slate-200/10 transition group-hover/project-item:border-slate-200/30 sm:order-1"
      />
    </div>
  );
}
