import React, { useState, useRef } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';

import { Section } from '../../Layout';

const FormWrapper = styled.form`
  display: flex;
`;

const ShuffleList = () => {
  const [names, setNames] = useState([]);
  const ref = useRef(null);

  const handleAddName = event => {
    const { value } = ref.current;
    event.preventDefault();
    setNames(state => [...state, value]);
    ref.current.value = null;
  };

  return (
    <Section title="Shuffle List">
      <p>Add a name to get started!</p>
      <FormWrapper onSubmit={handleAddName}>
        <input ref={ref} placeholder="E.g John" />
        <button>Add</button>
      </FormWrapper>

      <h3>Chore chart</h3>
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
