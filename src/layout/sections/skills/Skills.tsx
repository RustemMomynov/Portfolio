import { FC } from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { StyledContainer } from "../../../components/Container";

interface SkillsProps {}

export const Skills: FC<SkillsProps> = () => {
  return (
    <StyledSkills>
      <StyledContainer>
        <StyledSectionTitle>My Skills</StyledSectionTitle>
        <FlexWrapper wrap="wrap" justify="space-around">
          <Skill
            iconId="html"
            title="HTML5"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="css"
            title="CSS3"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="react"
            title="REACT"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="typescript"
            title="TYPESCRIPT"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="styled components"
            title="STYLED COMPONENTS"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="figma"
            title="WEB DESIGN"
            p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
        </FlexWrapper>
      </StyledContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
