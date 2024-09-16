import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => console.error('Erro ao buscar Pokémon:', error));
  }, []);

  return (
    <div className='DivHome'>
      <h1 className='textlist'>Lista de Pokémon</h1>
      <ul className='ulPoke'>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
