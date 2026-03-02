import styled from "styled-components";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

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
  width: 800px;
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

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: flex-start;
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

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", sans-serif;
  line-height: 1.3;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Company = styled.div`
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

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
`;

const SkillsLabel = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Skill = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + "15"};
  border: 1px solid ${({ theme }) => theme.primary + "40"};
  border-radius: 8px;
  padding: 6px 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary + "25"};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 4px 10px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <Skills>
              <SkillsLabel>Skills:</SkillsLabel>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>{skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
