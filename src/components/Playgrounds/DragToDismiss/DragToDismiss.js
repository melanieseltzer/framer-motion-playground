import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import { Section } from '../../Layout';

const Toast = styled(motion.div)`
  position: fixed;
  display: flex;
  height: 100px;
  right: 0;
  top: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  width: 100%;
  max-width: 320px;
  @media (min-width: 375px) {
    right: 20px;
    top: 40px;
  }
  @media (min-width: 415px) {
    right: 20px;
  }
`;

const ToastIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd9d9;
  color: #cd0203;
  padding: 10px;
  width: auto;
`;

const IconWrapper = styled.span`
  border-radius: 50px;
  border: 2px solid #cd0203;
  width: 25px;
  height: 25px;
`;

const CloseIcon = styled.span`
  :before {
    content: 'x';
    font-weight: 300;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
  }
`;

const ToastContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
  background: #fff;
  h4,
  p {
    margin: 0;
  }
`;

const DragToDismiss = () => {
  const [showToast, setShowToast] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.point.x) > 75) {
      setShowToast(false);
    }
  };

  const toggleToast = () => setShowToast(state => !state);

  return (
    <Section title="Drag to Dismiss">
      <h4>Toast</h4>

      <p>Generate the toast and click to drag it away - in any direction!</p>
      <button onClick={toggleToast}>Toggle toast</button>

      {showToast && (
        <Toast
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          style={{ x, opacity: showToast ? opacity : 0 }}
          onDragEnd={handleDragEnd}
        >
          <ToastIcon>
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          </ToastIcon>
          <ToastContent>
            <div>
              <h4>I&apos;m a message toast</h4>
              <p>Click and drag to dismiss me!</p>
            </div>
          </ToastContent>
        </Toast>
      )}
    </Section>
  );
};

export default DragToDismiss;
