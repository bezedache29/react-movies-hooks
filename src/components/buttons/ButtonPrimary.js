import React from 'react';

const ButtonPrimary = (props) => {
  return (
    <button className="btn btn-outline-primary m-1" onClick={props.click}>{props.children}</button>
  );
};

export default ButtonPrimary;