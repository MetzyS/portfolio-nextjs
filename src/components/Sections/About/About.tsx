import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const About = () => {
  return (
    <>
      <h1 className={"text-3xl font-bold " + ubuntu.className}>
        Qui suis-je ?
      </h1>
    </>
  );
};
