import { AvatarCloud } from "@/components/AvatarCloud";
import { AvatarHappy } from "@/components/AvatarHappy";
import { AvatarTired } from "@/components/AvatarTired";
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
          "text-xl xl:text-4xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-xl my-20 " +
          ubuntu.className
        }
        id="about-section"
      >
        Qui suis-je ? ✍🏽
      </h1>
      <div className="flex md:grid md:grid-cols-2 md:gap-5">
        <p className="flex flex-col text-base leading-tight text-slate-800 dark:text-slate-300">
          <span className="mb-2 md:mb-0 text-base leading-tight">
            <strong>Ancien directeur d'ACM*</strong> avec plusieurs années
            d'expérience dans le monde de l'animation socio-culturelle.
          </span>
          <span className="text-xs italic">*Accueil collectif de Mineurs.</span>
          <span className="mt-6">
            J'ai entammé une{" "}
            <strong>
              reconversion professionnelle dans le développement web
            </strong>{" "}
            en 2022, en raison de ma passion pour l'informatique, le code
            <span className=""> 👨🏽‍💻 </span> et les jeux vidéo{" "}
            <span className="">🎮</span>.
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
            reset={true}
            className="load-hidden"
          >
            <AvatarTired
              width={200}
              height={200}
              className="absolute -top-3 left-10"
            />
            <AvatarCloud
              width={80}
              height={80}
              className="absolute right-12 top-10"
              fill="fill-slate-200"
            />
            {/* <div className="absolute left-6 top-20 p-2 w-fit bg-gray-200 dark:bg-gray-600 shadow-inner  flex items-center justify-center rounded-full">
              <span className="font-semibold text-sm text-slate-600 text-center dark:text-slate-300">
                avant
              </span>
            </div> */}
          </RevealWrapper>
          <RevealWrapper
            delay={150}
            useDelay="always"
            opacity={0}
            reset={true}
            className="load-hidden"
          >
            <AvatarHappy
              width={180}
              height={180}
              className="absolute top-40 -right-6"
            />
            <AvatarCloud
              width={80}
              height={80}
              className="absolute left-24 top-52"
              fill="fill-slate-200"
              text="Avant"
            />
            {/* <div className="absolute right-36 top-64 p-2 w-fit bg-gray-200 dark:bg-gray-600 shadow-inner flex items-center justify-center rounded-full">
              <span className="font-semibold text-sm text-slate-600 text-center dark:text-slate-300">
                après
              </span>
            </div> */}
          </RevealWrapper>
        </div>
      </div>
    </>
  );
};
