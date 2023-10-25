import { NavLink } from "./NavLink";
import { AiOutlineHome } from "react-icons/ai";
export const SideBar = (props: { state: boolean }) => {
  return (
    <div
      className={`flex fixed flex-col gap-4 ${
        props.state ? "w-64" : "w-0"
      } h-full mt-12 pt-6 pl-3 border-0 border-r border-t border-slate-200 dark:border-slate-600 lg:hidden text-sm text-slate-800 z-20 bg-white dark:bg-slate-800`}
    >
      <NavLink
        text="Accueil"
        path="/"
        icon={AiOutlineHome}
        iconClass="w-5 h-5"
      />
      <NavLink
        text="Projets"
        path="/"
        icon={AiOutlineHome}
        iconClass="w-5 h-5"
      />
      <NavLink
        text="Curriculum"
        path="/"
        icon={AiOutlineHome}
        iconClass="w-5 h-5"
      />
      <NavLink
        text="Contact"
        path="/"
        icon={AiOutlineHome}
        iconClass="w-5 h-5"
      />
      <span className="mt-36 text-xs font-semibold text-slate-800">
        Tous droits réservés metzys.net
      </span>
    </div>
  );
};
