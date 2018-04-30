import React from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

/* eslint-disable react/prop-types */
const AppLayout = props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="app-content">
      {props.children}
    </div>
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

      .app-content {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 90px 15px 15px 100px;
        width: calc(100% - 115px);
        min-height: calc(100% - 105px);
        background-color: #F2F2F2;
      }

      .app-content-title {
        width: 100%;
        font-family: Heebo, sans-serif;
        margin-bottom: 25px;
        font-size: 1.5em;
        font-weight: 800;
        color: #546275;
      }

      .card {
        position: relative;
        overflow: hidden;
        flex-shrink: 0;
        padding: 25px;
        margin-right: 15px;
        margin-bottom: 15px;
        background: #FFFFFF;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        transition: .2s;
        cursor: pointer;
      }

      .card:hover {
        box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.1);
      }

      .card-title {
        display: block;
        margin-bottom: 15px;
        font-family: Heebo, sans-serif;
        font-weight: 500;
        font-size: 1.2em;
        color: #546275;
      }

      .card-link {
        position: absolute;
        font-family: Roboto, sans-serif;
        font-size: .7em;
        text-transform: uppercase;
        right: 25px;
        bottom: 15px;
        color: #9E9E9E;
        cursor: pointer;
        transition: .2s;
      }

      .card-link:hover {
        color: #6E6E6E;
      }

      .card-sm {
        width: 200px;
        height: 250px;
      }

      .card-md {
        width: 300px;
        height: 250px;
      }

      .card-lg {
        width: 400px;
        height: 250px;
      }
    `}
    </style>
  </div>
);

export default AppLayout;
