import React from "react";
import styled from "styled-components";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { headerFont, primaryColor, secondaryColor } from "../../variables";
import MikeImg from "../assets/Mike_sm.png";
import YellowSpotImg from "../assets/Circle.png";
import CertificateImg from "../assets/Certificate.png";
import OrangePatternImg from "../assets/OrangePattern.png";
import CV from "../assets/CV_Verpuchinskiy.pdf";

const Container = styled.div`
  height: calc(60vh + 80px);
  display: flex;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  position: relative;
  overflow: hidden;
`;

const OrangePatternImage = styled.img`
  position: absolute;
  z-index: -1;
  left: -600px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const OrangePatternImage2 = styled.img`
  position: absolute;
  z-index: -1;
  right: -600px;
  transform: rotate(180deg);

  @media (max-width: 480px) {
    display: none;
  }
`;

const Left = styled.div`
  flex: 1;
  padding-left: 10%;
`;
const Right = styled.div`
  flex: 1;
  height: 100%;
  text-align: center;

  @media (max-width: 590px) {
    display: none;
  }
`;

const MainHeader = styled.h1`
  font-family: ${headerFont};
  font-size: 4rem;
  line-height: 3.5rem;

  @media (max-width: 390px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

const GraySpan = styled.span`
  font-family: ${headerFont};
  color: lightgray;
`;

const VioletSpan = styled.span`
  font-family: ${headerFont};
  color: ${secondaryColor};
`;

const MainDescription = styled.p`
  margin-top: 25px;
  color: #505050;
`;

const CVDownloadLink = styled.a`
  width: fit-content;
  font-size: 0.8rem;
  color: ${primaryColor};
  margin-top: 25px;
  padding: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 7px;
  background-color: white;
  border: 1px solid ${primaryColor};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${secondaryColor};
    color: white;
    border: 1px solid ${secondaryColor};
  }

  &:active {
    background-color: ${primaryColor};
  }
`;

const MainImageFrame = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;
const MainImage = styled.img`
  margin-top: 50px;
  max-height: 100%;
`;

const YellowSpot = styled.img`
  position: absolute;
  z-index: -1;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  max-width: 80%;
  max-height: 100%;
`;

const Certificate = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  bottom: 20px;
  left: 20px;
  cursor: pointer;
`;

const CertificateLink = styled.a``;

export const Hero = () => {
  return (
    <Container id="home">
      <OrangePatternImage src={OrangePatternImg} />
      <OrangePatternImage2 src={OrangePatternImg} />
      <Left>
        <MainHeader>
          Hi<GraySpan>,</GraySpan>
        </MainHeader>
        <MainHeader>
          I am <VioletSpan>Mikhail Verpuchiskiy</VioletSpan>
        </MainHeader>
        <MainDescription>
          Frontend Developer with 9 years of design background. A perfectionist
          with an affection to creativity and diligence.
        </MainDescription>
        <CVDownloadLink href={CV} download>
          Download my CV <FileDownloadIcon />
        </CVDownloadLink>
      </Left>
      <Right>
        <MainImageFrame>
          <MainImage src={MikeImg} alt="Image of Mike" />
          <YellowSpot src={YellowSpotImg} />
          <CertificateLink
            href="https://coursera.org/share/c1f8c32a138efdb8c5606d7da96e1efc"
            target="_blank"
          >
            <Certificate src={CertificateImg} />
          </CertificateLink>
        </MainImageFrame>
      </Right>
    </Container>
  );
};
