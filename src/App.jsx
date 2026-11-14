import { useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectDetails from "@/components/ProjectDetails";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { training } from "@/data/constants";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Navbar />
        <main className="flex flex-col gap-3">
          <Hero />
          <div className="py-10 md:py-14">
            <About />
            <Skills />
            <Experience />
            <Experience id="training" label="Training" items={training} />
            <Education />
          </div>
          <Projects setOpenModal={setOpenModal} />
          <Contact />
        </main>
        <Footer />
      </div>
      <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
