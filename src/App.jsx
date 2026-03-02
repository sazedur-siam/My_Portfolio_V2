import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { keyframes, ThemeProvider } from "styled-components";
import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { darkTheme, lightTheme } from "./utils/Themes.js";

// Modern Keyframe Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(5deg); }
  66% { transform: translateY(20px) rotate(-5deg); }
`;

const gradientShift = keyframes`
  0%, 100% { 
    background-position: 0% 50%;
    opacity: 0.15;
  }
  50% { 
    background-position: 100% 50%;
    opacity: 0.25;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
`;

// Advanced Gradient Orbs with Animation
const GradientOrb = styled.div`
  position: fixed;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  z-index: 0;
  animation: ${float} 20s ease-in-out infinite;

  &.orb1 {
    width: 800px;
    height: 800px;
    top: -300px;
    left: -300px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.primary}40 0%,
      transparent 70%
    );
    animation-delay: 0s;
  }

  &.orb2 {
    width: 600px;
    height: 600px;
    bottom: -200px;
    right: -200px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.accent}40 0%,
      transparent 70%
    );
    animation-delay: 7s;
  }

  &.orb3 {
    width: 700px;
    height: 700px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.secondary}30 0%,
      transparent 70%
    );
    animation-delay: 14s;
  }
`;

// Animated Grid Background
const GridBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(${({ theme }) => theme.glassBorder} 1px, transparent 1px),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.glassBorder} 1px,
      transparent 1px
    );
  background-size: 100px 100px;
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
`;

// Modern Section Wrapper with Gradient
const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: ${({ theme }) => theme.gradient};
    background-size: 200% 200%;
    opacity: 0.05;
    animation: ${gradientShift} 10s ease infinite;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          {/* Animated Background Elements */}
          <GridBackground />
          <GradientOrb className="orb1" />
          <GradientOrb className="orb2" />
          <GradientOrb className="orb3" />

          <ContentWrapper>
            <HeroSection />

            <SectionWrapper>
              <Skills />
            </SectionWrapper>

            <SectionWrapper>
              <Experience />
            </SectionWrapper>

            <SectionWrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            </SectionWrapper>

            <SectionWrapper>
              <Education />
            </SectionWrapper>

            <SectionWrapper>
              <Contact />
            </SectionWrapper>

            <Footer />
          </ContentWrapper>

          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
