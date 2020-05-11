import React from 'react';

import { Layout, Content, Navigation } from '../Layout';
import Footer from '../Footer';

// playgrounds
import ProgressBar from '../ProgressBar';

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

          <ProgressBar />
        </Content>

        <Navigation />
      </Layout>

      <Footer />
    </>
  );
};

export default App;
