"use client";

import { RevealWrapper } from "next-reveal";
import { Ubuntu } from "@next/font/google";
import JourneyBlock from "@/components/Sections/Journey/JourneyBlock";
import NoSsr from "@/utils/NoSsr";
import { MdOutlineExpandMore } from "react-icons/md";
import { expPro, formations } from "@/app/data/data";
import { useState } from "react";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function JourneySection() {
  const [openExpList, setOpenExpList] = useState(false);
  const [openFormationList, setOpenFormationList] = useState(false);

  const handleOpenExpList = () => {
    setOpenExpList(!openExpList);
  };

  const handleOpenFormationList = () => {
    setOpenFormationList(!openFormationList);
  };

  return (
    <NoSsr>
      <RevealWrapper
        delay={0}
        useDelay="always"
        opacity={0}
        className="load-hidden relative"
      >
        <section id="parcours">
          <div className="flex flex-col gap-10 mt-20 mb-0 xs:mt-24 mx-6">
            <h1
              className={
                "gap-2 text-xl xl:text-4xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-xl mb-10 text-center " +
                ubuntu.className
              }
              id="parcours"
            >
              Parcours ⌛
            </h1>
            <div
              className={`${
                openExpList ? "sticky" : "static"
              } sm:static top-12 left-0 right-0 -m-6 w-screen sm:w-max bg-zinc-50/60 dark:bg-slate-800/50 lg:bg-transparent lg:dark:bg-transparent z-20 sm:z-0 backdrop-blur flex pl-6  py-5 sm:pl-12`}
            >
              <div className="text-slate-800 dark:text-slate-200 w-full">
                <span
                  className="text-base font-bold lg:text-lg flex gap-6 items-center hover:text-sky-300 cursor-pointer"
                  onClick={handleOpenExpList}
                >
                  Expérience Professionnelle
                  <span>
                    <MdOutlineExpandMore className="w-5 h-5" />
                  </span>
                </span>
              </div>
            </div>
            {expPro.map((exp) => {
              return (
                <li
                  className={`list-none ${openExpList ? "" : "hidden"}`}
                  key={"exp-li-" + exp.id}
                >
                  {openExpList ? (
                    <JourneyBlock
                      delay={exp.delay}
                      date={exp.date}
                      title={exp.title}
                      company={exp.company}
                      htmlDom={exp.htmlDom}
                      link={exp.link}
                      links={exp.links}
                      tech={exp.tech}
                      visible={openExpList}
                      key={"exp-item-" + exp.id}
                    />
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </div>
          <div className="flex flex-col gap-10 my-10 xs:my-24 mx-6">
            <div
              className={`${
                openFormationList ? "sticky" : "static"
              } top-12 left-0 right-0 sm:static lg:static -m-6 w-screen sm:w-max bg-white/50 dark:bg-slate-800/50 lg:bg-transparent lg:dark:bg-transparent z-20 sm:z-0 backdrop-blur flex pl-6  py-5 sm:pl-12`}
            >
              <div className="text-slate-800 dark:text-slate-200 w-full">
                <span
                  className="text-base font-bold lg:text-lg flex gap-6 items-center hover:text-sky-300 cursor-pointer"
                  onClick={handleOpenFormationList}
                >
                  Formations
                  <span>
                    <MdOutlineExpandMore className="w-5 h-5" />
                  </span>
                </span>
              </div>
            </div>
            {formations.map((formation) => {
              return (
                <li
                  className={`list-none ${openFormationList ? "" : "hidden"}`}
                  key={"formation-li-" + formation.id}
                >
                  <JourneyBlock
                    delay={formation.delay}
                    date={formation.date}
                    title={formation.title}
                    company={formation.company}
                    htmlDom={formation.htmlDom}
                    link={formation.link}
                    tech={formation.tech}
                    detail={formation.detail}
                    visible={openFormationList}
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
