import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id, name } = useParams();

  return (
    <>
      <div>This page is under development.</div>
      <br />
      <br />
      <p>id: {id}</p>
      <p>pokemon_name: {name}</p>
    </>
  );
};

export default PokemonDetail;
