import { RevealWrapper } from "next-reveal";
import { MainDescription } from "./MainDescription";
import { MainAvatar } from "./MainAvatar";
import NoSsr from "@/utils/NoSsr";

export function HomeSection() {
  return (
    <RevealWrapper
      delay={0}
      useDelay="always"
      opacity={0}
      reset={false}
      className="load-hidden"
    >
      <div className="md:grid md:grid-cols-6 min-h-screen relative" id="home">
        <div className="flex col-span-full m-auto min-h-screen">
          <MainDescription />
          <MainAvatar />
        </div>
      </div>
    </RevealWrapper>
  );
}
