import HeroEditorial from "@/components/sections/HeroEditorial";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import FooterContact from "@/components/sections/FooterContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <HeroEditorial />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <FooterContact />
    </main>
  );
}
