import { FC } from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/moon.gif";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledContainer } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

interface MainProps {}

export const Main: FC<MainProps> = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <FlexWrapper align="center" justify="space-between">
          <div>
            <SmallText>Hi There</SmallText>
            <StyledName>
              I am <span>Momynov Rustem</span>
            </StyledName>
            <StyledMainTitle>A Web Developer.</StyledMainTitle>
          </div>

          <PhotoWrapper>
            <Photo src={photo} alt="avatar" srcSet="" />
          </PhotoWrapper>
        </FlexWrapper>
      </StyledContainer>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const SmallText = styled.span`
  font-size: 14px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  :before {
    position: absolute;
    top: -24px;
    left: 24px;
    content: "";
    z-index: -1;

    width: 360px;
    height: 470px;

    border: 5px solid ${theme.colors.accent};
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const StyledMainTitle = styled.h1`
  font-size: 27px;
  line-height: 40px;
`;

const StyledName = styled.h2`
  margin: 10px 0;

  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;

  letter-spacing: 0.05em;

  span {
    position: relative;
    z-index: 0;

    &::before {
      position: absolute;
      bottom: 0px;

      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      z-index: -1;
    }
  }
`;
