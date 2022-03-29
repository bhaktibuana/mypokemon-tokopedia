import React from "react";
import { CardContainer, CardImage, CardText } from "./cardViewStyled";
import { useNavigate } from "react-router-dom";

const CardView = (props) => {
  const navigate = useNavigate();

  const getId = (url) => {
    const urlArr = url.split("/");
    return parseInt(urlArr[urlArr.length - 2]);
  };

  const detailPageUrl = `/pokemon/${props.name}`;

  const handleClick = (e) => {
    e.preventDefault();
    navigate(detailPageUrl);
  };

  const firstLetterUpperCase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const getTotalOwned = (name) => {
    const myPokemonData = JSON.parse(localStorage.getItem("my_pokemon_data"));
    const selectPokemon = myPokemonData.filter(
      (value) => value.pokemonName === name && value.id === getId(props.url)
    );
    return selectPokemon.length;
  };

  return (
    <>
      <CardContainer>
        <a href={detailPageUrl} className="card-content" onClick={handleClick}>
          <CardImage>
            <img src={props.imageUrl} alt={props.name} />
          </CardImage>

          <CardText>
            <h1>Name: {firstLetterUpperCase(props.name)}</h1>
            <p>Total Owned: {getTotalOwned(props.name)}</p>
          </CardText>
        </a>
      </CardContainer>
    </>
  );
};

export default CardView;
