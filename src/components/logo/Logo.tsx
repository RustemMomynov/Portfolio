import { FC } from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Logo: FC = () => {
  return (
    <a href="">
      <LogoIconWrapper>
        <Icon iconId={"styled components"} />
      </LogoIconWrapper>
    </a>
  );
};

const LogoIconWrapper = styled.div`
  color: ${theme.colors.accent};
`;
