import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import FilmListesi from './Filmler/FilmListesi';
import Film from './Filmler/Film';


export default function App () {
  const [saved, setSaved] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') 
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const kaydedilenlerListesineEkle = (movie) => {
    if (!saved.find((m) => m.id == movie.id )) {
      setSaved([...saved, movie]);
    }
  };

  const listedenCikar = (movie) => {
    setSaved(saved.filter((m) => m.id != movie.id));
    
  }

  return (
    <div>
      <KaydedilenlerListesi list={saved} />
      <Switch>

        <Route path="/" exact>
          <FilmListesi
            movies={movieList}
            saved={saved}
            kaydedilenlerListesineEkle={kaydedilenlerListesineEkle}
            listedenCikar={listedenCikar}
          />
        </Route>

        <Route path="/filmler/:id" exact>
          <Film
            saved={saved}
            kaydedilenlerListesineEkle = {kaydedilenlerListesineEkle}
            listedenCikar={listedenCikar}
          />
        </Route>

        <Route path="*" exact>
          <h1>404</h1>
        </Route>

      </Switch>
    </div>
  );
}