import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 80px 0;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    padding: 0 20px;
    gap: 16px;
`;

export const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 800;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: -0.02em;
    position: relative;
    
    &::after {
        content: '';
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

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 2px solid ${({ theme }) => theme.primary}60;
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 50px;
    font-weight: 600;
    margin: 32px 0;
    padding: 4px;
    background: ${({ theme }) => theme.glassBg};
    backdrop-filter: blur(10px);
    box-shadow: ${({ theme }) => theme.shadow};
    
    @media (max-width: 768px) {
        font-size: 14px;
        margin: 24px 0;
    }
    
    @media (max-width: 500px) {
        font-size: 12px;
    }
`;

export const ToggleButton = styled.div`
    padding: 12px 28px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    
    ${({ active, theme }) =>
        active && `
        background: ${theme.gradient};
        color: ${theme.white};
        box-shadow: ${theme.glow};
        transform: scale(1.05);
    `}
    
    &:hover {
        background: ${({ active, theme }) => 
            active ? theme.gradient : theme.primary + '15'};
        transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
        padding: 10px 20px;
    }
    
    @media (max-width: 500px) {
        padding: 8px 16px;
    }
`;

export const Divider = styled.div`
    width: 2px;
    background: ${({ theme }) => theme.primary}40;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 32px;
    flex-wrap: wrap;
    margin-top: 20px;
    
    @media (max-width: 768px) {
        gap: 24px;
    }
`;
