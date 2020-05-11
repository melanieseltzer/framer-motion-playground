import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import { Section } from './Layout';

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BarContainer = styled.div`
  background: #8e2de2;
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  border-radius: 5px;
  overflow: hidden;
  height: 30px;
  position: relative;
  flex: 1;
`;

const Bar = styled(motion.div)`
  background: #eee;
  width: 100%;
  color: #fff;
  height: 100%;
`;

const TrackProgress = styled.div`
  padding-left: 5px;
  text-align: right;
  width: 40px;
`;

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const keyframes = ['0%', '25%', '50%', '75%', '100%'];
  const [x, cycleX] = useCycle('0%', '25%', '50%', '75%', '100%');

  // Simulate a makeshift upload process from 0 - 100%
  useEffect(() => {
    let interval = setInterval(() => {
      setProgress(state => state + 25);
    }, 1000);

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        interval = setInterval(() => {
          setProgress(0);
        }, 1000);
      }, 1500);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Section title="Progress Bar">
      <h4>Repeat with timings</h4>

      <BarContainer>
        <Bar
          animate={{ x: keyframes }}
          transition={{
            loop: Infinity,
            repeatDelay: 1.5,
            duration: 5,
            times: [0, 0.5, 0.6, 0.9, 1]
          }}
        />
      </BarContainer>

      <h4>Repeat with simulated progress</h4>

      <ProgressWrapper>
        <BarContainer>
          <Bar
            animate={{ x: keyframes }}
            transition={{
              loop: Infinity,
              repeatDelay: 1.5,
              duration: 5
            }}
          />
        </BarContainer>

        <TrackProgress>{progress}%</TrackProgress>
      </ProgressWrapper>

      <h4>Cycle values</h4>

      <ProgressWrapper>
        <BarContainer>
          <Bar initial={false} animate={{ x }} transition={{ duration: 1 }} />
        </BarContainer>
      </ProgressWrapper>

      <button onClick={() => cycleX()}>Click to cycle</button>
    </Section>
  );
};

export default ProgressBar;
