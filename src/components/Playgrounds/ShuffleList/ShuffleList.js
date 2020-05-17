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
  const [words, setWords] = useState([]);
  const ref = useRef(null);

  const handleAddName = event => {
    event.preventDefault();

    const { value } = ref.current;
    if (!value) return;

    setWords(state => [...state, value]);
    ref.current.value = null;
  };

  const handleShuffleWords = () => {
    const shuffledWords = shuffle(words);
    setWords(shuffledWords);
  };

  return (
    <Section title="Shuffle List">
      <p>Add a couple of words to get started, and then click to shuffle!</p>
      <FormWrapper onSubmit={handleAddName}>
        <input ref={ref} />
        <button>Add</button>
      </FormWrapper>

      {words.length ? (
        <List>
          {words.map(name => (
            <ListItem key={name} positionTransition>
              {name}
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No words yet</p>
      )}

      {words.length ? (
        <button onClick={handleShuffleWords}>Shuffle words</button>
      ) : null}
    </Section>
  );
};

export default ShuffleList;
