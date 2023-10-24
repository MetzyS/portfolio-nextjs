import { create } from "zustand";

export interface DarkMode {
  dark: boolean;
  toggleDark: () => void;
}

export const useDarkMode = create<DarkMode>()((set) => ({
  dark: false,
  toggleDark: () => set((state) => ({ dark: !state.dark })),
}));
