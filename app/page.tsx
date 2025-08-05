"use client";
import { useThemeStore } from "@/src/stores/theme.store";

export default function Home() {
  const { theme, setTheme } = useThemeStore((state) => state);



  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen bg-yellow-700 dark:bg-slate-800">
      Tema actual {theme}
      <button onClick={() => setTheme(theme)}>Cambiar tema</button>
    </div>
  );
}
