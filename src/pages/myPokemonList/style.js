import styled from "@emotion/styled";

const primaryColor = "#f7f7f7";
const secondaryColor = "#fff";
const tertiaryColor = "#b478ff";
const quaternaryColor = "#eadaff";
const buttonDanger = "#ff5b5b";

export const MyPokemonContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: absolute;
  background-color: ${primaryColor};
`;

export const MyPokemonContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentBody = styled.div`
  width: 100%;
  height: auto;
  margin-inline: auto;
  padding-inline: 10px;
  margin-bottom: 30px;
  margin-top: 96px;
  background-color: transparent;
  z-index: 3;

  @media screen and (min-width: 375px) {
    padding-inline: 20px;
  }

  @media screen and (min-width: 425px) {
    padding-inline: 30px;
  }

  @media screen and (min-width: 1100px) {
    width: 960px;
    padding-inline: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 1080px;
    padding-inline: 0;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${secondaryColor};
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
  border-radius: 0.25rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;

  & > div.img-container {
    width: 150px;
    height: 150px;
    background-color: ${secondaryColor};
    border-radius: 1rem;
    border: 5px solid ${tertiaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 15px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    & > img {
      width: 80%;
      height: 80%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  & > div.name-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    & > h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: inherit;
      text-align: center;
    }
  }

  & > button.delete-pokemon-list {
    width: 170px;
    height: 40px;
    margin: 25px 10px;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
    outline: none;
    background-color: ${buttonDanger};
    color: ${primaryColor};
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
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

export const CardBody = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(1, minmax(0px, 1fr));
  margin-bottom: 26px;
  padding-top: 26px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
`;

export const ItemNotFound = styled.div`
  width: 100%;
  height: auto;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
  border-radius: 0.25rem;
  background-color: ${quaternaryColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  color: ${tertiaryColor};

  & > div.icon {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > p.message {
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 0.25rem;
`;