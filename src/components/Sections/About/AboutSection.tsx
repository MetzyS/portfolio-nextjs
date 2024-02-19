"use client";
import { AvatarArrow } from "@/components/Avatars/AvatarArrow";
import { AvatarBoat } from "@/components/Avatars/AvatarBoat";
import { AvatarCloud } from "@/components/Avatars/AvatarCloud";
import { AvatarHappy } from "@/components/Avatars/AvatarHappy";
import { AvatarTired } from "@/components/Avatars/AvatarTired";
import { Ubuntu } from "@next/font/google";
import { RevealWrapper } from "next-reveal";
import { about } from "@/app/data/data";
import StickyTitle from "@/components/StickyTitle";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function AboutSection() {
  return (
    <section id="about" className="pt-20">
      <div className="sticky sm:static top-12 left-0 right-0 -m-6 w-screen sm:w-max bg-zinc-50/60 dark:bg-slate-800/50 lg:bg-transparent lg:dark:bg-transparent z-20 sm:z-0 backdrop-blur flex pl-6 py-5 sm:pl-12">
        <RevealWrapper
          delay={100}
          useDelay="always"
          opacity={0}
          reset={false}
          className="load-hidden"
        >
          <StickyTitle title="Qui suis-je ?" type="title" />
        </RevealWrapper>
      </div>
      <div className="flex flex-col gap-10 my-20 xs:my-24 mx-6">
        <RevealWrapper
          delay={150}
          useDelay="always"
          opacity={0}
          reset={false}
          className="load-hidden"
        >
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-5 md:gap-y-28">
            <p className="relative flex flex-col text-base leading-tight text-slate-800 dark:text-slate-300 dark:bg-slate-700/30 bg-blue-600/10 rounded-lg p-4 md:p-5 shadow-xl shadow-slate-600/20 dark:shadow-slate-900/40 md:shadow-md overflow-hidden">
              {about}
            </p>
            <RevealWrapper
              delay={250}
              useDelay="always"
              opacity={0}
              reset={false}
              className="load-hidden"
            >
              <div className="relative hidden md:block">
                <AvatarTired
                  width={180}
                  height={180}
                  className="absolute left-10 xl:left-4"
                />
                <AvatarCloud
                  width={80}
                  height={80}
                  className="absolute right-12 top-10 xl:left-52 z-20"
                  text="Avant"
                  textClass="font-mono text-9xl font-semibold text-black"
                />
                <div className="md:absolute top-40 right-16  xl:top-16 xl:right-44 md:block hidden">
                  <AvatarArrow className="rotate-[125deg] xl:rotate-[105deg] w-[140px] h-[100px] xl:w-[95px] xl:h-[220px] dark:fill-slate-400 -top-8 right-2 xl:-top-2 xl:right-4 absolute" />
                </div>
                <AvatarHappy
                  width={160}
                  height={160}
                  className="absolute top-44 xl:top-28 right-6 xl:right-0"
                />
                <AvatarCloud
                  width={80}
                  height={80}
                  className="absolute md:left-20 xl:left-44 top-56 xl:top-52 z-20"
                  text="Après"
                  textClass="font-mono text-9xl font-semibold text-black"
                />
              </div>
            </RevealWrapper>
          </div>
        </RevealWrapper>

        <RevealWrapper
          delay={350}
          useDelay="always"
          opacity={0}
          reset={false}
          className="load-hidden"
        >
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 items-center">
            <RevealWrapper
              delay={400}
              useDelay="always"
              opacity={0}
              reset={false}
              className="load-hidden"
            >
              <div className="relative hidden md:block">
                <AvatarBoat width={300} height={300} className="" />
              </div>
            </RevealWrapper>

            <p className="relative flex flex-col text-base leading-tight text-slate-800 dark:text-slate-300 dark:bg-slate-700/30 bg-blue-600/10 rounded-lg p-4 shadow-xl dark:shadow-slate-900/40 md:shadow-md overflow-hidden h-fit">
              <span className="mb-2 md:mb-0 text-base leading-tight">
                En dehors de mes sessions de codage, j&apos;aime me détendre
                grâce à la <strong>lecture</strong> 📖 et aux{" "}
                <strong>jeux vidéos 🕹️</strong>.
                <br />
                Plonger dans un monde fictif me permet de cultiver ma
                créativité.
              </span>
              <span className="mt-6">
                Le <strong>sport</strong> ⚽ a une place essentielle dans ma
                vie, c&apos;est ce qui me permet de garder un équilibre sain que
                ce soit physique ou mental.
              </span>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
