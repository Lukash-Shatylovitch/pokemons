import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonId from  "./components/PokemonId";
import PokemonIdInfo from "./components/PokemonIdInfo";
import './App.css';
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <div className="App">
      

     


  <Router>
    <div>
      <Routes>
      <Route exact path="/"  element={<Pokemons />}>
     
      </Route>
      <Route path="pokemon/:id" element = {<PokemonId />}>
        
      </Route>
      <Route path="/pokemon/:id/:info" element = {<PokemonIdInfo />}>
     
      </Route>
      </Routes>
    </div>
  </Router>

    </div>
  );
}

export default App;
