import React from 'react';
import H1 from '../../components/titles/H1';
import ButtonPrimary from '../../components/buttons/ButtonPrimary'

const Movies = () => {
  return (
    <div class="m-2">
      <H1>Liste des films</H1>
      <ButtonPrimary>Tous</ButtonPrimary>
      <ButtonPrimary>Action</ButtonPrimary>
      <ButtonPrimary>Aventure</ButtonPrimary>
      <ButtonPrimary>Comédie</ButtonPrimary>
    </div>
  );
};

export default Movies;