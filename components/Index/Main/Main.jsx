import React from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const Main = () => (
  <main rol="main" className="main">
    <Section1 />
    <Section2 />
    <style global jsx>{`
      main {
        padding-top: 75px;
        height: calc(100% - 75px);
      }

      section {
        width: 100%;
      }

      .section-content {
        width: 90%;
        max-width: 960px;
        margin: 0 auto;
        padding: 0% 5%;
      }    
    `}
    </style>
  </main>
);

export default Main;
