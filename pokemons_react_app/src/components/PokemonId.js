import PokemonIdInfo from "./PokemonIdInfo";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonId(props) {
  const [pokemon, setPokemon] = useState();
  const params = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:3000/pokemons/${params.id}`)
      .then((response) => {
          console.log(response.data)
        setPokemon(response.data.pokemon);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {pokemon ? (
        <div>
          <p>Name : {pokemon.name.english}</p>
          <p>Attack : {pokemon.base.Attack}</p>
          <p>Defense : {pokemon.base.Defense}</p>
          <p>HP : {pokemon.base['HP']}</p>
          <p>Space Attack : {pokemon.base['Sp._Attack']}</p>
          <p>Space Defense : {pokemon.base['Sp. Defense']}</p>
          <p>Speed : {pokemon.base.Speed}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
