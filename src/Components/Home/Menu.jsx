import React from 'react'

// Styles
// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background-color: #111111;
  width: 100%;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: 0.5s;
    font-family: open sans;
    color: #fff;
    &:hover {
        color: #00FFFF;
    transition: color 0.5s;
    }
  }
`;




const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
      <a href="/">
          Home
      </a>
      <a href="/">
          About
        </a>
      <a href="/">
          White Paper
        </a>
        <a href="/">
          How to Buy
        </a>
        <a href="/">
          Our Team
        </a>
    </StyledMenu>
    )
}

export default Menu
