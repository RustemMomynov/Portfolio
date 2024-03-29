import { FC } from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

interface HeaderMenuPropsType {
  items: { text: string; link: string }[];
}

export const HeaderMenu: FC<HeaderMenuPropsType> = (props) => {
  let links = props.items.map((item, index) => {
    return (
      <ListItem key={index}>
        <Link href={item.link}>{item.text}</Link>
      </ListItem>
    );
  });

  return (
    <StyledHeaderMenu>
      <ul>{links}</ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

const ListItem = styled.li``;

const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;

  color: ${theme.colors.accent};
  transition: color 0.3s;

  :hover {
    color: ${theme.colors.font};
  }
`;
