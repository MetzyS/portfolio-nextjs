"use client";
// import { NavLink } from "./NavLink";
// import { PiLinkedinLogoLight } from "react-icons/pi";
// import { VscGithubAlt } from "react-icons/vsc";
// import { GiPlainCircle } from "react-icons/gi";
import Logo from "../../public/metzys.svg";
import { useMenu } from "@/app/stores/useMenu";
import { Roboto } from "@next/font/google";
import { Roboto_Mono } from "@next/font/google";
import Image from "next/image";
import { DefaultBtn } from "./DefaultBtn";
import { MenuBtn } from "./MenuBtn";
import { SideBar } from "./SideBar";
import { MetzysLogo } from "./MetzysLogo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

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
        <div className="flex gap-3 col-start-1 col-span-1 items-center">
          <MenuBtn />
          <a href="/">
            <MetzysLogo
              width={30}
              height={30}
              className="fill-sky-600 hover:fill-sky-500 dark:fill-blue-500 hover:dark:fill-blue-400"
            />
          </a>
        </div>
        <div className="flex col-start-2 justify-center items-center">
          {/* <span>Adnène H.</span> */}
        </div>
        <div className="flex items-center justify-end pr-2 gap-5">
          <ThemeSwitcher />
          <DefaultBtn text="Contact" className="font-semibold" />
        </div>
      </nav>
      {menu && (
        <div className="absolute w-full h-full bg-slate-900 border-0 border-t border-t-slate-200 opacity-50 dark:opacity-80 mt-12 z-10" />
      )}
      {menu && <SideBar state={menu} />}
    </header>
  );
};
