import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

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
  background-color: #000000;
  color: white;
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;

  gap: 30px;
`;

const SocialItem = styled.li``;

const Name = styled.span``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
