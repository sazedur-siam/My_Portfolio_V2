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
    font-size: 56px;
    text-align: center;
    font-weight: 900;
    margin-top: 20px;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: -0.03em;
    position: relative;
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

export const ToggleButtonGroup = styled.div`
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.primary};
    font-size: 15px;
    font-weight: 600;
    margin: 40px 0 32px;
    
    @media (max-width: 768px) {
        font-size: 14px;
        margin: 32px 0 24px;
        gap: 8px;
    }
    
    @media (max-width: 500px) {
        font-size: 12px;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ToggleButton = styled.div`
    padding: 14px 32px;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
    
    ${({ active, theme }) =>
        active ? `
        background: ${theme.gradient};
        color: ${theme.white};
        box-shadow: ${theme.glow}, 0 8px 24px rgba(0, 217, 255, 0.3);
        border-color: transparent;
    ` : `
        background: ${theme.glassBg};
        backdrop-filter: blur(10px);
        border-color: ${theme.glassBorder};
        color: ${theme.text_secondary};
    `}
    
    &:hover {
        ${({ active, theme }) => !active && `
            border-color: ${theme.primary};
            background: ${theme.primary}20;
            color: ${theme.primary};
            transform: translateY(-2px);
        `}
    }
    
    @media (max-width: 768px) {
        padding: 12px 24px;
    }
    
    @media (max-width: 500px) {
        padding: 10px 20px;
    }
`;



export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 28px;
    margin-top: 20px;
    width: 100%;
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
        padding: 0 10px;
    }
`;
