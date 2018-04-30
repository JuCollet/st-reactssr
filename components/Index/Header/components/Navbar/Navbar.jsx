import React from 'react';

const Navbar = () => (
  <nav className="nav">
    <ul>
      <li>Particuliers</li>
      <li>FAQ</li>
      <li>Tarifs</li>
      <li>Login</li>
    </ul>
    <style global jsx>{`
      .nav {
        display: flex;
        align-items: center;
        height: 100%;
        margin-right: 3rem;
      }

      .nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .nav ul li {
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        margin-left: 2rem;
        cursor: pointer;
        opacity: .6;
        transition: .2s;
      }

      .nav ul li:hover {
        opacity: 1;
      }
    `}
    </style>
  </nav>
);

export default Navbar;
