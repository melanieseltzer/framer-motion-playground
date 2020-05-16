import React, { useState } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';

import { Section } from '../../Layout';

const FormWrapper = styled.div`
  display: flex;
`;

const ShuffleList = () => {
  const [names] = useState([]);
  return (
    <Section title="Shuffle List">
      <p>Add a name to get started!</p>
      <FormWrapper>
        <input placeholder="E.g John" />
        <button>Add</button>
      </FormWrapper>

      {names.length ? (
        <ul>
          {names.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No names yet</p>
      )}
    </Section>
  );
};

export default ShuffleList;
