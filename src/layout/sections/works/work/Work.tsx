import { FC } from "react";
import styled from "styled-components";
import { StyledLink } from "../../../../components/Link";
import { theme } from "../../../../styles/Theme";

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

  max-width: 540px;
  width: 100%;

  ${StyledLink} {
    padding: 10px 0;
    & + ${StyledLink} {
      margin-left: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  :hover::before {
    content: "";
    position: absolute;

    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
  }

  :hover::after {
    content: "123";
    position: absolute;
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
