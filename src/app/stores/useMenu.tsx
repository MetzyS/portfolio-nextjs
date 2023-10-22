import { create } from "zustand";

export interface Menu {
  menu: boolean;
  toggleMenu: (menu: keyof Menu) => void;
  closeMenu: (menu: keyof Menu) => void;
}

export const useMenu = create<Menu>()((set) => ({
  menu: false,
  toggleMenu: (menu) => set((state) => ({ [menu]: !state[menu] })),
  closeMenu: (menu) => set((state) => ({ [menu]: false })),
}));
