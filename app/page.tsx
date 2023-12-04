import About from "@/components/About";
import Collab from "@/components/Collab";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Collab />
    </main>
  );
}
