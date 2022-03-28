import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PokemonList from "./pages/pokemonList";
import MyPokemon from "./pages/myPokemonList";
import PokemonDetail from "./pages/pokemonDetail";

import "./App.css";

const App = () => {

  useEffect(() => {
    if (!localStorage.getItem("my_pokemon_data")) {
      localStorage.setItem("my_pokemon_data", JSON.stringify([]));
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/mypokemonlist" element={<MyPokemon />} />
          <Route path="/pokemon/:id-:name" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
