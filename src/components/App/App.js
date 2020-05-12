import React from 'react';

import { Layout, Content } from '../Layout';
import Footer from '../Footer';
import Navigation from '../Navigation';

import ProgressBar from '../ProgressBar';
import DragToDismiss from '../DragToDismiss';

const App = () => {
  return (
    <>
      <Layout>
        <Content>
          <h1>Framer Motion Playground</h1>
          <p>
            An exploration into what is possible with the{' '}
            <a
              href="https://github.com/framer/motion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Framer Motion
            </a>{' '}
            library.
          </p>

          <hr />

          {/* Playgrounds */}
          <ProgressBar />
          <DragToDismiss />
        </Content>

        <Navigation />
      </Layout>

      <Footer />
    </>
  );
};

export default App;
