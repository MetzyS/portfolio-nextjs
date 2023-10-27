import { DecorationTag } from "@/components/DecorationTag";
import { DefaultBtn } from "@/components/DefaultBtn";
import { Inconsolata, Ubuntu } from "@next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const incosolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const MainDescription = () => {
  return (
    <div
      className={
        "md:col-start-1 md:col-end-4 flex flex-col m-auto w-max md:w-full h-full md:pl-3 text-slate-800 dark:text-slate-100 " +
        ubuntu.className
      }
    >
      <DecorationTag text="<html>" className="text-xs xl:text-sm" />
      <DecorationTag text="<body>" className="ml-4 text-xs xl:text-sm" />
      <DecorationTag text="<h1>" className="ml-6 mt-4 text-xs xl:text-sm" />
      <div className="ml-6 mt-4 text-5xl xl:text-8xl md:text-7xl font-bold w-full">
        <h1 className="drop-shadow-md">Hello!</h1>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          <span>Je suis </span>
          <span className="text-sky-600 dark:text-blue-500 drop-shadow-md">
            Adnène
          </span>
          ,
        </p>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          développeur web.
          <DecorationTag
            text="</h1>"
            className="font-normal ml-2 text-xs xl:text-sm"
          />
        </p>
      </div>
      <div className="ml-6 mt-4">
        <DecorationTag text="<p>" className="text-xs xl:text-sm" />
        <h2 className="text-lg md:text-3xl xl:text-4xl">
          Développeur Full-Stack
        </h2>
        <DecorationTag text="</p>" className="text-xs xl:text-sm" />
      </div>
      <div className="flex flex-col ml-2 mt-6">
        <DefaultBtn
          text="Télécharger mon CV"
          path="/CV-HAMZAOUI.pdf"
          download={true}
          className={
            "w-50 p-6 xl:p-8 rounded-md xl:text-sm font-normal tracking-widest lg:tracking-[0.15em] " +
            incosolata.className
          }
        />
      </div>
      <div className="flex items-center gap-4 mt-8">
        <a
          href="https://www.github.com/MetzyS"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-slate-800 hover:text-slate-700 active:text-slate-600 ml-2 dark:text-slate-100 hover:dark:text-slate-400 active:dark:text-slate-600  drop-shadow-sm" />
        </a>
        <a
          href="https://www.linkedin.com/in/adn%C3%A8ne-hamzaoui-14a185256/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-slate-800 hover:text-slate-700 active:text-slate-600 ml-2 dark:text-slate-100 hover:dark:text-slate-400 active:dark:text-slate-600 drop-shadow-sm" />
        </a>
      </div>
    </div>
  );
};
