import pokemonListItems from 

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