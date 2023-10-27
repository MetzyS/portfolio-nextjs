"use client";
import { DecorationTag } from "@/components/DecorationTag";
import { AvatarBust } from "@/components/AvatarBust";
import { FaReact } from "react-icons/fa";
import { SiPhp, SiNextdotjs } from "react-icons/si";
import { useHoveredPart } from "./stores/useAvatarColors";
import { AvatarColorPicker } from "@/components/AvatarColorPicker";
import { MainDescription } from "@/components/Sections/Home/MainDescription";
import { MainAvatar } from "@/components/Sections/Home/MainAvatar";

export default function Home() {
  return (
    <>
      <div className="md:grid md:grid-cols-6">
        <MainDescription />
        <MainAvatar />
      </div>
    </>
  );
}
