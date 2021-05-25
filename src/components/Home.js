import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw +5px);
  &:after {
    background: url("/Images/home-background.png") center no-repeat fixed;
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
      {/* <ImgSlider /> */}
      asdfasdf asdfasdf
    </Container>
  );
};

export default Home;
