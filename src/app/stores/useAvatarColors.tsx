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
  sleeve: "fill-yellow-100",
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
  resetAllHovered: (excludePart: keyof HoveredPart) => void;
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

  /**
   * Permet de passer tout les states a false sauf celui précisé
   * @param excludePart state a ne pas modifier
   */
  resetAllHovered: (excludePart) => {
    // Liste du nom de chaque states
    let stateList: (keyof HoveredPart)[] = [
      "shirtIsHovered",
      "skinIsHovered",
      "sleeveIsHovered",
      "hairBandIsHovered",
      "laptopIsHovered",
    ];
    // Filtre le tableau pour retirer celui précisé par "excludePart
    // Passe tout les states filtrés en false
    stateList
      .filter((stateKey) => stateKey !== excludePart)
      .forEach((stateKey) => {
        set((prevState) => ({ ...prevState, [stateKey]: false }));
      });
  },
}));
