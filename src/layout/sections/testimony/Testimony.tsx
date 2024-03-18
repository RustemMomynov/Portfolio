import { FC } from "react";
import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

interface TestimonyProps {}

export const Testimony: FC<TestimonyProps> = () => {
  return (
    <StyledTestimony>
      <StyledSectionTitle>Testimony</StyledSectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon iconId="testimony" />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: #3c4eee;
`;
