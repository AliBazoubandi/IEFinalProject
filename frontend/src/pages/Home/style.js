// src/pages/style.js
import styled from "styled-components";
import { Link } from "react-router-dom"; 

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f7fc;
  padding: 20px;
  text-align: center;
`;

export const Logo = styled.div`
  width: 120px;
  height: 120px;
  background-color: #007bff;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Footer = styled.footer`
  margin-top: 50px;
  font-size: 14px;
  color: #aaa;
`;
