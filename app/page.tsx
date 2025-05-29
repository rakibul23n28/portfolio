import Hero from "@/components/Hero";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import CetegoryWrapper from "@/components/client/CetegoryWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <CetegoryWrapper />
      <About />
      <Contact />
    </>
  );
}
