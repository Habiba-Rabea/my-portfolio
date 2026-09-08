import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0712] text-slate-100">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience/>
      <Contact/>
    </main>
  );
}