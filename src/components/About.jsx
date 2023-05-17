import { fontSize } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { headerFont, primaryColor, tertiaryColor } from "../../variables";

const Container = styled.div`
  background-color: ${primaryColor};
  color: whitesmoke;
`;

const Wrapper = styled.div`
  padding: 40px;
  width: 50%;
  margin: auto;
  text-align: center;
`;

const Wrapper2 = styled.div`
  padding: 40px 40px 60px 40px;
  width: 90%;
  margin: auto;
  text-align: center;

  @media (max-width: 800px) {
    padding: 40px 0 60px 0;
  }
`;

const Header = styled.h2`
  font-family: ${headerFont};
  font-size: 3rem;
`;

const Description = styled.p`
  margin-top: 20px;
  font-weight: 200;

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const ExperienceBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const ExperienceSection = styled.div`
  margin-top: 40px;
  width: 150px;
  display: flex;
  align-items: center;
  gap: 15px;

  & > * {
    text-align: left;
  }
`;

const ExperienceNumber = styled.span`
  color: ${tertiaryColor};
  font-size: 3rem;
  font-weight: 500;
`;

const ExperienceDesc = styled.span`
  font-weight: 200;
  opacity: 0.5;
`;

const TechnologiesHeader = styled.h3`
  margin-top: 20px;
  font-family: ${headerFont};
  font-size: 2rem;
  text-align: center;
`;

const TechnologiesList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const SingleTechnology = styled.img`
  width: 120px;

  @media (max-width: 500px) {
    width: 80px;
  }
`;

export const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Header>About Me</Header>
        <Description>
          After nine years of working as a graphic designer and fulfilling
          episodic coding tasks, I have decided to dive deeply into front-end
          development. I have completed Front-End Engineer Career Path from
          Codecademy, React and Next.js courses on Udemy and achieved Front-End
          developer specialization by Meta.
          <br />
          <br /> Currently, I am working on sample projects for the portfolio to
          showcase my abilities. Looking for a full-time position in a big
          company where I can drop the anchor and realize my creativity and
          endless striving for growth.
        </Description>

        <ExperienceBlock>
          <ExperienceSection>
            <ExperienceNumber>1</ExperienceNumber>
            <ExperienceDesc>Year of Non-stop Learning</ExperienceDesc>
          </ExperienceSection>
          <ExperienceSection>
            <ExperienceNumber>3</ExperienceNumber>
            <ExperienceDesc>Portfolio Projects</ExperienceDesc>
          </ExperienceSection>
        </ExperienceBlock>
      </Wrapper>
      <TechnologiesHeader>Technologies I Am Familiar With</TechnologiesHeader>
      <Wrapper2>
        <TechnologiesList>
          <SingleTechnology src="src/assets/html.png" />
          <SingleTechnology src="src/assets/css.png" />
          <SingleTechnology src="src/assets/javascript.png" />
          <SingleTechnology src="src/assets/react.png" />
          <SingleTechnology src="src/assets/nextjs.png" />
          <SingleTechnology src="src/assets/npm.png" />
          <SingleTechnology src="src/assets/sass.png" />
          <SingleTechnology src="src/assets/styled.png" />
          <SingleTechnology src="src/assets/rest.png" />
          <SingleTechnology src="src/assets/uxui.png" />
          <SingleTechnology src="src/assets/git.png" />
        </TechnologiesList>
      </Wrapper2>
    </Container>
  );
};
