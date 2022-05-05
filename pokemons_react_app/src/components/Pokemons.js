import React, {useState, useEffect} from "react"; 
import  PokemonId from "./PokemonId";
import axios from 'axios'
export default function Pokemons(props) {
const [pokemons, setPokemons] = useState ([]);

const getPokemons = () => {
axios.get('http://localhost:3000/pokemons')
.then((response) => {
setPokemons(response.data);

}
).catch((err) => {
  console.log(err);
})

}

useEffect(() => {
getPokemons()
},[]);

  return (
    <>
  
     
        {pokemons.map((item, index) => {
          console.log(item)
          
          return (
            <h1>{item.name.english}</h1>
            


           //  id={item.sys.id}
            //  key={item.sys.id}
           //   name={item.fields.name}
            //  type={item.fields.type}
            //  base={item.fields.base}
          
            
          );
        })}
      
    </>
  );
}
