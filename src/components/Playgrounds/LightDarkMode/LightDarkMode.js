import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { Section } from '../../Layout';

const variants = {
  initial: { opacity: 0, scale: 0.5, x: 0, rotate: -90 },
  animate: { opacity: 1, scale: 1, x: 0, rotate: 0 },
  exit: { opacity: 0, scale: 0.5, x: 0, rotate: 90 }
};

const AnimatedIcon = ({ iconKey, children }: AnimatedProps) => (
  <motion.div
    key={iconKey}
    variants={variants}
    positionTransition
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export const IconButton = styled.button`
  cursor: pointer;
  font: inherit;
  width: auto;
  height: auto;
  border: 0;
  background: transparent;
  padding: 10px;
  margin: 0;
  &:hover {
    background: none;
  }
`;

const LightDarkMode = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const ariaLabel = isLightMode ? 'Activate dark mode' : 'Activate light mode';
  const iconSize = '2rem';
  const iconColor = '#343434';

  return (
    <Section title="Light/Dark Mode Toggle">
      <p>Click on the icon to toggle between light/dark mode.</p>
      <AnimatePresence initial={false}>
        <IconButton
          aria-label={ariaLabel}
          onClick={() => setIsLightMode(state => !state)}
        >
          {isLightMode ? (
            <AnimatedIcon iconKey="sun">
              <FiSun size={iconSize} color={iconColor} />
            </AnimatedIcon>
          ) : (
            <AnimatedIcon iconKey="moon">
              <FiMoon size={iconSize} color={iconColor} />
            </AnimatedIcon>
          )}
        </IconButton>
      </AnimatePresence>
    </Section>
  );
};

export default LightDarkMode;
