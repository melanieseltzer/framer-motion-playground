import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Section } from '../Layout';

const Toast = styled(motion.div)`
  display: flex;
  height: 100px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
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
  h4,
  p {
    margin: 0;
  }
`;

const DragToDismiss = () => {
  return (
    <Section title="Drag to Dismiss">
      <h4>Toast</h4>

      <Toast>
        <ToastIcon>
          <IconWrapper>
            <CloseIcon />
          </IconWrapper>
        </ToastIcon>
        <ToastContent>
          <div>
            <h4>Oh no</h4>
            <p>
              Something bad just happened{' '}
              <span role="img" aria-label="cry emoji">
                😢
              </span>
            </p>
          </div>

          <CloseIcon />
        </ToastContent>
      </Toast>
    </Section>
  );
};

export default DragToDismiss;
