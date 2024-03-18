import { FC } from "react";
import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";

interface ConstactsProps {}

export const Constacts: FC<ConstactsProps> = () => {
  return (
    <StyledContacts>
      <StyledSectionTitle>Contacts</StyledSectionTitle>
      <StyledForm>
        <StyledField placeholder="Name"></StyledField>
        <StyledField placeholder="Subject"></StyledField>
        <StyledField placeholder="Message" as={"textarea"}></StyledField>
        <StyledButton type={"submit"}>Send message</StyledButton>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #2a00e3a3;
`;

const StyledForm = styled.section`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0 auto;
`;

const StyledField = styled.input``;
