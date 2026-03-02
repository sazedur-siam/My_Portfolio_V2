import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import HeroImg from "../../images/HeroImage.png";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  Span,
  SubTitle,
  TextLoop,
  Title,
} from "./HeroStyle";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </Span>
              </TextLoop>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SubTitle>{Bio.description}</SubTitle>
            </motion.div>
          </HeroLeftContainer>

          <HeroRightContainer>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Img src={HeroImg} alt="hero-image" />
            </motion.div>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
