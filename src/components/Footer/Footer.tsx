import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MetzysLogo } from "../MetzysLogo";

export default function Footer() {
  return (
    <footer className="h-auto p-4 gap-6 w-full dark:bg-slate-600/30 bg-slate-300/25 flex flex-col">
      <MetzysLogo
        width={40}
        height={40}
        className="fill-sky-600 dark:fill-blue-500 group-hover:fill-sky-500 group-hover:dark:fill-blue-400 transition-all self-center"
      />
      <div className="flex gap-5 w-full items-center justify-center">
        <span className="h-[2px] w-1/5 dark:bg-slate-500 bg-slate-400/30 rounded-full"></span>
        <div className="flex gap-4">
          <a
            href="https://www.github.com/MetzyS"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub className="w-6 h-6 text-slate-800 hover:text-slate-700 active:text-slate-600 dark:text-slate-100 hover:dark:text-slate-400 active:dark:text-slate-600  drop-shadow-sm" />
          </a>
          <a
            href="https://www.linkedin.com/in/adn%C3%A8ne-hamzaoui-14a185256/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="w-6 h-6 text-slate-800 hover:text-slate-700 active:text-slate-600 dark:text-slate-100 hover:dark:text-slate-400 active:dark:text-slate-600 drop-shadow-sm" />
          </a>
        </div>
        <span className="h-[2px] w-1/5 dark:bg-slate-500 bg-slate-400/30 rounded-full"></span>
      </div>
      <div className="flex justify-center items-center gap-4 text-sm font-semibold">
        <a
          href="#"
          className="p-2 hover:dark:bg-slate-600 hover:bg-slate-300/50 rounded-lg"
        >
          Accueil
        </a>
        <a
          href="#about"
          className="p-2 hover:dark:bg-slate-600 hover:bg-slate-300/50 rounded-lg"
        >
          A propos
        </a>
        <a
          href="#projets"
          className="p-2 hover:dark:bg-slate-600 hover:bg-slate-300/50 rounded-lg"
        >
          Projets
        </a>
        <a
          href="#parcours"
          className="p-2 hover:dark:bg-slate-600 hover:bg-slate-300/50 rounded-lg"
        >
          Parcours
        </a>
      </div>
      <p className="text-xs text-center text-slate-400/60 dark:text-slate-400">
        Tous droits reservés
      </p>
    </footer>
  );
}
