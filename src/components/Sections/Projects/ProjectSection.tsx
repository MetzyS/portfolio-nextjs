"use client";

import StickyTitle from "@/components/StickyTitle";
import NoSsr from "@/utils/NoSsr";
import { RevealWrapper } from "next-reveal";
import ProjectCard from "./ProjectCard";
import { projects, imagesCarousel } from "@/app/data/data";
import Carousel from "@/components/Carousel/Carousel";

export default function ProjectSection() {
  return (
    <NoSsr>
      <section id="projets" className="pt-20">
        <div className="sticky sm:static top-12 left-0 right-0 -m-6 w-screen sm:w-max bg-zinc-50/60 dark:bg-slate-800/50 lg:bg-transparent lg:dark:bg-transparent z-20 sm:z-0 backdrop-blur flex pl-6 py-5 sm:pl-12">
          <RevealWrapper
            delay={100}
            useDelay="always"
            opacity={0}
            reset={false}
            className="load-hidden"
          >
            <StickyTitle title="Projets" type="title" />
          </RevealWrapper>
        </div>
        <div className="flex flex-col gap-10 mb-0 mx-6 mt-20">
          <ul>
            <RevealWrapper
              delay={150}
              useDelay="always"
              opacity={0}
              reset={false}
              className="load-hidden"
            >
              {projects.map((item) => (
                <li className="list-none mb-16" key={"project-li-" + item.id}>
                  <ProjectCard
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    img={item.img}
                    tech={item.tech}
                    github={item.github}
                  />
                </li>
              ))}
            </RevealWrapper>
          </ul>
          <Carousel />
        </div>
      </section>
    </NoSsr>
  );
}
