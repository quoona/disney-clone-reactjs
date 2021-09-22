/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <a href="#">
          <img src="./images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a href="#">
          <img src="./images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="./images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="./images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="./images/movie-icon.svg" />
          <span>MOVIE</span>
        </a>
        <a href="#">
          <img src="./images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="./images/cat.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    cursor: pointer;

    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
