import React from "react";
import { CardContainer, CardImage, CardItems } from "./listViewStyled";

const ListView = (props) => {
  const firstLetterUpperCase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <>
      <CardContainer>
        <CardImage>
          <img src={props.imageUrl} alt={props.name} />
        </CardImage>

        <CardItems>
          <h1 className="pokemon-nickname">Nickname: {props.nickname}</h1>

          <p className="pokemon-name">
            Pokemon: {firstLetterUpperCase(props.name)}
          </p>

          <button
            className="delete-pokemon"
            onClick={() => {
              props.setModalReleaseVisible(true);
              props.setSelectedNickname(props.nickname);
            }}
          >
            <p>Release</p>
          </button>
        </CardItems>
      </CardContainer>
    </>
  );
};

export default ListView;
