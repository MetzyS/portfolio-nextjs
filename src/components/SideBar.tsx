import { NavLink } from "./NavLink";
import { AiOutlineHome } from "react-icons/ai";
export const SideBar = () => {
  return (
    <div className="flex fixed flex-col gap-4 w-52 h-full pt-6 border-0 border-r lg:hidden text-sm text-slate-800 z-20 bg-white">
      <NavLink
        text="Accueil"
        path="/"
        className="p-2 font-semibold hover:bg-slate-100 active:bg-slate-200 mr-5 rounded-md"
        icon={AiOutlineHome}
        iconClass="w-5 h-5"
      />
      <NavLink
        text="Projets"
        path="/"
        className="p-2 font-semibold hover:bg-slate-100 active:bg-slate-200 mr-5 rounded-md"
        icon={AiOutlineHome}
        iconClass="w-5 h-5"
      />
      <NavLink
        text="Curriculum"
        path="/"
        className="p-2 font-semibold hover:bg-slate-100 active:bg-slate-200 mr-5 rounded-md"
        icon={AiOutlineHome}
        iconClass="w-5 h-5"
      />
      <NavLink
        text="Contact"
        path="/"
        className="p-2 font-semibold hover:bg-slate-100 active:bg-slate-200 mr-5 rounded-md"
        icon={AiOutlineHome}
        iconClass="w-5 h-5"
      />
      <span className="mt-36 text-xs font-semibold text-slate-800">
        Tous droits réservés metzys.net
      </span>
    </div>
  );
};
