import { create } from "zustand";

export interface ColorChanger {
  shirt: string;
  skin: string;
  sleeve: string;
  hairBand: string;
  laptop: string;
  changeColor: (item: keyof ColorChanger, value: string) => void;
}

export const useAvatarColors = create<ColorChanger>()((set) => ({
  shirt: "fill-yellow-600",
  skin: "fill-orange-300",
  sleeve: "fill-lime-100",
  hairBand: "fill-white",
  laptop: "fill-slate-300",
  changeColor: (item, value) => set((state) => ({ [item]: value })),
}));

export interface HoveredPart {
  shirtIsHovered: boolean;
  skinIsHovered: boolean;
  sleeveIsHovered: boolean;
  hairBandIsHovered: boolean;
  laptopIsHovered: boolean;
  toggleIsHovered: (part: keyof HoveredPart) => void;
  setIsHovered: (part: keyof HoveredPart, value: boolean) => void;
  closeColorMenu: (part: keyof HoveredPart) => void;
}
export const useHoveredPart = create<HoveredPart>()((set) => ({
  shirtIsHovered: false,
  skinIsHovered: false,
  sleeveIsHovered: false,
  hairBandIsHovered: false,
  laptopIsHovered: false,
  toggleIsHovered: (part) => set((state) => ({ [part]: !state[part] })),
  setIsHovered: (part, value) => set((state) => ({ [part]: value })),
  closeColorMenu: (part) => set((state) => ({ [part]: false })),
}));
