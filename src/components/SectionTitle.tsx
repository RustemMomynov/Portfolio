import styled from "styled-components";
import { theme } from "../styles/Theme";
import { getFont } from "../styles/Common";

export const StyledSectionTitle = styled.h2`
  position: relative;
  text-align: center;

  ${getFont({
    family: "'Josefin Sans' sans-serif",
    Fmax: 36,
    Fmin: 30,
    weight: 600,
  })}

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

    @media ${theme.media.tablet} {
      bottom: -24px;
    }
  }
`;
