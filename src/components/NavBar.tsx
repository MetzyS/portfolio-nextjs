"use client";
import Image from "next/image";
import { SideBar } from "./SideBar";
import { ContactBtn } from "./ContactBtn";
import { NavLink } from "./NavLink";
import { IoMenuOutline } from "react-icons/io5";
import Logo from "../../public/metzys.svg";
import { useMenu } from "@/app/stores/useMenu";
export const NavBar = () => {
  const { menu, toggleMenu, closeMenu } = useMenu();
  return (
    <header className="col-span-full h-16 px-6 z-20">
      <nav className="flex justify-between w-full items-center h-full border-0 border-b lg:border-b-0">
        <div className="flex justify-between w-full lg:w-fit lg:block">
          <button
            type="button"
            className="block lg:hidden"
            onClick={() => toggleMenu("menu")}
          >
            <IoMenuOutline className="w-6 h-6 text-slate-800" />
          </button>
          <a href="/">
            <Image src={Logo} width={45} alt="Logo" priority={true} />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-20">
          <NavLink text="Accueil" path="/" />
          <NavLink text="Projets" path="/projects" />
          <NavLink text="CV" path="/curriculum" />
          <NavLink text="CV" path="/" />
        </div>
        <div>
          <ContactBtn className="hidden lg:block" />
        </div>
      </nav>
      {menu && (
        <div className="fixed w-full h-full bg-slate-950 opacity-10 z-10 lg:hidden" />
      )}
      {menu && <SideBar />}
    </header>
  );
};
