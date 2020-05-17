import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 50px;
  color: #fff;
  a {
    color: #ffc2a9;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      A side project by &nbsp;
      <a
        href="https://github.com/melanieseltzer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Melanie Seltzer
      </a>{' '}
      &nbsp; 🚀
    </FooterWrapper>
  );
};

export default Footer;
