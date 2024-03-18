import { FC } from "react";
import styled from "styled-components";

interface WorkPropsType {
  imgSrc: string;
  title: string;
  text: string;
  links: string[];
}

export const Work: FC<WorkPropsType> = (props) => {
  return (
    <StyledWork>
      <StyledImg src={props.imgSrc} />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={props.links[0]}>demo</Link>
      <Link href={props.links[1]}>code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: blue;

  max-width: 540px;
  width: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 260px;

  object-fit: cover;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Link = styled.a``;
