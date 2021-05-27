import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import HomeBackground from "../Images/home-background.png";

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  min-height: 100vh;
  /* min-height: calc(100vh - 250px); */
  &:after {
    background: url(${HomeBackground}) center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Home = () => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
};

export default Home;
