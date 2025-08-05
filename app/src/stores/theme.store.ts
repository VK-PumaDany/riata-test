import { create } from "zustand";
import { Theme } from "@/src/enums/theme.enum";

type ThmeStore = {
  theme: Theme;
  setTheme: (nextPosition: Theme) => void;
};

export const useThemeStore = create<ThmeStore>((set) => ({
  theme: Theme.LIGHT,
  setTheme: (theme) => {
    const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    set({ theme: currentTheme })
    localStorage.setItem("theme", currentTheme)
  },
}));
