import styled from "@emotion/styled";

const primaryColor = "#f7f7f7";
const secondaryColor = "#fff";
const tertiaryColor = "#b478ff";
const buttonSuccess = "#32cc70";

export const PokemonDetailContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: absolute;
  background-color: ${primaryColor};
`;

export const PokemonDetailContent = styled.div`
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
  align-items: center;
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
    border-radius: 50%;
    border: 5px solid ${tertiaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 15px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  & > div.skeleton-img-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
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

  & > div.skeleton-name-container {
    width: 200px;
    height: 1.5rem;
    margin-top: 20px;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  }

  & > button.catch-pokemon {
    width: 150px;
    height: 40px;
    margin: 25px 10px;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
    outline: none;
    background-color: ${buttonSuccess};
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

  & > div.skeleton-catch-pokemon {
    width: 150px;
    height: 40px;
    margin: 25px 10px;
    border-radius: 4px;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-inline: 0;

  & > div.skeleton-list-item {
    width: 100%;
    height: 50px;
    border-radius: 0.3rem;
    margin-bottom: 15px;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  }
`;
