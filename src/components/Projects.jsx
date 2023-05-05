import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import styled from "styled-components";
import { headerFont } from "../../variables";

const Container = styled.div`
  padding: 40px 0;
  text-align: center;
  width: 100%;
`;

const Header = styled.h2`
  font-family: ${headerFont};
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ProjectContainer = styled.div`
  position: relative;
  height: 300px;
  &:hover > :nth-child(1) {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  &:hover > :nth-child(2) {
    opacity: 0.85;
    cursor: pointer;
  }
`;

const ProjectImg = styled.img`
  transition: all 0.5s ease;
  cursor: pointer;
  -webkit-user-drag: none;
  filter: none;

  @media (min-width: 1770px) {
    width: 100%;
  }

  &:hover {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
`;

const Description = styled.div`
  background-color: black;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: 100%;
  padding: 0 50px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DescriptionHeader = styled.h3`
  margin-bottom: 10px;
`;

const DescriptionText = styled.p``;

const WebsiteLink = styled.a``;

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container id="projects">
      <Header>Recent Projects</Header>
      <Carousel swipeable={true} infinite={true} responsive={responsive}>
        <WebsiteLink
          href="https://verpuchinskiy.github.io/cocktails/"
          target="_blank"
        >
          <ProjectContainer>
            <ProjectImg src="src/assets/project1.jpg" />
            <Description>
              <DescriptionHeader>Cocktails Website.</DescriptionHeader>
              <DescriptionText>
                A website (SPA) made with React using TheCocktailDB API. Allows
                to get detailed information about hundreds of cocktails and
                their ingredients, to sort cocktails by type and alcohol, to
                search cocktails by name and ingredient.
              </DescriptionText>
            </Description>
          </ProjectContainer>
        </WebsiteLink>
        <WebsiteLink
          href="https://verpuchinskiy.github.io/nytbest/"
          target="_blank"
        >
          <ProjectContainer>
            <ProjectImg src="src/assets/project2.jpg" />
            <Description>
              <DescriptionHeader>NytBest Website.</DescriptionHeader>
              <DescriptionText>
                A website (SPA) made with React using New York Times Books API
                and Google Books API. Shows rankings of bestsellers chosen by NY
                Times assorted by categories with the ability to search list
                history by date, search a book by author, title or isbn and
                check top 1 book from each category in a single list.
              </DescriptionText>
            </Description>
          </ProjectContainer>
        </WebsiteLink>
        <ProjectContainer>
          <ProjectImg src="src/assets/project3.jpg" />
          <Description>
            <DescriptionHeader>Lorem, ipsum dolor.</DescriptionHeader>
            <DescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam
              harum eius eos. Eos quisquam inventore eveniet cumque, porro
              optio.
            </DescriptionText>
          </Description>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImg src="src/assets/project4.jpeg" />
          <Description>
            <DescriptionHeader>Lorem, ipsum dolor.</DescriptionHeader>
            <DescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam
              harum eius eos. Eos quisquam inventore eveniet cumque, porro
              optio.
            </DescriptionText>
          </Description>
        </ProjectContainer>
      </Carousel>
    </Container>
  );
};
