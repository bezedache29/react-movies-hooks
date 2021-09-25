import React from 'react';

const ButtonPrimary = (props) => {

  const style = {
    outline: 'none!important',
    boxShadow: 'none'
  }

  let className = "btn btn-outline-primary m-1"

  if (props.css) {
    className = "btn btn-primary m-1"
  }

  return (
    <button style={style} className={className} onClick={props.click}>{props.children}</button>
  );
};

export default ButtonPrimary;