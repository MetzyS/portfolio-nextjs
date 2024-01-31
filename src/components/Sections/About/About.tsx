import { AvatarArrow } from "@/components/AvatarArrow";
import { AvatarBoat } from "@/components/AvatarBoat";
import { AvatarCloud } from "@/components/AvatarCloud";
import { AvatarHappy } from "@/components/AvatarHappy";
import { AvatarTired } from "@/components/AvatarTired";
import { AvatarTravel } from "@/components/AvatarTravel";
import { Ubuntu } from "@next/font/google";
import { RevealWrapper } from "next-reveal";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const About = () => {
  return (
    <>
      <h1
        className={
          "text-xl xl:text-4xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-xl my-20 text-center " +
          ubuntu.className
        }
      >
        Qui suis-je ? ✍🏼
      </h1>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-5 md:gap-y-28">
        <p className="relative flex flex-col text-base leading-tight text-slate-800 dark:text-slate-300 dark:bg-slate-700/30 bg-sky-100/20 rounded-lg p-4 shadow-xl dark:md:shadow-slate-900 md:shadow-md overflow-hidden">
          <span className="mb-2 md:mb-0 text-base leading-tight">
            <strong>Ancien directeur d'ACM*</strong> avec plusieurs années
            d'expérience dans le monde de l'animation socio-culturelle.
          </span>
          <span className="text-xs italic">*Accueil collectif de Mineurs.</span>
          <span className="mt-6">
            J'ai entammé une{" "}
            <strong>
              reconversion professionnelle dans le développement web{" "}
            </strong>
            en 2022, en raison de ma passion pour l'informatique, le code 👨🏽‍💻 et
            les jeux vidéo 🎮.
          </span>
          <span className="mt-6">
            Depuis, je passe mes journées{" "}
            <span className="text-sm italic">(et parfois mes nuits!)</span> a
            <strong> coder</strong>, <strong>apprendre et explorer</strong>{" "}
            cette nouvelle facette d'internet.
          </span>
          <span>
            C'est d'ailleurs ce qui me motive le plus.. l'
            <strong>apprentissage</strong>! Le renouvellement et la remise en
            question permanente dans un domaine qui évolue sans cesse.
          </span>
        </p>
        <div className="relative hidden md:block">
          <RevealWrapper
            delay={150}
            useDelay="always"
            opacity={0}
            reset={false}
            className="load-hidden"
          >
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
              <AvatarArrow className="rotate-[125deg] xl:rotate-[105deg] w-[140px] h-[100px] xl:w-[95px] xl:h-[220px]" />
            </div>
          </RevealWrapper>
          <RevealWrapper
            delay={150}
            useDelay="always"
            opacity={0}
            reset={false}
            className="load-hidden"
          >
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
          </RevealWrapper>
        </div>

        <div className="relative hidden md:block">
          <RevealWrapper
            delay={150}
            useDelay="always"
            opacity={0}
            reset={false}
            className="load-hidden"
          >
            <AvatarBoat
              width={180}
              height={180}
              className="absolute top-56 xl:top-36 right-6 xl:right-0"
            />
          </RevealWrapper>
        </div>

        <p className="relative flex flex-col text-base leading-tight text-slate-800 dark:text-slate-300 dark:bg-slate-700/30 bg-sky-100/20 rounded-lg p-4 shadow-xl dark:md:shadow-slate-900 md:shadow-md overflow-hidden">
          <span className="mb-2 md:mb-0 text-base leading-tight">
            <strong>Ancien directeur d'ACM*</strong> avec plusieurs années
            d'expérience dans le monde de l'animation socio-culturelle.
          </span>
          <span className="text-xs italic">*Accueil collectif de Mineurs.</span>
          <span className="mt-6">
            J'ai entammé une{" "}
            <strong>
              reconversion professionnelle dans le développement web{" "}
            </strong>
            en 2022, en raison de ma passion pour l'informatique, le code 👨🏽‍💻 et
            les jeux vidéo 🎮.
          </span>
          <span className="mt-6">
            Depuis, je passe mes journées{" "}
            <span className="text-sm italic">(et parfois mes nuits!)</span> a
            <strong> coder</strong>, <strong>apprendre et explorer</strong>{" "}
            cette nouvelle facette d'internet.
          </span>
          <span>
            C'est d'ailleurs ce qui me motive le plus.. l'
            <strong>apprentissage</strong>! Le renouvellement et la remise en
            question permanente dans un domaine qui évolue sans cesse.
          </span>
        </p>
      </div>
    </>
  );
};
