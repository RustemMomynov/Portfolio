import { FC } from "react";
import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

interface ConstactsProps {}

export const Constacts: FC<ConstactsProps> = () => {
  return (
    <StyledContacts>
      <StyledContainer>
        <StyledSectionTitle>Contacts</StyledSectionTitle>
        <StyledForm>
          <FlexWrapper direction="column" gap="16px">
            <StyledField placeholder="Name"></StyledField>
            <StyledField placeholder="Subject"></StyledField>
            <StyledField placeholder="Message" as={"textarea"}></StyledField>
            <StyledButton type={"submit"}>Send message</StyledButton>
          </FlexWrapper>
        </StyledForm>
      </StyledContainer>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;

  margin: 0 auto;

  textarea {
    height: 155px;
    resize: none;
  }

  ${StyledButton} {
    margin: 0 auto;
  }
`;

const StyledField = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: ${theme.colors.font};
  line-height: 18px;
  letter-spacing: 5%;

  ::placeholder {
    color: ${theme.colors.plaleholder};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;
