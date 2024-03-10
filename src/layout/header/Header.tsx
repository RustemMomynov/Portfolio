import { FC } from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/Menu/Menu";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #1f1f20;
  color: #7572d5;
`;
