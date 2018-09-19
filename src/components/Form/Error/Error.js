import React from 'react';
import './Error.css';

const Error = (props) => {
  return (
    <p className="error">{props.errorText}</p>
  );
}

export default Error;