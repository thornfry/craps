import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = (props) => {
  return (
    <Link to={props.location}>
      <button type="button">
        {props.displayText}
      </button>
    </Link>
  )
};
