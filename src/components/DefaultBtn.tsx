export const DefaultBtn = (props: {
  text?: string;
  className?: string;
  path?: string;
  download: boolean;
}) => {
  return (
    <a
      href={props.path}
      className={
        "flex p-3 bg-sky-600 dark:bg-blue-500 rounded-full text-white w-max h-5 justify-center items-center text-xs hover:bg-sky-500 hover:dark:bg-blue-400 active:bg-sky-400 active:dark:bg-blue-300 cursor-pointer " +
        props.className
      }
      download={props.download}
    >
      {props.text && props.text}
    </a>
  );
};
