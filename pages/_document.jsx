import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="fr">
        <Head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Heebo:800,500" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet" />
          <style global jsx>{`
            html, body, #root, .wrapper, #__next {
              height: 100%;
            }

            h1, h2, h3 {
              font-family: 'Heebo', sans-serif;
              font-weight: 800;
              color: #383838;
              padding: 0;
              margin: 0px 0px 15px 0px;
            }

            h1 {
              font-size: 2em;
            }

            h2 {
              font-size: 1.5em;
            }

            p {
              font-family: 'Roboto', sans-serif;
              font-weight: 300;
              font-size: 1.25em;
              color: #383838;
            }

            .font-white {
              color: #FFFFFF !important;
            }
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
