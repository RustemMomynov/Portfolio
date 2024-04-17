import { FC } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

interface DesktopMenuPropsType {
  items: { text: string; link: string }[];
}

export const DesktopMenu: FC<DesktopMenuPropsType> = (props) => {
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
    <StyledDesktopMenu>
      <ul>{links}</ul>
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  @media ${theme.media.tablet} {
    display: none;
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
