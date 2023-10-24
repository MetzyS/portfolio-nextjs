import { DefaultBtn } from "@/components/DefaultBtn";
import { DecorationTag } from "@/components/DecorationTag";
import { NavBar } from "@/components/NavBar";
import { Ubuntu } from "@next/font/google";
import { AvatarBust } from "@/components/AvatarBust";
import { FaReact } from "react-icons/fa";
import { SiPhp, SiNextdotjs } from "react-icons/si";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export default function Home() {
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
          <h1>Hello!</h1>
          <p className="text-2xl md:text-4xl xl:text-6xl">
            <span>Je suis </span>
            <span className="text-sky-600 dark:text-blue-500">Adnène</span>,
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
            className="w-50 p-6 xl:p-8 rounded-md xl:text-xl xl:font-thin "
          />
        </div>
      </div>
      <div className="hidden md:block relative w-96 h-96 mt-20 xl:mt-32">
        <DecorationTag
          text="<svg>"
          className="absolute top-24 left-20 z-10 text-xs text-opacity-20"
        />
        <SiNextdotjs className="absolute top-48 left-0 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-slate-900 dark:text-white z-10 shadow-md" />
        <SiPhp className="absolute top-8 -right-3 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-indigo-700 dark:text-white z-10 shadow-md" />
        <FaReact className="absolute top-72 right-0 bg-white dark:bg-slate-700 rounded-full w-20 h-20 p-4 text-sky-400 dark:text-white z-10 shadow-md" />
        <div className="relative rounded-full w-96 h-96 overflow-hidden drop-shadow-xl shadow-inner bg-gray-100 dark:bg-slate-700 col-span-3 col-start-4 ml-6">
          <AvatarBust
            width={450}
            height={450}
            skinColor="fill-orange-300"
            sleeveColor="fill-lime-800"
            shirtColor="fill-yellow-600"
            laptopColor="fill-slate-300 dark:fill-slate-200"
            hairBandColor="fill-white"
            className="absolute -top-3"
          />
          SiPhp
        </div>
      </div>
    </>
  );
}
