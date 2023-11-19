import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  return (
    <div className="saved-list">
      <h3>Saved Movies</h3>
      <ul>
        {props.list.map(movie => (
          <li key={movie.id} className="saved-movie">
            <NavLink to={`/filmler/${movie.id}`}>
            
            {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="home-button" 
      onClick={() => {
        history.push('/');
      }} >HomePage</button>
    </div>
  ); 
}