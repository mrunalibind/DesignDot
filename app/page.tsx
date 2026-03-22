import About from "@/components/About";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import Topic from "@/components/Topic";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Topic/>
      <About/>
      <Insights/>
    </>
  );
}
