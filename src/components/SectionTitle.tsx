import styled from "styled-components";
import { theme } from "../styles/Theme";

export const StyledSectionTitle = styled.h2`
  position: relative;
  text-align: center;
  font-family: "Josefin Sans" sans-serif;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 5px;
  margin-bottom: 90px;

  :after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    content: "";

    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
  }
`;
