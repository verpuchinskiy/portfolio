import React from "react";
import styled from "styled-components";
import { headerFont, primaryColor, secondaryColor } from "../../variables";

const Container = styled.div`
  text-align: center;
  padding: 10px 40px 40px;
`;

const Header = styled.h2`
  font-family: ${headerFont};
  font-size: 3rem;
  margin-bottom: 20px;
`;

const TestimonialWrapper = styled.div`
  width: 50%;
  margin: auto;
  border: 1px solid ${primaryColor};
  padding: 0 160px 40px 40px;
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;

  @media (max-width: 560px) {
    padding: 0 120px 40px 40px;
  }

  @media (max-width: 400px) {
    padding: 0 100px 40px 40px;
  }
`;

const Quotes = styled.span`
  display: block;
  font-size: 10rem;
  transform: scaleY(-1);
  line-height: 3rem;
  margin-bottom: 60px;
`;

const TestimonialText = styled.p`
  text-align: left;
  font-size: 0.85rem;
`;

const TestimonialAuthor = styled.span`
  margin-top: 20px;
  font-weight: 700;
`;

const TestimonialAuthorPosition = styled.span`
  color: ${secondaryColor};
  font-size: 0.9rem;
`;

const TestimonialAuthorImg = styled.img`
  width: 200px;
  position: absolute;
  bottom: -20px;
  right: -60px;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 1);

  @media (max-width: 560px) {
    width: 100px;
    bottom: 0;
    right: 0;
  }
`;

export const Testimonials = () => {
  return (
    <Container id="testimonials">
      <Header>What Employers Say About Me</Header>
      <TestimonialWrapper>
        <Quotes>‟</Quotes>
        <TestimonialText>
          I was fortunate to manage Mikhail Verpuchinskiy during his time
          working with the Lite-On and Plextor technology brands. From the
          start, I found him hard working, diligent and intelligent. Mikhail’s
          work strongly contributed to the success of the client’s products in
          the market and a rapid increase in market share. This in turn allowed
          us to expand his role with Lite-On. Our team found him extremely easy
          to work with and responsible. We particularly appreciated his
          well-thought out input and suggestions. In his role, he was frequently
          required to provide technical support to end users. Our clients gave
          me very positive feedback on his high level of technical knowledge and
          clear communication. <br />
          <br />
          Mikhail Verpuchinskiy has a strong combination of organisation, a
          desire for self growth and excellent technical skills. I’m sure that
          he will be an asset to future employers.
        </TestimonialText>
        <TestimonialAuthor>Bob Cook</TestimonialAuthor>
        <TestimonialAuthorPosition>
          CEO of Convince Marketing
        </TestimonialAuthorPosition>
        <TestimonialAuthorImg src="src/assets/Bob.jpeg" />
      </TestimonialWrapper>
    </Container>
  );
};
