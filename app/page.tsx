import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <hr className="mb-8 border-rose-500" /> */}
      <Projects />
      <Contact />
    </>
  );
}
