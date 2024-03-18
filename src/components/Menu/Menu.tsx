import { FC } from "react";
import styled from "styled-components";

interface MenuPropsType {
  items: { text: string; link: string }[];
}

export const Menu: FC<MenuPropsType> = (props) => {
  let links = props.items.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.link}>{item.text}</a>
      </li>
    );
  });

  return (
    <StyledMenu>
      <ul>{links}</ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;

    list-style-type: none;

    li a {
      text-decoration: none;
      color: #7572d5;
    }
  }
`;
