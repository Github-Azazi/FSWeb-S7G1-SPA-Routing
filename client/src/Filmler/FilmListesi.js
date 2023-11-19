import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FilmCard from './FilmCard';

export default function FilmListesi(props) {
  const history = useHistory();
  const { kaydedilenlerListesineEkle, saved, listedenCikar } = props 


  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <FilmCard
        saved= {saved}
        key={movie.id} 
        movie={movie} 
        filmDetayAc={() => {
            history.push(`/filmler/${movie.id}`);
          }} 
          kaydedilenlerListesineEkle={kaydedilenlerListesineEkle}
          listedenCikar={listedenCikar}
        />
        ))}
    </div>
  );
}