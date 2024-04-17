import { FC } from "react";
import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import photoWork1 from "./../../../assets/images/work1.png";
import photoWork2 from "./../../../assets/images/work2.png";
import { StyledContainer } from "../../../components/Container";
import { TabMenu } from "./tabMenu/TabMenu";
import { theme } from "../../../styles/Theme";

interface WorksProps {}

export const Works: FC<WorksProps> = () => {
  let MenuItems = [
    { text: "ALL", link: "" },
    { text: "LANDING PAGE", link: "" },
    { text: "REACT", link: "" },
    { text: "SPA", link: "" },
  ];

  return (
    <StyledWorks>
      <StyledContainer>
        <StyledSectionTitle>My Works</StyledSectionTitle>
        <TabMenu items={MenuItems} />
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap="wrap">
          <Work
            imgSrc={photoWork1}
            title="Social Network"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            links={["", ""]}
          />
          <Work
            imgSrc={photoWork2}
            title="Timer"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
            links={["", ""]}
          />
        </FlexWrapper>
      </StyledContainer>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;

    @media ${theme.media.tablet} {
      justify-content: center;
    }
  }
`;
