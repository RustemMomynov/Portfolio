import { FC } from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/moon.gif";
import { FlexWrapper } from "../../../components/FlexWrapper";

interface MainProps {}

export const Main: FC<MainProps> = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <span>Hi There</span>
          <StyledName>I am Momynov Rustem</StyledName>
          <StyledMainTitle>A Web Developer.</StyledMainTitle>
        </div>
        {/* <Photo src="/images/avatar.png" alt="avatar" srcSet="" /> */}
        <Photo src={photo} alt="avatar" srcSet="" />
      </FlexWrapper>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: black;
  /* color: white; */
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const StyledMainTitle = styled.h1``;

const StyledName = styled.h2``;
