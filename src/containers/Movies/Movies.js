import React, { useEffect, useState } from 'react';
import H1 from '../../components/titles/H1';
import ButtonPrimary from '../../components/buttons/ButtonPrimary'
import axios from 'axios';

const Movies = () => {

  const API_KEY = "api_key=ddf19519aefe401f58ad6ac7d13f7a1d"
  const API_URL = "https://api.themoviedb.org/3/"
  const LANG = "language=fr-FR"
  const IMAGE_LINK = "https://image.tmdb.org/t/p/w500"

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}movie/now_playing?${API_KEY}&${LANG}`)
      .then(res => {
        // console.log(res.data.results)
        setMovies(res.data.results)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="m-2">

      <H1>Liste des films</H1>

      <div className="my-3">
        <ButtonPrimary>Tous</ButtonPrimary>
        <ButtonPrimary>Action</ButtonPrimary>
        <ButtonPrimary>Aventure</ButtonPrimary>
        <ButtonPrimary>Comédie</ButtonPrimary>
      </div>

      <div className="row">
        {
          movies.map(movie => (
            <>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="card mx-1 my-2 border-primary">
                    <img src={IMAGE_LINK + movie.backdrop_path} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                      <h5 className="card-title text-truncate">{movie.title}</h5>
                      <p className="card-text text-truncate">{movie.overview !== "" ? movie.overview : "Pas de description"}</p>
                      <a href="#" className="btn btn-primary">Voir plus</a>
                    </div>
                  </div>
              </div>
            </>
          ))
        }
      </div>

    </div>
  );
};

export default Movies;