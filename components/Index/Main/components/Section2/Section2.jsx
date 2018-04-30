import React from 'react';
import Button from '../../../../Button/Button';


const features = [
  {
    image: '/static/feature1.svg',
    alt: 'alt',
    title: 'Statistiques',
    title2: 'détaillées',
    description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
    link: 'link',
    btn: 'En savoir plus',
  },
  {
    image: '/static/feature2.svg',
    alt: 'alt',
    title: 'Outils de',
    title2: 'calcul avancés',
    description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
    link: 'link',
    btn: 'En savoir plus',
  },
  {
    image: '/static/feature3.svg',
    alt: 'alt',
    title: 'Réception de',
    title2: 'paiements',
    description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
    link: 'link',
    btn: 'En savoir plus',
  },
  {
    image: '/static/feature4.svg',
    alt: 'alt',
    title: 'Sécurité à',
    title2: 'toute épreuve',
    description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
    link: 'link',
    btn: 'En savoir plus',
  },
];

const featuresRender = () => (
  features.map(feature => (
    <li className="feature" key={feature.title}>
      <img src={feature.image} alt={feature.alt} />
      <span className="feature-title">{feature.title}<br />{feature.title2}</span>
      <span className="feature-description">{feature.description}</span>
      <Button title={feature.btn} color="outline" size="sm" />
    </li>
  ))
);

const Section2 = () => (
  <section className="section2">
    <div className="section2-background" />
    <div className="section-content">
      <article className="section-content-left">
        <h1 className="font-white">Gardez le contrôle.</h1>
        <p className="font-white">Où que vous soyez, configurez votre compte
        en un tour de main et bénéficiez d’outils performants
        pour gérer vos revenus et vos dépenses.
        </p>
      </article>
    </div>
    <div className="section-content">
      <ul className="features-list">
        {featuresRender()}
      </ul>
    </div>
    <style global jsx>{`
      .section2 {
        position: relative;
        overflow: hidden;
        padding-top: 100px;
        padding-bottom: 100px;
      }

      .section2 .section-content-left {
        width: 50%;
      }

      .section2 .features-list {
        display: flex;
        margin: 75px 0 0 0;
        padding: 0;
        list-style: none;
      }

      .features-list > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        text-align: center;
      }

      .features-list li > img {
        margin-bottom: 25px;
      }

      .section2 .feature-title {
        margin-bottom: 15px;
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
      }

      .section2 .feature-description {
        margin-bottom: 25px;
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        color: white;
        max-width: 175px;
      }

      .section2-background {
        position: absolute;
        z-index: -99999;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(#56CCF2, #2D9CDB);
        transform: skewY(-3deg);
        transform-origin: bottom right;
      }    
    `}
    </style>
  </section>
);

export default Section2;
