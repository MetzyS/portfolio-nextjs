import { useMenu } from "@/app/stores/useMenu";
export const MenuBtn = () => {
  const { menu, toggleMenu } = useMenu();
  return (
    <button
      type="button"
      className={`flex flex-col ${
        menu ? "gap-0" : "gap-1"
      } justify-center rounded-full hover:bg-slate-200 hover:dark:bg-slate-700 active:bg-slate-300 active:dark:bg-slate-500 h-10 w-10 items-center transition-all`}
      onClick={() => toggleMenu("menu")}
    >
      <span
        className={`border-0 border-b-2 border-b-slate-800 dark:border-b-zinc-200 w-4 block rotate-0 transition-all ${
          menu ? "translate-y-[2px] rotate-45" : "rotate-0"
        }`}
      />
      <span
        className={`border-0 border-b-2 border-b-slate-800 dark:border-b-zinc-200 w-4 ${
          menu ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`border-0 border-b-2 border-b-slate-800 dark:border-b-zinc-200 w-4 block rotate-0 transition-all ${
          menu ? "-translate-y-[2px] rotate-[-45deg]" : "rotate-0"
        }`}
      />
    </button>
  );
};
