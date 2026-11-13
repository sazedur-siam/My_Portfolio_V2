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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience tone="muted" />
        <Experience
          id="training"
          eyebrow="Foundation"
          title="Training"
          description="Internships and hands-on training that built my foundation in full-stack development."
          items={training}
        />
        <Projects setOpenModal={setOpenModal} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
