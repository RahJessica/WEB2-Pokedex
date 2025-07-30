import { Fragment, useEffect, useState } from 'react';

function Home({searchTerm}) {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

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

const filteredPokemons = pokemonList.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  pokemon.id.toString().includes(searchTerm)
);

   return (
    <>

    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 mx-40 my-20">
      {filteredPokemons.map((pokemon) => (
        <div key={pokemon.id} className="bg-white rounded-xl shadow p-4 text-center border border-gray-300 cursor-pointer transform transition duration-300 hover:scale-104">
          <h2 className="font-bold capitalize text-lg">{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto w-20 h-20" />
          <p>N° {pokemon.id}</p>
          <div className="mt-2">
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.slot}
                className="text-sm text-white font-semibold rounded px-2 py-1 mx-1"
                style={{
                  backgroundColor: typeColors[typeInfo.type.name] || '#777',
                }}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );

}



export default Home;