import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "../components/pokemonListItem";
import View from  "../components/pokemonList";
import './App.css';

function App() {
  return (
    <div className="App">
      

      ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pokemon">
        <View />
      </Route>
      <Route path="/pokemon/details">
        <Details />
      </Route>
    </div>
  </Router>,
  node
);

    </div>
  );
}

export default App;
