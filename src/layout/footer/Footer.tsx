import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { getFont } from "../../styles/Common";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Rustem</Name>

        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId="instagram"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId="telegram"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId="vk"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="21px"
                width="21px"
                viewBox="0 0 21px 21px"
                iconId="linkedin"
              />
            </SocialLink>
          </SocialItem>
        </SocialList>

        <Copyright>© 2024 Rustem Momynov, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  color: white;
  padding: 40px 0;
`;

const Name = styled.span`
  ${getFont({
    Fmax: 22,
    Fmin: 16,
    family: "'Josefin Sans', sans-serif",
    weight: 700,
  })}

  letter-spacing: 3px;

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`;

const SocialList = styled.ul`
  display: flex;
  /* list-style: none; */
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;

  color: ${theme.colors.accent};

  transition: transform 0.5s;

  :hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-size: 12px;
  line-height: 18px;
  opacity: 0.5;
`;
