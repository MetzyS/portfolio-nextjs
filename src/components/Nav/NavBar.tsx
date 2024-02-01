"use client";
import { useMenu } from "@/app/stores/useMenu";
import { Roboto } from "@next/font/google";
import { Roboto_Mono } from "@next/font/google";
import { DefaultBtn } from "../DefaultBtn";
import { MenuBtn } from "../MenuBtn";
import { MetzysLogo } from "../MetzysLogo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { NavLink } from "./NavLink";
import { HiCodeBracket } from "react-icons/hi2";
import { PiPathFill } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

let active = true;

export const NavBar = () => {
  const { menu, toggleMenu, closeMenu } = useMenu();
  return (
    <header className="w-full">
      <nav className="fixed bg-white dark:bg-slate-800 w-full h-13 grid grid-cols-3 p-1 border-0 border-b border-b-slate-200 dark:border-b-slate-600 z-20">
        <div className="flex gap-3 items-center w-max">
          <MenuBtn />
          {!menu && (
            <a href="/" className="group">
              <MetzysLogo
                width={30}
                height={30}
                className="fill-sky-600 dark:fill-blue-500 group-hover:fill-sky-500 group-hover:dark:fill-blue-400 transition-all"
              />
            </a>
          )}
        </div>
        <div className="flex col-start-2 justify-center items-center">
          <div
            className={`ml-5 md:ml-0 flex items-center w-max ${
              menu ? "opacity-100" : "opacity-0"
            } transition-all`}
          >
            <NavLink
              text={"A propos"}
              path="#about-section"
              icon={AiOutlineQuestionCircle}
              className="text-xs md:text-sm lg:text-base transition-all"
            />
            <span className="w-0 h-5 border-0 border-r border-slate-300 dark:border-slate-700"></span>
            <NavLink
              text={"Parcours"}
              path="#journey-section"
              icon={PiPathFill}
              className="text-xs md:text-sm lg:text-base transition-all"
            />
            <span className="w-0 h-5 border-0 border-r border-slate-300 dark:border-slate-700"></span>
            <NavLink
              text={"Projets"}
              path="/"
              icon={HiCodeBracket}
              className="text-xs md:text-sm lg:text-base transition-all"
            />
          </div>
        </div>
        <div
          className={`items-center justify-end pr-2 gap-5 ${
            menu ? "hidden" : "flex"
          }`}
        >
          <ThemeSwitcher />
          <DefaultBtn
            text="Contact"
            className="font-semibold transition-all"
            download={false}
          />
        </div>
      </nav>
    </header>
  );
};
