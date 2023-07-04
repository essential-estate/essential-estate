import Image from "next/image";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Agents } from "./sections/Agents";
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <Hero></Hero>
      <About></About>
      <Agents></Agents>
    </main>
  );
}
