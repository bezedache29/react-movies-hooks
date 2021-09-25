import React from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';

const H1 = (props) => {
  return (
    <>
      <h1 className="border border-dark rounded text-white text-center bg-primary m-2 p-2">{props.children}</h1>
      <ButtonPrimary>Tous</ButtonPrimary>
      <ButtonPrimary>Action</ButtonPrimary>
      <ButtonPrimary>Aventure</ButtonPrimary>
      <ButtonPrimary>Comédie</ButtonPrimary>
    </>
  );
};

export default H1;