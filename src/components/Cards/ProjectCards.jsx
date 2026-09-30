import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import styled from "styled-components";

const Row = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 64px 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 24px 28px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.gradient};
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 12px 40px ${({ theme }) => theme.primary + "20"};
    transform: translateX(6px);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 20px;

    &:hover {
      transform: none;
    }
  }
`;

const Index = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary + "60"};
  transition: color 0.35s ease;

  ${Row}:hover & {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", sans-serif;
  line-height: 1.3;
`;

const Category = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + "15"};
  padding: 4px 10px;
  border-radius: 999px;
`;

const Description = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + "15"};
  border: 1px solid ${({ theme }) => theme.primary + "40"};
  padding: 4px 10px;
  border-radius: 8px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.glassBorder};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + "15"};
  }
`;

const ViewButton = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 6px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.primary};

  svg {
    transition: transform 0.3s ease;
  }

  ${Row}:hover & svg {
    transform: translateX(4px);
  }
`;

const categoryLabel = {
  "web app": "Web",
  "android app": "Mobile",
};

const ProjectCards = ({ project, index, setOpenModal }) => {
  const stop = (e) => e.stopPropagation();
  const hasLiveLink = project.webapp && project.webapp !== project.github;

  return (
    <Row onClick={() => setOpenModal({ state: true, project: project })}>
      <Index>{String(index + 1).padStart(2, "0")}</Index>

      <Content>
        <TitleRow>
          <Title>{project.title}</Title>
          {categoryLabel[project.category] && (
            <Category>{categoryLabel[project.category]}</Category>
          )}
        </TitleRow>
        <Description>{project.description}</Description>
        <Tags>
          {project.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Content>

      <Actions>
        {project.github && (
          <IconLink
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub`}
            onClick={stop}
          >
            <FaGithub />
          </IconLink>
        )}
        {hasLiveLink && (
          <IconLink
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            onClick={stop}
          >
            <FiExternalLink />
          </IconLink>
        )}
        <ViewButton>
          View Details <FiArrowRight />
        </ViewButton>
      </Actions>
    </Row>
  );
};

export default ProjectCards;
