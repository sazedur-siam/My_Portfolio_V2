import React from "react";
import styled from "styled-components";

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + "99"};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 780px;
  border-radius: 16px;
  padding: 16px 20px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.glow};
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 40px rgba(133, 76, 230, 0.2);
    border-color: ${({ theme }) => theme.primary + "40"};
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "80"};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade: </b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
