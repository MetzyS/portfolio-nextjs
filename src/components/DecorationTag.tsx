import { Roboto_Mono } from "@next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const DecorationTag = (props: { text: string; className?: string }) => {
  return (
    <span
      className={
        props.className +
        " text-slate-400 cursor-default " +
        roboto_mono.className
      }
    >
      {props.text}
    </span>
  );
};
