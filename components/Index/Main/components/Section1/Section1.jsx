import React from 'react';
import { withRouter } from 'next/router';
import Button from '../../../../Button/Button';

/* eslint react/prop-types: 0 */
const Section1 = ({ router }) => (
  <section className="section1">
    <div className="section-content">
      <article className="section-content-left">
        <h1>Recevoir des paiements n’a jamais été aussi simple.</h1>
        <p>En quelques clics, ouvrez gratuitement un compte
         et commencez à recevoir vos paiements.
        </p>
        <Button title="Créer un compte" clickHandler={() => router.push('/app/stats')} />
      </article>
      <aside className="section-content-right">
        <div className="section1-art" title="L'application est intuitive et simple à utiliser." />
      </aside>
    </div>
    <style jsx>{`
      .section1 {
        height: 80%;
        background-color: #FFFFFF;
      }

      .section1 .section-content {
        display: flex;
        align-items: center;
        height: 100%;
      }

      .section1 .section-content-left {
        width: 50%;
      }

      .section1 .section-content-right {
        width: 50%;
      }

      .section-content-right {
        align-self: flex-start;
      }

      .section-content-right .section1-art {
        position: relative;
        top: 25px;
        width: 100%;
        height: 100vh;
        min-height: 600px;
        max-height: 700px;
        background-position: top center;
        background-image: url(/static/mockup2.png);
        background-size: contain;
        background-repeat: no-repeat;
      }
    `}
    </style>
  </section>
);

export default withRouter(Section1);
