import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FilmCard from './FilmCard';

export default function Film(props) {
  const [movie, setMovie] = useState();
  const { kaydedilenlerListesineEkle, saved, listedenCikar } = props;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/filmler/${id}`) 
      .then(response => {
          setMovie(response.data);})
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return <FilmCard
    saved= {saved}
    movie = {movie} 
    kaydedilenlerListesineEkle={kaydedilenlerListesineEkle}
    listedenCikar={listedenCikar}
    />;
}