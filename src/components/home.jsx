import { Fragment, useEffect, useState } from 'react';

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemons() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await res.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json(); 
        })
      );

      setPokemonList(detailedPokemons);
      setLoading(false);
    }

    loadPokemons();
  }, []);

  if (loading) return <p>Chargement des Pokémons...</p>;
}

export default Home;