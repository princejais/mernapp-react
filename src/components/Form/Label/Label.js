import React from 'react';

const Label = (props) => {
  return (
    <label htmlFor={props.for}>{props.labelText}</label>
  );
}


export default Label;