import { FC } from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

interface SkillProps {
  iconId: string;
  title: string;
  p: string;
}

export const Skill: FC<SkillProps> = (props) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title} </SkillTitle>
      <SkillText>{props.p}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  text-align: center;

  background-color: black;
  margin: 10px;
`;

const SkillTitle = styled.h3``;

const SkillText = styled.p``;
