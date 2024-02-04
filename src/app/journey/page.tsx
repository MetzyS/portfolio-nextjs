"use client";

import { RevealWrapper } from "next-reveal";
import { Ubuntu } from "@next/font/google";
import JourneyBlock from "@/components/JourneyBlock";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export default function Journey() {
  return (
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
          text="Planification, conception, développement, déploiement et maintenance de deux projets: <ul><li>- Un site vitrine avec formulaire de contact et backend permettant de consulter/répondre aux messages laissé par les visiteurs.<li><li>- Une application web permettant le stockage/partage de fichiers avec différents accès selon le rôle attribué aux utilisateurs.</li></ul>"
          tech={["PHP", "JavaScript", "HTML & CSS", "Figma", "Illustrator"]}
          // tech={[
          //   {
          //     tech: "JavaScript",
          //     className: "text-black bg-yellow-400",
          //   },
          //   {
          //     tech: "PHP",
          //     className: "text-black bg-purple-400",
          //   },
          //   {
          //     tech: "HTML & CSS",
          //     className: "text-black bg-orange-400",
          //   },
          // ]}
        />
        <JourneyBlock
          delay={230}
          date="2023 — 2024"
          title="Développeur Web — Full Stack"
          link="https://www.universdutelephone.fr"
          level="Développeur Junior"
          text="Planification, conception, développement, déploiement et maintenance de deux projets: <ul><li>- Un site vitrine avec formulaire de contact et backend permettant de consulter/répondre aux messages laissé par les visiteurs.<li><li>- Une application web permettant le stockage/partage de fichiers avec différents accès selon le rôle attribué aux utilisateurs.</li></ul>"
          // tech={["JavaScript", "PHP", "HTML & CSS"]}
        />
      </RevealWrapper>
    </div>
  );
}
