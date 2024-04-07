import styled from "styled-components";
import { theme } from "../styles/Theme";

export const StyledButton = styled.button`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  z-index: 0;

  width: 170px;
  height: 32px;

  position: relative;

  ::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }

  :hover {
    ::before {
      height: 100%;
      width: 100%;
    }
  }
`;
