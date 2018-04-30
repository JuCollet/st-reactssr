import React, { PureComponent } from 'react';
import NextLink from 'next/link';
import Navbar from './components/Navbar/Navbar';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userHasScrolled: false,
    };
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler() {
    let userHasScrolled;
    if (window.scrollY > 10) userHasScrolled = true;
    else userHasScrolled = false;
    this.setState({ userHasScrolled });
  }

  render() {
    return (
      <header className={`home-header ${this.state.userHasScrolled ? 'home-header-small' : ''}`}>
        <NextLink href="/">
          <img src="/static/logo.svg" className="home-header-logo" alt="Welcome to supertime" />
        </NextLink>
        <Navbar />
        <style jsx>{`
          .home-header {
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 999999;
            width: 100%;
            height: 75px;
            background-color: #FFFFFF;
            transition: .2s;
          }

          .home-header .home-header-logo {
            padding-top: 4px;
            margin-left: 2rem;
          }

          .home-header-small {
            height: 50px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}
        </style>
      </header>
    );
  }
}

export default Header;
