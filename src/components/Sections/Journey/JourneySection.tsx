"use client";

import { RevealWrapper } from "next-reveal";
import { Ubuntu } from "@next/font/google";
import JourneyBlock from "@/components/Sections/Journey/JourneyBlock";
import NoSsr from "@/utils/NoSsr";
import { expPro, formations } from "@/app/data/data";
import StickyTitle from "@/components/StickyTitle";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function JourneySection() {
  return (
    <NoSsr>
      <RevealWrapper
        delay={0}
        useDelay="always"
        opacity={0}
        className="load-hidden relative"
      >
        <section id="parcours" className="pt-20">
          <div className="flex flex-col gap-10 mb-0 mx-6">
            <div className="mb-12">
              <StickyTitle title="Parcours" type="title" />
            </div>
            <div className="sticky sm:static top-12 left-0 right-0 -m-6 w-screen sm:w-max bg-zinc-50/60 dark:bg-slate-800/50 lg:bg-transparent lg:dark:bg-transparent z-20 sm:z-0 backdrop-blur flex pl-6  py-5 sm:pl-12">
              <div className="text-slate-800 dark:text-slate-200 w-full">
                <span className="text-base font-bold lg:text-lg flex gap-6 items-center">
                  Expérience Professionnelle
                </span>
              </div>
            </div>
            <ul>
              {expPro.map((exp) => {
                return (
                  <li className="list-none" key={"exp-li-" + exp.id}>
                    <JourneyBlock
                      delay={exp.delay}
                      date={exp.date}
                      title={exp.title}
                      company={exp.company}
                      htmlDom={exp.htmlDom}
                      link={exp.link}
                      links={exp.links}
                      tech={exp.tech}
                      key={"exp-item-" + exp.id}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-10 my-10 xs:my-24 mx-6">
            <div className="sticky top-12 left-0 right-0 sm:static lg:static -m-6 w-screen sm:w-max bg-white/50 dark:bg-slate-800/50 lg:bg-transparent lg:dark:bg-transparent z-20 sm:z-0 backdrop-blur flex pl-6  py-5 sm:pl-12">
              <div className="text-slate-800 dark:text-slate-200 w-full">
                <span className="text-base font-bold lg:text-lg flex gap-6 items-center">
                  Formations
                </span>
              </div>
            </div>
            {formations.map((formation) => {
              return (
                <li className="list-none" key={"formation-li-" + formation.id}>
                  <JourneyBlock
                    delay={formation.delay}
                    date={formation.date}
                    title={formation.title}
                    company={formation.company}
                    htmlDom={formation.htmlDom}
                    link={formation.link}
                    tech={formation.tech}
                    detail={formation.detail}
                    key={"formation-item-" + formation.id}
                  />
                </li>
              );
            })}
          </div>
        </section>
      </RevealWrapper>
    </NoSsr>
  );
}
