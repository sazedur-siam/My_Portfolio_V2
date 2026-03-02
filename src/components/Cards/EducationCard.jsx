import styled from "styled-components";

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.glassBorder};
  @media only screen and (max-width: 768px) {
    font-size: 13px;
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
  border-radius: 20px;
  padding: 28px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 2px solid ${({ theme }) => theme.glassBorder};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

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
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 217, 255, 0.2);
    border-color: ${({ theme }) => theme.primary};

    &::before {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    gap: 12px;
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
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;

  @media only screen and (max-width: 768px) {
    gap: 12px;
  }
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
  background: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", sans-serif;
  line-height: 1.3;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Degree = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "📅";
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Grade = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.primary + "15"};
  border: 1px solid ${({ theme }) => theme.primary + "40"};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
  height: fit-content;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary + "25"};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }

  b {
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
    gap: 4px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <LeftSection>
          <Image src={education.img} />
          <Body>
            <Name>{education.school}</Name>
            <Degree>{education.degree}</Degree>
            <Date>{education.date}</Date>
          </Body>
        </LeftSection>
        <Grade>
          <b>CGPA:</b>
          {education.grade}
        </Grade>
      </Top>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
