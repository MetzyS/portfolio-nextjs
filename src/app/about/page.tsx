"use client";
import { AvatarArrow } from "@/components/Avatars/AvatarArrow";
import { AvatarBoat } from "@/components/Avatars/AvatarBoat";
import { AvatarCloud } from "@/components/Avatars/AvatarCloud";
import { AvatarHappy } from "@/components/Avatars/AvatarHappy";
import { AvatarTired } from "@/components/Avatars/AvatarTired";
import { Ubuntu } from "@next/font/google";
import { RevealWrapper } from "next-reveal";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function About() {
  return (
    <div className="flex flex-col gap-10 my-20 xs:my-24 mx-6">
      <h1
        className={
          "text-xl xl:text-4xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-xl mb-10 text-center " +
          ubuntu.className
        }
      >
        Qui suis-je ? ✍🏼
      </h1>
      <RevealWrapper
        delay={0}
        useDelay="always"
        opacity={0}
        reset={false}
        className="load-hidden"
      >
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-5 md:gap-y-28">
          <p className="relative flex flex-col text-base leading-tight text-slate-800 dark:text-slate-300 dark:bg-slate-700/30 bg-indigo-200/20 rounded-lg p-4 md:p-5 shadow-xl shadow-slate-600/20 dark:shadow-slate-900/40 md:shadow-md overflow-hidden">
            <span className="mb-2 md:mb-0 text-base leading-tight">
              <strong>Ancien directeur d&apos;ACM*</strong> avec plusieurs
              années d&apos;expérience dans le monde de l&apos;animation
              socio-culturelle.
            </span>
            <span className="text-xs italic">
              *Accueil collectif de Mineurs.
            </span>
            <span className="mt-6">
              J&apos;ai entammé une{" "}
              <strong>
                reconversion professionnelle dans le développement web{" "}
              </strong>
              en 2022, en raison de ma passion pour l&apos;informatique, le code
              👨🏽‍💻 et les jeux vidéo 🎮.
            </span>
            <span className="mt-6">
              Depuis, je passe mes journées{" "}
              <span className="text-sm italic">(et parfois mes nuits!)</span> a
              <strong> coder</strong>, <strong>apprendre et explorer</strong>{" "}
              cette nouvelle facette d&apos;internet.
            </span>
            <span className="mt-6">
              C&apos;est d&apos;ailleurs ce qui me motive le plus.. l&apos;
              <strong>apprentissage</strong>! Le renouvellement et la remise en
              question permanente dans un domaine qui évolue sans cesse.
            </span>
          </p>
          <RevealWrapper
            delay={100}
            useDelay="always"
            opacity={0}
            reset={false}
            className="load-hidden"
          >
            <div className="relative hidden md:block">
              <AvatarTired
                width={200}
                height={200}
                className="absolute left-10 xl:left-4"
              />
              <AvatarCloud
                width={80}
                height={80}
                className="absolute right-12 top-16 xl:left-52 z-20"
                text="Avant"
                textClass="font-mono text-9xl font-semibold text-black"
              />
              <div className="md:absolute top-40 right-16  xl:top-16 xl:right-44 md:block hidden">
                <AvatarArrow className="rotate-[125deg] xl:rotate-[105deg] w-[140px] h-[100px] xl:w-[95px] xl:h-[220px] dark:fill-white" />
              </div>
              <AvatarHappy
                width={180}
                height={180}
                className="absolute top-56 xl:top-36 right-6 xl:right-0"
              />
              <AvatarCloud
                width={80}
                height={80}
                className="absolute md:left-20 xl:left-44 top-64 xl:top-52 z-20"
                text="Après"
                textClass="font-mono text-9xl font-semibold text-black"
              />
            </div>
          </RevealWrapper>
        </div>
      </RevealWrapper>

      <RevealWrapper
        delay={250}
        useDelay="always"
        opacity={0}
        reset={false}
        className="load-hidden"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 items-center">
          <RevealWrapper
            delay={350}
            useDelay="always"
            opacity={0}
            reset={false}
            className="load-hidden"
          >
            <div className="relative hidden md:block">
              <AvatarBoat width={300} height={300} className="" />
            </div>
          </RevealWrapper>

          <p className="relative flex flex-col text-base leading-tight text-slate-800 dark:text-slate-300 dark:bg-slate-700/30 bg-indigo-200/20 rounded-lg p-4 shadow-xl dark:shadow-slate-900/40 md:shadow-md overflow-hidden h-fit">
            <span className="mb-2 md:mb-0 text-base leading-tight">
              En dehors de mes sessions de codage, j&apos;aime me détendre grâce
              à la <strong>lecture</strong> 📖 et aux{" "}
              <strong>jeux vidéos 🕹️</strong>.
              <br />
              Plonger dans un monde fictif me permet de cultiver ma créativité.
            </span>
            <span className="mt-6">
              Le <strong>sport</strong> ⚽ a une place essentielle dans ma vie,
              c&apos;est ce qui me permet de garder un équilibre sain que ce
              soit physique ou mental.
            </span>
          </p>
        </div>
      </RevealWrapper>
    </div>
  );
}
