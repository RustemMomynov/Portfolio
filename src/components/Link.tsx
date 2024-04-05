import styled from "styled-components";
import { theme } from "../styles/Theme";

export const StyledLink = styled.a`
  position: relative;
  z-index: 0;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;

  padding: 10px;

  :hover::before {
    content: "";
    height: 10px;
    display: inline-block;
    height: 10px;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
