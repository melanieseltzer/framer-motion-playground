import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { slugify } from '../../utils';

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  flex: 1;
  order: 2;
  @media (min-width: 601px) {
    order: 1;
  }
`;

export const Section = ({ title, children }) => {
  const slugifyTitle = slugify(title);

  return (
    <section>
      <h2 id={slugifyTitle}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};