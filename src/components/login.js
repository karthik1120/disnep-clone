import React from "react";
import styled from "styled-components";
import BottomImage from "../Images/cta-logo-two.png";
import TopImage from "../Images/cta-logo-one.svg";
import BackgroundImage from "../Images/login-background.jpg";

const login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={TopImage} alt="diney image" />
          <SignIn>get all there</SignIn>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoOne src={BottomImage} alt="diney logo" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(${BackgroundImage});
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 5s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  /* max-width: 600px; */
  min-height: 1px;
  display: block;
  width: 100%;
  margin-bottom: 12px;
`;

const SignIn = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: #f9f9f9;
  background-color: #0063e5;
  border-radius: 3px;
  /* max-width: 600px; */
  width: 100%;
  font-weight: bolder;
  padding: 1em;
  letter-spacing: 1.5px;
  font-size: 18px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin: 0 0 24px;
  font-size: 11px;
`;

export default login;
