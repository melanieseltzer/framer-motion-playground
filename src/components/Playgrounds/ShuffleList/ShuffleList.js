import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { shuffle } from 'lodash';
import { motion } from 'framer-motion';

import { Section } from '../../Layout';

const FormWrapper = styled.form`
  display: flex;
`;

const List = styled.ul`
  padding-left: 0;
`;

const ListItem = styled(motion.li)`
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  list-style: none;
  margin: 0;
  margin-bottom: 5px;
  padding: 5px;
  color: #fff;
  font-size: 1.2rem;
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

  const handleShuffleNames = () => {
    const shuffledNames = shuffle(names);
    setNames(shuffledNames);
  };

  return (
    <Section title="Shuffle List">
      <p>Add a name to get started!</p>
      <FormWrapper onSubmit={handleAddName}>
        <input ref={ref} placeholder="E.g John" />
        <button>Add</button>
      </FormWrapper>

      {names.length ? (
        <List>
          {names.map(name => (
            <ListItem key={name} positionTransition>
              {name}
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No names yet</p>
      )}

      <button onClick={handleShuffleNames}>Shuffle names</button>
    </Section>
  );
};

export default ShuffleList;
