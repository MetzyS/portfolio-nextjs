"use client";

import { RevealWrapper } from "next-reveal";
import { Ubuntu } from "@next/font/google";
import JourneyBlock from "@/components/JourneyBlock";
import NoSsr from "@/utils/NoSsr";
import Link from "next/link";
import { BsChevronDoubleDown } from "react-icons/bs";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Journey() {
  return (
    <NoSsr>
      <div className="flex flex-col gap-10 my-20 xs:my-24 mx-6">
        <RevealWrapper
          delay={0}
          useDelay="always"
          opacity={0}
          reset={false}
          className="load-hidden"
        >
          <h1
            className={
              "gap-2 text-xl xl:text-4xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-xl mb-10 text-center " +
              ubuntu.className
            }
          >
            Parcours ⌛
          </h1>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <JourneyBlock
            delay={130}
            date="2023 — Aujourd'hui"
            title="Développeur Web — Full Stack"
            link="https://www.universdutelephone.fr"
            links={[
              {
                title: "Site vitrine",
                link: "https://www.universdutelephone.fr",
              },
              {
                title: "Plateforme partage",
                link: "https://www.metzys.net/projet-cloud/",
              },
            ]}
            level="Développeur Junior"
            text="Planification, conception, développement, déploiement et maintenance de deux projets: <ul><li>- Un site vitrine avec formulaire de contact et backend permettant de consulter/répondre aux messages laissé par les visiteurs.</li><li>- Une application web permettant le stockage/partage de fichiers avec différents accès selon le rôle attribué aux utilisateurs.</li></ul>"
            tech={["PHP", "JavaScript", "HTML & CSS", "Figma", "Illustrator"]}
          />
          <JourneyBlock
            delay={150}
            date="2023 — 2024"
            title="Développeur Web — Full Stack"
            link="https://www.universdutelephone.fr"
            level="Développeur Junior"
            text="Planification, conception, développement, déploiement et maintenance de deux projets: <ul><li>- Un site vitrine avec formulaire de contact et backend permettant de consulter/répondre aux messages laissé par les visiteurs.<li><li>- Une application web permettant le stockage/partage de fichiers avec différents accès selon le rôle attribué aux utilisateurs.</li></ul>"
            // tech={["JavaScript", "PHP", "HTML & CSS"]}
          />
          <div className="absolute -bottom-16 left-0 md:left-20 lg:-bottom-10 lg:left-16 xl:-bottom-10 xl:left-20 p-2 rounded-full hover:bg-slate-200 hover:dark:bg-slate-700 animate-pulse cursor-pointer transition-all">
            <Link href="about">
              <BsChevronDoubleDown className="w-5 h-5 rotate-90" />
            </Link>
          </div>
          <div className="absolute -bottom-16 right-0 md:right-20 lg:-bottom-10 lg:right-16 xl:-bottom-10 xl:right-20 p-2 rounded-full hover:bg-slate-200 hover:dark:bg-slate-700 animate-pulse cursor-pointer transition-all">
            <Link href="projects">
              <BsChevronDoubleDown className="w-5 h-5 -rotate-90" />
            </Link>
          </div>
        </RevealWrapper>
      </div>
    </NoSsr>
  );
}
