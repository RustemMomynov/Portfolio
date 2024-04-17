import { FC } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

interface MobileMenuPropsType {
  items: { text: string; link: string }[];
}

export const MobileMenu: FC<MobileMenuPropsType> = (props) => {
  let links = props.items.map((item, index) => {
    return (
      <ListItem key={index}>
        <Link href={item.link}>
          {item.text}
          <Mask>
            <span>{item.text}</span>
          </Mask>
          <Mask>
            <span>{item.text}</span>
          </Mask>
        </Link>
      </ListItem>
    );
  });

  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={false}>
        <ul>{links}</ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;

  top: -100px;
  right: -100px;

  width: 200px;
  height: 200px;

  z-index: 99999;

  span {
    display: block;

    position: absolute;
    left: 40px;
    bottom: 50px;

    width: 36px;
    height: 2px;

    background-color: ${theme.colors.font};

    transition: 0.5;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    ::before {
      position: absolute;

      content: "";
      display: block;

      width: 36px;
      height: 2px;

      background-color: ${theme.colors.font};
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0) rotate(45deg);
        `}
    }

    ::after {
      position: absolute;
      content: "";

      display: block;

      width: 20px;
      height: 2px;

      background-color: ${theme.colors.font};
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0) rotate(-45deg);
          width: 36px;
        `}
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  display: none;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 40%;

  z-index: 9999;

  background-color: ${theme.colors.primaryBg};
  opacity: 0.9;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  :hover {
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      ${Mask}:nth-child(2) {
        transform: skewX(12deg) translateX(-5px);
      }
    }

    ${Mask}:nth-child(2) {
      transform: skewX(12deg) translateX(-5px);
    }

    :before {
      content: "";
      display: inline-block;
      height: 3px;
      background-color: ${theme.colors.accent};

      position: absolute;
      top: 50%;
      left: -10px;
      right: -10px;
      z-index: 1;
    }
  }
`;
