import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-12 xl:max-w-[1440px] lg:m-auto">
      <NavBar />
    </main>
  );
}
