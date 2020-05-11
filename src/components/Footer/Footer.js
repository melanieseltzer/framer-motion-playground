import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: 50px;
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
