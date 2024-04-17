import { FC } from "react";
import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";
import { StyledContainer } from "../../../components/Container";

interface TestimonyProps {}

export const Testimony: FC<TestimonyProps> = () => {
  return (
    <StyledTestimony>
      <StyledContainer>
        <StyledSectionTitle>Testimony</StyledSectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <IconWrapper>
            <Icon iconId="testimony" />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </StyledContainer>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 50vh;

  ${IconWrapper} {
    margin: 28px 0 72px;
  }
`;
