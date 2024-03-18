import { FC } from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header: FC = () => {
  let MenuItems = [
    { text: "Home", link: "" },
    { text: "Skills", link: "" },
    { text: "Works", link: "" },
    { text: "Testimony", link: "" },
    { text: "Contact", link: "" },
  ];

  return (
    <StyledHeader>
      <Logo />
      <Menu items={MenuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #1f1f20;
  color: #7572d5;

  display: flex;
  justify-content: space-between;
`;
