import styled from "styled-components";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.gradient};
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 20px;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Space Grotesk', sans-serif;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
`;

const SocialMediaIcon = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.glassBorder};
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 20px ${({ theme }) => theme.primary + "30"};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Logo>Sazedur Rahman</Logo>
        </motion.div>

        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.github}
            target="_blank"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>\u00a9 2026 Sazedur Rahman. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
