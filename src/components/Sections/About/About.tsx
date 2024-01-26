import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const About = () => {
  return (
    <>
      <h1
        className={
          "text-2xl xl:text-5xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-md mb-12 " +
          ubuntu.className
        }
        id="about-section"
      >
        ✍️ Qui suis-je ?
      </h1>
      <p className="flex flex-col text-base md:text-lg xl:text-xl">
        <span className="mb-2 md:mb-0">
          Ancien directeur d'ACM avec plusieurs années d'expérience dans le
          monde de l'animation.
        </span>
        <span>
          J'ai décidé de me reconvertir dans le développement web en 2022, en
          raison de ma passion pour l'informatique, le code et les jeux vidéo.
        </span>
      </p>
    </>
  );
};
