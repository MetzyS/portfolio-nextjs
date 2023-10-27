"use client";
import { useHoveredPart } from "@/app/stores/useAvatarColors";
import { AvatarBust } from "@/components/AvatarBust";
import { AvatarColorPicker } from "@/components/AvatarColorPicker";
import { DecorationTag } from "@/components/DecorationTag";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPhp } from "react-icons/si";

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

export const MainAvatar = () => {
  const {
    shirtIsHovered,
    skinIsHovered,
    sleeveIsHovered,
    hairBandIsHovered,
    laptopIsHovered,
  } = useHoveredPart();
  return (
    <>
      <div className="hidden md:block relative w-max h-max lg:w-max lg:h-max m-auto xl:ml-10 md:col-start-4 md:col-end-7">
        <DecorationTag
          text="<svg>"
          className="absolute top-24 left-20 z-10 text-xs text-opacity-20 dark:text-opacity-10"
        />
        <SiNextdotjs className="absolute top-36 left-1 lg:top-44 xl:top-48 xl:left-0 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-slate-900 dark:text-white z-10 shadow-md hover:dark:text-black" />
        <SiPhp className="absolute top-6 -right-2 lg:top-8 lg:right-1 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-indigo-700 dark:text-white z-10 shadow-md hover:dark:text-indigo-700" />
        <FaReact className="absolute top-56 right-1 lg:top-72 lg:right-3 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-sky-400 dark:text-white z-10 shadow-md hover:dark:text-sky-400" />
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
};
