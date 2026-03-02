import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { motion } from "framer-motion";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../Cards/ExperienceCard";

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
  padding: 0 20px;
  gap: 16px;
`;

const Title = styled.div`
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

const Desc = styled.div`
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

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Experience</Title>
          <Desc>
            My work experience as a software engineer and working on different
            companies and projects.
          </Desc>
        </motion.div>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector
                      style={{
                        background: "linear-gradient(180deg, #00D9FF, #7B61FF)",
                        width: "2px",
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <ExperienceCard experience={experience} />
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
