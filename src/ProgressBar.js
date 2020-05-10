import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProgressContainer = styled.div`
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
`;

const Bar = styled(motion.div)`
  background: #8e2de2;
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  width: 100%;
  color: #fff;
  padding: 5px;
  height: 100%;
`;

const ProgressBar = () => {
  return (
    <div>
      <h2>Progress Bar</h2>

      <ProgressContainer>
        <Bar
          animate={{ x: ['-75%', '-50%', '-25%', '0%'] }}
          transition={{ duration: 5, times: [0, 0.7, 0.8, 1] }}
        />
      </ProgressContainer>
    </div>
  );
};

export default ProgressBar;
