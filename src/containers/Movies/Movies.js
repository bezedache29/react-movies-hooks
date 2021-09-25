import React, { useEffect, useRef, useState } from 'react';
import H1 from '../../components/titles/H1';
import ButtonPrimary from '../../components/buttons/ButtonPrimary'

// Hook perso
import useLoadData from '../../utils/hooks/useLoadData';

const Movies = () => {

  const API_KEY = "api_key=ddf19519aefe401f58ad6ac7d13f7a1d"
  const API_URL = "https://api.themoviedb.org/3/"
  const LANG = "language=fr-FR"
  const IMAGE_LINK = "https://image.tmdb.org/t/p/w500"

  const [movies, loadMovies] = useLoadData()
  const [genre, setGenre] = useState('all')
  // 28 Action
  // 12 Aventure
  // 35 Comedy
  const isMounted = useRef(false)

  useEffect(() => {
    loadMovies(`${API_URL}movie/now_playing?${API_KEY}&${LANG}`)
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      loadMovies(`${API_URL}movie/now_playing?${API_KEY}&${LANG}`, genre)
    }
  }, [genre])

  // Bidouille pour empecher de lancer les 2 premier useEffect au mount. (utilisation de useRef)
  useEffect(() => {
    isMounted.current = true
  }, [])

  return (
    <div className="m-2">

      <H1>Liste des films actuellement en salles</H1>

      <div className="my-3">
        <ButtonPrimary css={genre === 'all' ? true : false} click={() => setGenre('all')}>Tous</ButtonPrimary>
        <ButtonPrimary css={genre === 28 ? true : false} click={() => setGenre(28)}>Action</ButtonPrimary>
        <ButtonPrimary css={genre === 12 ? true : false} click={() => setGenre(12)}>Aventure</ButtonPrimary>
        <ButtonPrimary css={genre === 35 ? true : false} click={() => setGenre(35)}>Comédie</ButtonPrimary>
      </div>

      <div className="row">
        {
          movies && movies.map(movie => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={movie.id}>
              <div className="card mx-1 my-2 border-primary">
                  <img src={IMAGE_LINK + movie.backdrop_path} className="card-img-top" alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{movie.title}</h5>
                    <p className="card-text text-truncate">{movie.overview !== "" ? movie.overview : "Pas de description"}</p>
                    <a href="#" className="btn btn-primary">Voir plus</a>
                  </div>
                </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Movies;