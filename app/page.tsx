import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
