import React, { useState, useEffect } from "react";
import PokemonId from "./PokemonId";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Pokemons(props) {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();
  const getPokemons = () => {
    axios
      .get("http://localhost:3000/pokemons")
      .then((response) => {
        setPokemons(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      {pokemons.map((item, index) => {
        console.log(item);

        return (
          <div key={index}> 
            <h1 classname= 
              onClick={() => {
                navigate(`/pokemon/${item.id}`);
              }}
            >
              {" "}
              {item.name.english}
            </h1>
          </div>
        );
      })}
    </>
  );
}
