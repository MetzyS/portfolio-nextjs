import { DefaultBtn } from "@/components/DefaultBtn";
import { DecorationTag } from "@/components/DecorationTag";
import { NavBar } from "@/components/NavBar";
import { Ubuntu } from "@next/font/google";
import { AvatarBust } from "@/components/AvatarBust";

const roboto = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export default function Home() {
  return (
    <>
      <div
        className={
          "col-span-full md:col-start-1 md:col-end-4 flex flex-col w-full h-full mt-6 p-4 text-slate-800 dark:text-slate-100 " +
          roboto.className
        }
      >
        <DecorationTag text="<html>" />
        <DecorationTag text="<body>" className="ml-2" />
        <DecorationTag text="<h1>" className="ml-2 mt-4" />
        <h1 className="ml-2 mt-6 text-5xl md:text-7xl font-bold w-full">
          Hello! <br />
          <p className="text-2xl md:text-4xl">
            Je suis{" "}
            <span className="text-sky-600 dark:text-blue-500">Adnène</span>,
          </p>
          <p className="text-2xl md:text-4xl">
            développeur web.
            <DecorationTag text="</h1>" className="font-normal ml-2" />
          </p>
        </h1>
        <div className="ml-2 mt-4">
          <DecorationTag text="<p>" />
          <h2 className="text-xl md:text-3xl">Développeur Full-Stack</h2>
          <DecorationTag text="</p>" />
        </div>
        <div className="flex flex-col ml-2 mt-6">
          <DefaultBtn
            text="Télécharger mon CV"
            className="w-50 p-6 rounded-md"
          />
        </div>
      </div>
      <div
        className="hidden md:block relative rounded-full w-80 h-80 overflow-hidden drop-shadow-xl shadow-inner bg-gray-100 dark:bg-slate-700 mt-12 col-span-3 col-start-
      "
      >
        <DecorationTag text="<svg>" className="absolute right-5" />
        <AvatarBust
          width={350}
          height={350}
          skinColor="fill-orange-300"
          sleeveColor="fill-lime-800"
          shirtColor="fill-yellow-600"
          laptopColor="fill-slate-300 dark:fill-slate-200"
          hairBandColor="fill-white"
          className="absolute -top-3"
        />
      </div>
    </>
  );
}
