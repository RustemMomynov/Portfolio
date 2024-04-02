import { FC } from "react";
import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import photoWork1 from "./../../../assets/images/work1.png";
import photoWork2 from "./../../../assets/images/work2.png";

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
      <StyledSectionTitle>My Works</StyledSectionTitle>
      <Menu items={MenuItems}></Menu>
      <FlexWrapper justify={"space-around"}>
        <Work
          imgSrc={photoWork1}
          title="Social Network"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
          links={["", ""]}
        />
        <Work
          imgSrc={photoWork2}
          title="Social Network"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
          links={["", ""]}
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: green;
`;
