import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 40px;
  max-width: 1400px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: 800;
  font-size: 24px;
  background: ${({ theme }) => theme.gradientText};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.01em;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient};
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    
    &::after {
      width: 100%;
    }
  }
  
  &.active {
    color: ${({ theme }) => theme.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

export const GitHubButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 10px 24px;
  font-weight: 600;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    transition: left 0.4s;
    z-index: -1;
  }
  
  &:hover {
    color: ${({ theme }) => theme.white};
    border-color: transparent;
    box-shadow: ${({ theme }) => theme.glow};
    transform: translateY(-2px);
    
    &::before {
      left: 0;
    }
  }
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DarkModeButton = styled.button`
  background: ${({ theme }) => theme.glassBg};
  border: 2px solid ${({ theme }) => theme.glassBorder};
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.glow};
    transform: rotate(180deg) scale(1.1);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MenuIcon = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 32px 40px 40px 40px;
  background: ${({ theme }) => theme.card_light};
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-120%)')};
  border-radius: 0 0 24px 24px;
  border-bottom: 2px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.shadowHover};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient};
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    padding-left: 12px;
    
    &::before {
      width: 40px;
    }
  }
`;

export const MobileNavLogo = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;
