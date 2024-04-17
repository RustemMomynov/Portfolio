import { FC } from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/moon.gif";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledContainer } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { getFont } from "../../../styles/Common";

interface MainProps {}

export const Main: FC<MainProps> = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <FlexWrapper align="center" justify="space-between" wrap="wrap">
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

  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      justify-content: center;
    }
  }
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

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;

      top: -17px;
      left: 20px;
    }
  }
  @media ${theme.media.tablet} {
    margin-top: 65px;
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 17px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const StyledMainTitle = styled.h1`
  ${getFont({ Fmax: 27, Fmin: 20 })}
`;

const StyledName = styled.h2`
  margin: 10px 0;

  ${getFont({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })}

  letter-spacing: 0.05em;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

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

  @media ${theme.media.mobile} {
    margin: 10px 0 22px;
  }
`;
