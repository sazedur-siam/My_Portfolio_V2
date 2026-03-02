import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCards";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./ProjectsStyle";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. From web apps to android
            apps. Here are some of my projects.
          </Desc>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ToggleButtonGroup>
            <ToggleButton
              active={toggle === "all"}
              onClick={() => setToggle("all")}
            >
              All
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={toggle === "web app"}
              onClick={() => setToggle("web app")}
            >
              WEB APPS
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={toggle === "android app"}
              onClick={() => setToggle("android app")}
            >
              ANDROID APPS
            </ToggleButton>
          </ToggleButtonGroup>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={toggle}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ width: "100%" }}
          >
            <CardContainer>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  layout
                >
                  <ProjectCard
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                </motion.div>
              ))}
            </CardContainer>
          </motion.div>
        </AnimatePresence>
      </Wrapper>
    </Container>
  );
};

export default Projects;
