import styled, { keyframes } from "styled-components";

// Modern Animations
const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(2deg); 
  }
`;

const glowPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 40px ${props => props.theme?.primary || '#00D9FF'}40,
                0 0 80px ${props => props.theme?.primary || '#00D9FF'}20,
                inset 0 0 30px ${props => props.theme?.primary || '#00D9FF'}10;
  }
  50% { 
    box-shadow: 0 0 60px ${props => props.theme?.primary || '#00D9FF'}60,
                0 0 120px ${props => props.theme?.primary || '#00D9FF'}30,
                inset 0 0 50px ${props => props.theme?.primary || '#00D9FF'}20;
  }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px 80px;
  min-height: 100vh;
  align-items: center;
  
  @media (max-width: 960px) {
    padding: 100px 16px 60px;
    min-height: auto;
  }
  
  @media (max-width: 640px) {
    padding: 80px 16px 40px;
  }
  
  z-index: 1;
  overflow: hidden;
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  transform: translateX(-50%) translateY(-50%);
  
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 960px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 960px) {
    order: 1;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.glow};
  animation: ${float} 6s ease-in-out infinite;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: ${({ theme }) => theme.glowStrong};
  }
  
  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
    border-width: 3px;
  }
  
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 58px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.02em;
  
  @media (max-width: 960px) {
    font-size: 48px;
  }
  
  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 36px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 8px;
    font-size: 32px;
  }
  
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const Span = styled.span`
  background: ${({ theme }) => theme.gradientText};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientFlow} 3s ease infinite;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 3px;
    background: ${({ theme }) => theme.gradient};
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin-top: 8px;
  
  @media (max-width: 960px) {
    font-size: 18px;
    max-width: 500px;
  }
  
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  display: inline-block;
  width: fit-content;
  padding: 18px 48px;
  color: ${({ theme }) => theme.white};
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.gradientButton};
  background-size: 200% 200%;
  animation: ${gradientFlow} 3s ease infinite;
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
  overflow: hidden;
  margin-top: 12px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 640px) {
    padding: 14px 36px;
    font-size: 16px;
  }
`;
