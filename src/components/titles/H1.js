import React from 'react';

const H1 = (props) => {
  return (
    <h1 className="border border-dark rounded text-white text-center bg-primary m-1 p-2">{props.children}</h1>
  );
};

export default H1;