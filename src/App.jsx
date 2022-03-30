import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PokemonList from "./pages/pokemonList";
import MyPokemon from "./pages/myPokemonList";
import PokemonDetail from "./pages/pokemonDetail";

import "./App.css";

export const SidebarStateContext = React.createContext();
export const CurrentPageContext = React.createContext();

const App = () => {
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    if (!localStorage.getItem("my_pokemon_data")) {
      localStorage.setItem("my_pokemon_data", JSON.stringify([]));
    }
  }, []);
  return (
    <>
      <CurrentPageContext.Provider value={[page, setPage]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/mypokemonlist" element={<MyPokemon />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </CurrentPageContext.Provider>
    </>
  );
};

export default App;
