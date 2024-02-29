"use client";
import { imagesCarousel } from "@/app/data/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import StickyTitle from "../StickyTitle";

export default function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const handlePrevImage = () => {
    if (imageIndex - 1 < 0) {
      setImageIndex(imagesCarousel.length - 1);
      console.log(imagesCarousel.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
      console.log(imageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (imageIndex + 1 > imagesCarousel.length - 1) {
      setImageIndex(0);
      console.log(0);
    } else {
      setImageIndex(imageIndex + 1);
      console.log(imageIndex + 1);
    }
  };

  const handleThumbnailClick = (id: number) => {
    setImageIndex(id);
  };

  return (
    <>
      <StickyTitle type="subtitle" title="Créations graphiques" />
      <p className="text-sm leading-normal text-slate-700 dark:text-slate-400 mt-2">
        Voici un petit florilège de mes créations graphiques (Photoshop,
        Illustrator, Figma, inDesign..)
      </p>
      <div style={{ userSelect: "none" }}>
        <div className="mb-8 relative flex items-center justify-center">
          <FaArrowLeft
            className="absolute left-0 w-8 h-8 rounded-full p-2 dark:bg-slate-500/80 dark:hover:bg-slate-500 dark:text-slate-200/60 dark:hover:text-slate-200 cursor-pointer text-slate-600/60 hover:text-slate-600 bg-slate-300/80 hover:bg-slate-300"
            onClick={handlePrevImage}
          />
          <img
            src={imagesCarousel[imageIndex].src}
            alt={imagesCarousel[imageIndex].alt}
            className="transition-all cursor-zoom-in rounded-md max-h-96 object-contain"
          />
          {/* <span className="absolute bottom-5 bg-black/20 p-2 rounded-lg">
            {imagesCarousel[imageIndex].desc}
          </span> */}
          <FaArrowRight
            className="absolute right-0 w-8 h-8 rounded-full p-2 dark:bg-slate-500/80 dark:hover:bg-slate-500 dark:text-slate-200/60 dark:hover:text-slate-200 cursor-pointer text-slate-600/60 hover:text-slate-600 bg-slate-300/80 hover:bg-slate-300"
            onClick={handleNextImage}
          />
        </div>
        <div className="flex h-24 w-full overflow-y-scroll gap-2">
          {imagesCarousel.map((item, index) => (
            <img
              src={item.src}
              alt={item.alt}
              className={`cursor-pointer rounded-md max-h-20 border border-transparent ${
                item.id == imageIndex
                  ? "border-slate-800 dark:border-slate-100"
                  : ""
              }`}
              onClick={() => {
                handleThumbnailClick(item.id);
              }}
              key={"carousselimg-" + index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
