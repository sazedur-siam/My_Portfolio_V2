import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { skills } from "../../data/constants";

// Modern Animations
const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 16px;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.02em;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: ${({ theme }) => theme.gradient};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;

    &::after {
      width: 80px;
      height: 3px;
    }
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 24px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 40px;
  justify-content: center;
`;

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 550px;
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 24px;
  padding: 32px 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.glassHover},
      transparent
    );
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadowHover};
    border-color: ${({ theme }) => theme.primary}40;

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    max-width: 450px;
    padding: 24px 28px;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px 24px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 28px;
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
`;

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 2px solid ${({ theme }) => theme.glassBorder};
  border-radius: 16px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-4px) scale(1.05);
    box-shadow: ${({ theme }) => theme.glow};

    &::before {
      opacity: 0.1;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 16px;

    &:hover {
      transform: translateY(-2px) scale(1.02);
    }
  }

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 8px 14px;
    gap: 8px;
  }
`;

const SkillImage = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const SkillName = styled.span`
  position: relative;
  z-index: 1;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Skills</Title>
          <Desc>
            Here are some of the technologies and tools I've been working with
            to build amazing projects.
          </Desc>
        </motion.div>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList
                as={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skill.skills.map((item, idx) => (
                  <SkillItem
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkillImage src={item.image} alt={item.name} />
                    <SkillName>{item.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
