"use client";
import { DefaultBtn } from "@/components/DefaultBtn";
import { DecorationTag } from "@/components/DecorationTag";
import { NavBar } from "@/components/NavBar";
import { Ubuntu } from "@next/font/google";
import { Inconsolata } from "@next/font/google";
import { AvatarBust } from "@/components/AvatarBust";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { SiPhp, SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useHoveredPart } from "./stores/useAvatarColors";
import { AvatarColorPicker } from "@/components/AvatarColorPicker";
import { useAvatarColors } from "./stores/useAvatarColors";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const ubuntu_mono = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export default function Home() {
  const {
    shirtIsHovered,
    skinIsHovered,
    sleeveIsHovered,
    hairBandIsHovered,
    laptopIsHovered,
    toggleIsHovered,
  } = useHoveredPart();

  const { changeColor } = useAvatarColors();
  const shirtColors = [
    { color: "fill-yellow-600", displayColor: "bg-yellow-500" },
    { color: "fill-red-600", displayColor: "bg-red-600" },
    { color: "fill-blue-600", displayColor: "bg-blue-600" },
    { color: "fill-green-600", displayColor: "bg-green-600" },
  ];
  const skinColor = [
    { color: "fill-orange-200", displayColor: "bg-orange-200" },
    { color: "fill-orange-300", displayColor: "bg-orange-300" },
    { color: "fill-yellow-900", displayColor: "bg-yellow-900" },
    { color: "fill-amber-950", displayColor: "bg-amber-950" },
  ];
  const sleeveColor = [
    { color: "fill-yellow-100", displayColor: "bg-yellow-100" },
    { color: "fill-red-100", displayColor: "bg-red-100" },
    { color: "fill-blue-100", displayColor: "bg-blue-100" },
    { color: "fill-lime-100", displayColor: "bg-lime-100" },
  ];
  const hairBandColor = [
    { color: "fill-yellow-100", displayColor: "bg-yellow-100" },
    { color: "fill-red-100", displayColor: "bg-red-100" },
    { color: "fill-blue-100", displayColor: "bg-blue-100" },
    { color: "fill-lime-100", displayColor: "bg-lime-100" },
  ];
  const laptopColor = [
    { color: "fill-slate-100", displayColor: "bg-slate-100" },
    { color: "fill-slate-300", displayColor: "bg-slate-300" },
    { color: "fill-slate-500", displayColor: "bg-slate-500" },
    { color: "fill-slate-950", displayColor: "bg-slate-950" },
  ];
  return (
    <>
      <div
        className={
          "col-span-full md:col-start-1 md:col-end-4 flex flex-col w-full h-full mt-6 p-4 text-slate-800 dark:text-slate-100 " +
          ubuntu.className
        }
      >
        <DecorationTag text="<html>" className="text-xs xl:text-sm" />
        <DecorationTag text="<body>" className="ml-4 text-xs xl:text-sm" />
        <DecorationTag text="<h1>" className="ml-6 mt-4 text-xs xl:text-sm" />
        <div className="ml-6 mt-4 text-5xl xl:text-8xl md:text-7xl font-bold w-full">
          <h1 className="drop-shadow-md">Hello!</h1>
          <p className="text-2xl md:text-4xl xl:text-6xl">
            <span>Je suis </span>
            <span className="text-sky-600 dark:text-blue-500 drop-shadow-md">
              Adnène
            </span>
            ,
          </p>
          <p className="text-2xl md:text-4xl xl:text-6xl">
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
            className={
              "w-50 p-6 xl:p-8 rounded-md xl:text-sm font-normal tracking-widest lg:tracking-[0.15em] " +
              ubuntu_mono.className
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
      <div className="hidden md:block relative w-80 h-80 lg:w-96 lg:h-96 mt-20 xl:mt-32">
        <DecorationTag
          text="<svg>"
          className="absolute top-24 left-20 z-10 text-xs text-opacity-20 dark:text-opacity-10"
        />
        <SiNextdotjs className="absolute top-36 left-1 lg:top-44 xl:top-48 xl:left-0 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-slate-900 dark:text-white z-10 shadow-md hover:dark:text-black" />
        <SiPhp className="absolute top-6 -right-5 lg:top-8 lg:-right-3 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-indigo-700 dark:text-white z-10 shadow-md hover:dark:text-indigo-700" />
        <FaReact className="absolute top-56 -right-2 lg:top-72 lg:right-0 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-sky-400 dark:text-white z-10 shadow-md hover:dark:text-sky-400" />
        <div className="relative rounded-full w-80 h-80 lg:w-96 lg:h-96 overflow-hidden drop-shadow-xl shadow-inner bg-gray-100 dark:bg-slate-700 col-span-3 col-start-4 ml-6">
          <AvatarBust className="absolute -top-3 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]" />
        </div>
        {shirtIsHovered && (
          <AvatarColorPicker
            colors={shirtColors}
            part="shirt"
            menu="shirtIsHovered"
          />
        )}
        {skinIsHovered && (
          <AvatarColorPicker
            colors={skinColor}
            part="skin"
            menu="skinIsHovered"
          />
        )}
        {sleeveIsHovered && (
          <AvatarColorPicker
            colors={sleeveColor}
            part="sleeve"
            menu="sleeveIsHovered"
          />
        )}
        {hairBandIsHovered && (
          <AvatarColorPicker
            colors={hairBandColor}
            part="hairBand"
            menu="hairBandIsHovered"
          />
        )}
        {laptopIsHovered && (
          <AvatarColorPicker
            colors={laptopColor}
            part="laptop"
            menu="laptopIsHovered"
          />
        )}
      </div>
    </>
  );
}
