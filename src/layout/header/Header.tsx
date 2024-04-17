import { FC } from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { StyledContainer } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

export const Header: FC = () => {
  let MenuItems = [
    { text: "Home", link: "" },
    { text: "Skills", link: "" },
    { text: "Works", link: "" },
    { text: "Testimony", link: "" },
    { text: "Contact", link: "" },
  ];

  return (
    <S.Header>
      <StyledContainer>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <DesktopMenu items={MenuItems} />
          <MobileMenu items={MenuItems} />
        </FlexWrapper>
      </StyledContainer>
    </S.Header>
  );
};
