import { useAvatarColors, useHoveredPart } from "@/app/stores/useAvatarColors";
import { HoveredPart } from "@/app/stores/useAvatarColors";
import type { ColorChanger } from "@/app/stores/useAvatarColors";
import { AiFillCloseCircle } from "react-icons/ai";
export const AvatarColorPicker = (props: {
  part: keyof ColorChanger;
  colors: { color: string; displayColor: string }[];
  menu: keyof HoveredPart;
}) => {
  const { changeColor } = useAvatarColors();
  const { closeColorMenu } = useHoveredPart();
  return (
    <div className="absolute w-36 h-8 backdrop-blur-lg shadow-xl top-14 -left-5 rounded-sm">
      <div className="relative flex items-center justify-around h-full w-full dark:bg-black/20 bg-white/5 backdrop-blur-sm rounded-sm">
        {props.colors.map((color, index) => {
          return (
            <button
              type="button"
              className={
                "w-5 h-5 hover:-scale-[0.9] border-2 border-black/5 " +
                color.displayColor
              }
              onClick={() => {
                changeColor(props.part, color.color);
              }}
              key={"buttonColor-" + index}
            ></button>
          );
        })}
      </div>
      <button
        type="button"
        className="absolute rounded-full -top-3 -right-3 flex justify-center items-center bg-white/10 dark:bg-black/10"
        onClick={() => closeColorMenu(props.menu)}
      >
        <AiFillCloseCircle className="w-5 h-5  text-red-500 hover:text-red-400 active:text-red-300" />
      </button>
    </div>
  );
};
