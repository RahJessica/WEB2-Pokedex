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
   return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className="bg-white rounded-xl shadow p-4 text-center">
          <h2 className="font-bold capitalize text-lg">{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto w-20 h-20" />
          <p>N° {pokemon.id}</p>
        </div>
      ))}
    </div>
  );

}



export default Home;