export const NavLink = (props: {
  text: string;
  path: string;
  className?: string;
  icon?: React.ElementType;
  iconClass?: string;
}) => {
  return (
    <a
      href={props.path}
      className={"flex gap-3 items-center " + props.className}
    >
      {props.icon && (
        <span>
          <props.icon className={props.iconClass} />
        </span>
      )}
      <span>{props.text}</span>
    </a>
  );
};
