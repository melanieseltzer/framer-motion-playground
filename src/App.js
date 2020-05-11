import React from 'react';

import ProgressBar from './ProgressBar';
import { Layout, Content, Navigation } from './Layout';

function App() {
  return (
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

        <ProgressBar />
      </Content>

      <Navigation />
    </Layout>
  );
}

export default App;
