import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogo0ne src="./images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Explore personal banking solutions from Premier Bank in OH, MI, IN,
          ... Our local lenders will find you lending solutions to fit your
          budget and lifestyle.
        </Description>
        <CTALogoTwo src="./images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    position: absolute;
    top: 0;
    opacity: 0.8;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    background-image: url("./images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const CTALogo0ne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  color: #f9f9f9;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 300ms;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 13px;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled(CTALogo0ne)`
  width: 90%;
`;
