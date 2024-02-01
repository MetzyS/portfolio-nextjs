import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const Journey = (props: { className?: string }) => {
  return (
    <div className="flex flex-col">
      <h1
        className={
          "text-xl xl:text-4xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-xl my-20 text-center " +
          ubuntu.className
        }
      >
        Parcours ⌛
      </h1>
    </div>
  );
};
