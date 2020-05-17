import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { slugify } from '../../utils';

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 20px auto;
`;

export const Content = styled.div`
  flex: 1;
  order: 2;
  @media (min-width: 601px) {
    order: 1;
  }
`;

export const SectionWrapper = styled.section`
  h2 {
    margin-top: 50px;
  }
`;

export const Section = ({ title, children }) => {
  const id = slugify(title);

  return (
    <SectionWrapper>
      <h2 id={id}>{title}</h2>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
