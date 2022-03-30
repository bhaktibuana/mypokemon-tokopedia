import styled from "@emotion/styled";

const primaryColor = "#eadaff";
const secondaryColor = "#404040";
const tertiaryColor = "#fff";
const buttonDanger = "#ff5b5b";

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
  z-index: 0;
  border-radius: 0.25rem;
  background-color: ${primaryColor};
  display: flex;
  transition: all 0.2s ease-in-out;
`;

export const CardImage = styled.div`
  max-width: 96px;
  min-width: 96px;
  height: 100%;
  min-height: 120px;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    object-fit: contain;
    width: 100%;
    max-height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 0.25rem 0 0 0.25rem;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const CardItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 15px 20px;
  box-shadow: -2px 0 5px rgb(0 0 0 / 5%);
  color: ${secondaryColor};

  & > h1.pokemon-nickname {
    margin: 0;
    font-size: 18px;
    margin-bottom: 8px;
  }

  & > p.pokemon-name {
    color: initial;
    margin: 0;
    font-size: 14px;
  }

  & > button.delete-pokemon {
    width: 100%;
    height: 30px;
    margin-top: auto;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
    outline: none;
    background-color: ${buttonDanger};
    color: ${tertiaryColor};
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    }

    &:active {
      box-shadow: none;
    }

    & > p {
      margin: 0;
      font-weight: bold;
    }
  }
`;
