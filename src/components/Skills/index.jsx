import { motion } from "framer-motion";
import styled from "styled-components";
import { skills } from "../../data/constants";

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
  font-size: 56px;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 38px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 20px;
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 32px;
  justify-content: center;
`;

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 550px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 2px solid ${({ theme }) => theme.glassBorder};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 32px 36px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 217, 255, 0.2);
    border-color: ${({ theme }) => theme.primary};

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    max-width: 450px;
    padding: 28px 32px;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    padding: 24px 28px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 24px;
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  position: relative;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled(motion.div)`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + "15"};
  border: 1px solid ${({ theme }) => theme.primary + "40"};
  border-radius: 10px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary + "25"};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 9px 14px;
    gap: 8px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 8px 12px;
    gap: 7px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const SkillName = styled.span``;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
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
            Technologies and tools I use to bring creative ideas to life and
            deliver high-quality software solutions.
          </Desc>
        </motion.div>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
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
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
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
