import React from 'react';

export default function FilmCard (props) {
  const { title, director, metascore, stars } = props.movie;
  const { filmDetayAc, kaydedilenlerListesineEkle, saved, listedenCikar } = props; 

  return (
    <div className="save-wrapper">
      <div className="movie-card" onClick={() => filmDetayAc && filmDetayAc()}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars?.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      { saved.find(m => m.id === props.movie.id) 
        ? <button 
          className="save-button" 
          onClick={() => {
            listedenCikar(props.movie)
        }} > 
            - Remove from list
          </button> 
        : <button 
            className="save-button" 
            onClick={() => 
              kaydedilenlerListesineEkle && kaydedilenlerListesineEkle(props.movie) } 
      >Save</button> }
      
    </div>
  );
}