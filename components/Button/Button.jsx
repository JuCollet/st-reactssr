import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    className={`
      btn
      btn-${props.size}
      btn-${props.color}
    `}
    onClick={props.clickHandler}
  >
    {props.title}
    <style jsx>{`
      .btn {
        font-family: 'Roboto', sans-serif;
        margin: .5em 0;
        border: none;
        transition: .2s;
        cursor: pointer;
      }

      .btn-sm {
        padding: 10px 25px;
        border-radius: 30px;
        font-size: 1em;
      }

      .btn-md {
        padding: 12.5px 35px;
        border-radius: 50px;
        font-size: 1.25rem;
      }

      .btn-blue {
        background-color: #56CCF2;
        color: white;
      }

      .btn-blue:hover {
        box-shadow: 0px 0px 7px 3px #E9E9E9;
      }

      .btn-outline {
        background: none;
        border: 1px solid rgb(26, 65, 78);
      }

      .btn-outline:hover {
        border-color: white;
        color: white;
      }

      .btn:focus {
        outline:0;
      }
    `}
    </style>
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['blue', 'outline']),
};

Button.defaultProps = {
  clickHandler: a => a,
  size: 'md',
  color: 'blue',
};

export default Button;
