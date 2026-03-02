import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  cursor: pointer;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.glassBorder};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 217, 255, 0.2);
    border-color: ${({ theme }) => theme.primary};
  }

  &:hover > div:first-child {
    transform: scale(1.05);
  }

  &:hover > div:last-child {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary}20,
    ${({ theme }) => theme.secondary}20
  );

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${({ theme }) => theme.card}40 100%
    );
    pointer-events: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ContentSection = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", sans-serif;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.5px;
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + "15"};
  border: 1px solid ${({ theme }) => theme.primary + "40"};
  padding: 6px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary + "25"};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.glassBorder};
`;

const Members = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: -8px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border: 2px solid ${({ theme }) => theme.card};

  &:first-child {
    margin-left: 0;
  }
`;

const ViewButton = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.3s ease;

  &::after {
    content: "→";
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  ${Card}:hover & {
    color: ${({ theme }) => theme.white};

    &::after {
      transform: translateX(4px);
    }
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 24px;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.card}f5 0%,
    transparent 100%
  );
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <ImageContainer>
        <Image src={project.image} />
      </ImageContainer>

      <ContentSection>
        <TopSection>
          <Date>{project.date}</Date>
          <Title>{project.title}</Title>
        </TopSection>

        <Description>{project.description}</Description>

        <Tags>
          {project.tags?.slice(0, 4).map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          {project.tags?.length > 4 && <Tag>+{project.tags.length - 4}</Tag>}
        </Tags>

        <BottomSection>
          {project.member && project.member.length > 0 && (
            <Members>
              {project.member.slice(0, 3).map((member, index) => (
                <Avatar key={index} src={member.img} />
              ))}
            </Members>
          )}
          <ViewButton>View Details</ViewButton>
        </BottomSection>
      </ContentSection>

      <HoverOverlay />
    </Card>
  );
};

export default ProjectCards;
