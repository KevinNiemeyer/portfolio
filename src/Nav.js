import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import './App.css';

const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: #252525;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  width: 100%;
  margin: 0;
  overflow: hidden;
  padding: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: cornflowerblue;
  font-weight: bold;
  display: inline;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(0.015 * 100vw);
  &:hover {
    color: white;
  }
  padding: 0 50px;
  transition: all 0.3s;
`;

function Nav(props) {
  return (
    <Container>
      <Logo x={35} y={0} w={50} h={40} />{' '}
      <NavLinks className='navigation-sub'>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/projects'>Projects</StyledLink>
        <StyledLink to='/about'>About Me</StyledLink>
      </NavLinks>
    </Container>
  );
}

export default Nav;
