import { FC } from "react";
import styled from "styled-components";
import { StyledContainer } from "../../../components/Container";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";

interface SloganProps {}

export const Slogan: FC<SloganProps> = () => {
  return (
    <StyledSlogan>
      <StyledContainer>
        <FlexWrapper direction="column" align="center">
          <StyledSectionTitle>Let's get down to business</StyledSectionTitle>
          <StyledButton>Hire me</StyledButton>
        </FlexWrapper>
      </StyledContainer>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section``;
