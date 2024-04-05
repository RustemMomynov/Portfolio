import { FC } from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

interface SkillProps {
  iconId: string;
  title: string;
  p: string;
}

export const Skill: FC<SkillProps> = (props) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkillTitle>{props.title} </SkillTitle>
        <SkillText>{props.p}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
`;

const IconWrapper = styled.div`
  position: relative;
  z-index: 0;

  ::before {
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform-origin: top left;

    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;

    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);
  }
`;

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
  line-height: 1.4;
`;
