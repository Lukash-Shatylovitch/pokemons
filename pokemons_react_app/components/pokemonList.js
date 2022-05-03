import pokemonListItems from "../components/pokemonListItems"

export default function Details (props) {


    return (
        <div>
            {props.pokemon.map((pokemon, index) => {
        return (
          <Pokemon pokemon={pokemon}/>
        );
      })}
        </div>
    )
}