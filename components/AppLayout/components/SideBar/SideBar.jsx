import React from 'react';
import NextLink from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

const links = [
  {
    img: '/static/feature1.svg',
    alt: 'feature1',
    link: 'stats',
  },
  {
    img: '/static/feature2.svg',
    alt: 'feature2',
    link: 'calc',
  },
  {
    img: '/static/feature3.svg',
    alt: 'feature3',
    link: 'send',
  },
  {
    img: '/static/feature4.svg',
    alt: 'feature4',
    link: 'keep',
  },
];

const Sidebar = ({ router }) => (
  <div className="app-sidebar">
    <ul className="app-sidebar-links">
      {links.map(link => (
        <NextLink href={`/app/${link.link}`} key={link.alt} >
          <li className={router.pathname === `/app/${link.link}` ? 'active' : ''}>
            <input type="image" src={link.img} alt={link.alt} height="25px" width="auto" />
          </li>
        </NextLink>
      ))}
    </ul>
    <style global jsx>{`
      .app-sidebar {
        position: fixed;
        padding-top: 60px;
        width: 60px;
        height: 100%;
        background: linear-gradient(167.4deg, #56CCF2 -17.77%, #3799B9 144.65%);
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
      }

      .app-sidebar ul {
        padding: 0;
        margin: 0;
      }

      .app-sidebar li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        width: 100%;
        padding: 0;
        margin: 0;
        cursor: pointer;
      }

      .app-sidebar li input:focus {
        outline: none;
      }

      .app-sidebar li:hover {
        background-color: #3799B9;
      }

      .app-sidebar li.active {
        background: #546275;
        box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
      }

    `}
    </style>
  </div>
);

Sidebar.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Sidebar);
