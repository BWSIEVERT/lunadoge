import React from 'react'

// Styles
import styled from 'styled-components';
import {
    device
} from './HomeStyles'

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media ${device.laptopL} {
      display: none;
  }
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    background-color: #fff;
    position: relative;
    transform-origin: 1px;
  }
`;

const Burger = ({ open, setOpen}) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
    )
}

export default Burger
