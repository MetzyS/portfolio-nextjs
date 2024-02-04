import Image from "next/image";
import Link from "next/link";

export const NavLink = (props: {
  text: string;
  textClass?: string;
  path: string;
  className?: string;
  icon?: React.ElementType;
  iconClass?: string;
  image?: string;
  active?: boolean;
  customFont?: string;
}) => {
  return (
    <Link
      href={props.path}
      className={
        props.className +
        ` w-max flex gap-1 items-center text-slate-800 dark:text-slate-100 p-2 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 active:bg-slate-300 dark:active:bg-slate-600 rounded-md ${
          props.active ? "text-zinc-900" : " "
        }`
      }
    >
      {props.image && (
        <Image src={props.image} width={35} height={35} alt="Logo" />
      )}
      {props.icon && (
        <span className="hidden md:block">
          <props.icon className={props.iconClass} />
        </span>
      )}
      <span className={props.textClass ? props.textClass : ""}>
        {props.text}
      </span>
    </Link>
  );
};
