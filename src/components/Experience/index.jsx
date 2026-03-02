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

const Desc = styled.div`
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

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const StyledTimelineDot = styled(TimelineDot)`
  width: 16px !important;
  height: 16px !important;
  background: ${({ theme }) => theme.gradient} !important;
  border: 3px solid ${({ theme }) => theme.primary} !important;
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.4) !important;
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  background: linear-gradient(180deg, #00d9ff, #7b61ff) !important;
  width: 3px !important;
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
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
            Professional journey and contributions to innovative software
            solutions across diverse projects and technologies.
          </Desc>
        </motion.div>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <StyledTimelineDot />
                  {index !== experiences.length - 1 && (
                    <StyledTimelineConnector />
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
