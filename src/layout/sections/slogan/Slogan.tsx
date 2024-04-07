import { FC } from "react";
import styled from "styled-components";
import { StyledContainer } from "../../../components/Container";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";

interface SloganProps {}

export const Slogan: FC<SloganProps> = () => {
  return (
    <StyledSlogan>
      <StyledContainer>
        <StyledSectionTitle>Slogan</StyledSectionTitle>
        <StyledButton>Hire me</StyledButton>
      </StyledContainer>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section``;
