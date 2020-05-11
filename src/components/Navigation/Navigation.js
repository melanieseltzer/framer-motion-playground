import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  position: relative;
  top: 0;
  overflow: auto;
  width: 100%;
  height: auto;
  order: 1;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 20px;
  @media (min-width: 601px) {
    order: 2;
    position: sticky;
    width: 200px;
    height: 50vh;
    margin: 0;
    margin-left: 40px;
    padding: 0;
    border: 0;
  }

  h3 {
    margin-top: 0;
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
