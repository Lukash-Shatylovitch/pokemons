import React from "react";

export default function List(props) {
  return (
    <>
    <h2 className="">List</h2>
     
        {props.dataObj.map((item, index) => {
          return (
            <PokemonListItems
           //  id={item.sys.id}
            //  key={item.sys.id}
           //   name={item.fields.name}
            //  type={item.fields.type}
            //  base={item.fields.base}
            />
          );
        })}
      
    </>
  );
}
