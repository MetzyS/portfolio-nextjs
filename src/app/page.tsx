import { MainDescription } from "@/components/Sections/Home/MainDescription";
import { MainAvatar } from "@/components/Sections/Home/MainAvatar";
import { About } from "@/components/Sections/About/About";

export default function Home() {
  return (
    <>
      <div className="md:grid md:grid-cols-6 min-h-screen relative">
        <div className="flex col-span-full m-auto min-h-screen">
          <MainDescription />
          <MainAvatar />
        </div>
      </div>
      <section className="mx-10 relative">
        {/* <div className="shadow-md border-2 border-t-0 border-slate-100 dark:border-slate-700 mb-12" /> */}
        <div className="shadow-md border-2 border-t-0 border-slate-100 dark:border-slate-700 mb-12 border-dashed" />
        <About />
      </section>
    </>
  );
}
