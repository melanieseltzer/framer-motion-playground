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

const ToastColorBorder = styled.div`
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
  padding: 10px;
  width: 20px;
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
          <ToastColorBorder />
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
