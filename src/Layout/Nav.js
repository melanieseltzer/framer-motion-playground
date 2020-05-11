import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  position: relative;
  top: 0;
  overflow: auto;
  width: 100%;
  height: auto;
  order: 1;
  padding-bottom: 20px;
  @media (min-width: 601px) {
    order: 2;
    position: sticky;
    width: 200px;
    height: 50vh;
    margin-left: 40px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Navigation = () => (
  <NavWrapper>
    <h3>Navigation</h3>
    <nav>
      <li>
        <a href="#progress-bar">Progress Bar</a>
      </li>
    </nav>
  </NavWrapper>
);

export default Navigation;
