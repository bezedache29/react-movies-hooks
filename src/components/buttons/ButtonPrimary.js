import React from 'react';

const ButtonPrimary = (props) => {
  return (
    <button class="btn btn-primary" onClick={props.click}>{props.children}</button>
  );
};

export default ButtonPrimary;