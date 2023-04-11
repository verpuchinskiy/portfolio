import styled from "styled-components";
import { primaryColor } from "../variables";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  color: ${primaryColor};
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
