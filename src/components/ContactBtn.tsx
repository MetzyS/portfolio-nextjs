"use client";
import { isMobile } from "react-device-detect";
import NoSsr from "@/utils/NoSsr";
import { useState } from "react";

export const ContactBtn = (props: { className?: string }) => {
  const [visibility, setVisibility] = useState("opacity-0");
  const opacityHandler = () => {
    setVisibility("opacity-100");
    setTimeout(() => {
      setVisibility("opacity-0");
    }, 1000);
    console.log("hey");
  };
  return (
    <NoSsr>
      {isMobile ? (
        <a
          href="mailto:contact@metzys.net"
          className="flex p-3 bg-sky-600 dark:bg-blue-500 rounded-full text-white w-max h-5 justify-center items-center text-xs hover:bg-sky-500 hover:dark:bg-blue-400 active:bg-sky-400 active:dark:bg-blue-300 cursor-pointer font-semibold transition-all"
        >
          Contact
        </a>
      ) : (
        <>
          <button
            type="button"
            className={
              "flex p-3 bg-sky-600 dark:bg-blue-500 rounded-full text-white w-max h-5 justify-center items-center text-xs hover:bg-sky-500 hover:dark:bg-blue-400 active:bg-sky-400 active:dark:bg-blue-300 cursor-pointer font-semibold transition-all relative"
            }
            onClick={() => {
              navigator.clipboard.writeText("contact@metzys.net");
              opacityHandler();
            }}
          >
            Contact
          </button>
          <span
            className={
              "absolute top-14 rounded-lg text-blue-600 dark:text-sky-300 text-xs font-medium bg-blue-600/10 dark:bg-sky-500/20 px-3 py-1 transition-all " +
              visibility
            }
          >
            Adresse email copiée!
          </span>
        </>
      )}
    </NoSsr>
  );
};
