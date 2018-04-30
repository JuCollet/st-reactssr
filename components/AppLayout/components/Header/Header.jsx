import React from 'react';
import NextLink from 'next/link';

const Header = () => (
  <div className="app-header">
    <NextLink href="/">
      <img src="/static/logo.svg" className="app-header-logo" alt="Welcome to supertime" />
    </NextLink>
    <style jsx>{`
      .app-header {
        position: fixed;
        display: flex;
        align-items: center;
        z-index: 999999;
        width: 100%;
        height: 60px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        transition: .2s;
      }

      .app-header-logo {
        padding-top: 4px;
        margin-left: 2rem;
      }
    `}
    </style>
  </div>
);

export default Header;
