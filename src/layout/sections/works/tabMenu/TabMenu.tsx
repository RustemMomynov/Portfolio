import { FC } from "react";
import styled from "styled-components";
import { StyledLink } from "../../../../components/Link";

interface TabMenuPropsType {
  items: { text: string; link: string }[];
}

export const TabMenu: FC<TabMenuPropsType> = (props) => {
  let links = props.items.map((item, index) => {
    return (
      <StyledListItem key={index}>
        <StyledLink href={item.link}>{item.text}</StyledLink>
      </StyledListItem>
    );
  });

  return (
    <StyledTabMenu>
      <ul>{links}</ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;

    list-style-type: none;
  }
`;

const StyledListItem = styled.li``;
