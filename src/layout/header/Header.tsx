import { FC } from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { StyledContainer } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { HeaderMenu } from "../../components/menu/HeaderMenu";

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
      <StyledContainer>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <HeaderMenu items={MenuItems} />
        </FlexWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};

  padding: 20px 0;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
