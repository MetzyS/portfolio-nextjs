"use client";
import { useMenu } from "@/app/stores/useMenu";
import { Roboto } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { DefaultBtn } from "../DefaultBtn";
import { MenuBtn } from "../MenuBtn";
import { MetzysLogo } from "../MetzysLogo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { NavLink } from "./NavLink";
import { HiCodeBracket } from "react-icons/hi2";
import { PiPathFill } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { Fragment } from "react";

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
  const nav_links = [
    {
      id: 1,
      text: "Accueil",
      path: "/",
      icon: IoHomeOutline,
    },
    {
      id: 2,
      text: "A propos",
      path: "#about",
      icon: AiOutlineQuestionCircle,
    },
    {
      id: 3,
      text: "Projets",
      path: "#projets",
      icon: HiCodeBracket,
    },
    {
      id: 4,
      text: "Parcours",
      path: "#parcours",
      icon: PiPathFill,
    },
  ];
  return (
    <header className="w-full">
      <nav
        className={`fixed bg-white/20 backdrop-blur-xl dark:bg-slate-800/20 w-full h-13 flex p-1 border-0 border-b border-b-slate-200 dark:border-b-slate-600 z-50 ${
          menu ? "" : "justify-between"
        }`}
      >
        <div className="flex items-center w-max gap-3">
          <MenuBtn />
          {!menu && (
            <Link href="/" className="group">
              <MetzysLogo
                width={30}
                height={30}
                className="fill-sky-600 dark:fill-blue-500 group-hover:fill-sky-500 group-hover:dark:fill-blue-400 transition-all"
              />
            </Link>
          )}
        </div>
        <div className={menu ? "flex opacity-100 m-auto" : "hidden opacity-0"}>
          <div className="flex justify-center items-center">
            <div
              className={`md:ml-0 flex items-center w-max ${
                menu ? "opacity-100" : "opacity-0"
              } transition-all`}
            >
              {nav_links.map((item) => {
                return (
                  <Fragment key={"navlink-" + item.id}>
                    <NavLink
                      text={item.text}
                      path={item.path}
                      icon={item.icon}
                      className="text-xs md:text-sm lg:text-base transition-all"
                    />
                    <span className="w-0 h-5 border-0 border-r border-slate-300 dark:border-slate-700 last-of-type:hidden"></span>
                  </Fragment>
                );
              })}
            </div>
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
