import { FC } from "react";
import styled from "styled-components";
import { StyledLink } from "../../../../components/Link";
import { theme } from "../../../../styles/Theme";
import { StyledButton } from "../../../../components/Button";

interface WorkPropsType {
  imgSrc: string;
  title: string;
  text: string;
  links: string[];
}

export const Work: FC<WorkPropsType> = (props) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <StyledImg src={props.imgSrc} />
        <StyledButton>view project</StyledButton>
      </ImageWrapper>

      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <StyledLink href={props.links[0]}>demo</StyledLink>
        <StyledLink href={props.links[1]}>code</StyledLink>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${StyledLink} {
    padding: 10px 0;
    & + ${StyledLink} {
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    /* max-width: 540px; */
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  ${StyledButton} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    ::before {
      width: 100%;
      height: 100%;
    }
  }

  ::before {
    opacity: 0;

    content: "";
    position: absolute;

    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
  }

  :hover {
    ${StyledButton} {
      opacity: 1;
    }

    :before {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    ${StyledButton}, ::before {
      opacity: 1;
    }
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 260px;

  object-fit: cover;
`;

const Description = styled.div`
  padding: 25px 20px;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
  line-height: 1.4;
`;
