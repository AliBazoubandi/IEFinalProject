import React from "react";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  Logo,
  Title,
  Subtitle,
  StyledLink,
  Footer,
} from "./Home/style";
import logoImage from "../assets/logo.png"

const Home = () => {
  return (
    <HomeContainer>
      <Logo>
        <img src={logoImage} alt="Logo" />
      </Logo>
      <Title>Welcome To Shahid Beheshti University Resource Reservation Site</Title>
      <Subtitle>
        Manage and reserve Shahid Beheshti University resources effortlessly. Sign in or sign up to get started.
      </Subtitle>
      <div>
        <StyledLink to="/signin">Sign In</StyledLink>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </div>
      <Footer>© 2025 Resource Reservation System. All rights reserved.</Footer>
    </HomeContainer>
  );
};

export default Home;
