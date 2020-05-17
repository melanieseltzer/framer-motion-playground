import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Layout, Content } from '../Layout';
import Footer from '../Footer';
import Navigation from '../Navigation';

import ProgressBar from '../Playgrounds/ProgressBar';
import DragToDismiss from '../Playgrounds/DragToDismiss';
import LightDarkMode from '../Playgrounds/LightDarkMode';
import ShuffleList from '../Playgrounds/ShuffleList';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    max-width: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
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
          <LightDarkMode />
          <ShuffleList />
        </Content>

        <Navigation />
      </Layout>

      <Footer />
    </>
  );
};

export default App;
