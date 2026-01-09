import HeroEditorial from "@/components/sections/HeroEditorial";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import FooterContact from "@/components/sections/FooterContact";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 text-zinc-900 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="dashboard-shell">
          <HeroEditorial />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <FooterContact />
        </div>
      </div>
    </main>
  );
}
