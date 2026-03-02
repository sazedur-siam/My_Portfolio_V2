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
  width: 800px;
  border-radius: 24px;
  padding: 24px 28px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.shadow};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.glassHover},
      transparent
    );
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadowHover};
    border-color: ${({ theme }) => theme.primary}40;

    &::before {
      left: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 20px;
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

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
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

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const SkillsLabel = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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
