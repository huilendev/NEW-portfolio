// src/app/page.tsx
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Experience from "../../components/sections/Experience";
import Projects from "../../components/sections/Projects";
import Contact from "../../components/sections/Contact";
import { BaseHubFormWrapper } from "@/components/sections/BaseHubFormWrapper";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact>
        <BaseHubFormWrapper />
      </Contact>
    </div>
  );
}
