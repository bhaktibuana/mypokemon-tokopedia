import styled from "@emotion/styled";

const primaryColor = "#fff";
const secondaryColor = "#404040";
const tertiaryColor = "#dcc1ff";
const quaternaryColor = "#b478ff";
const buttonSuccess = "#32cc70";
const buttonDanger = "#ff5b5b";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.visible ? "flex" : "none")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  align-items: center;
  justify-content: center;
  animation-name: modal-animation;
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes modal-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalCard = styled.div`
  width: 400px;
  height: auto;
  min-height: 200px;
  background-color: ${primaryColor};
  border-radius: 0.5rem;
  padding: 15px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;

  & > img.pokeball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation-name: pokeball-bounce;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @keyframes pokeball-bounce {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-10px);
      }

      100% {
        transform: translateY(0px);
      }
    }
  }

  & > div.pokebal-shadow {
    width: 50px;
    height: 5px;
    border-radius: 50%;
    margin-top: 10px;
    background-color: ${secondaryColor};
    opacity: 0.5;
    animation-name: pokeball-shadow;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-fill-mode: both;

    @keyframes pokeball-shadow {
      0% {
        transform: scaleX(1);
      }

      50% {
        transform: scaleX(0.5);
      }

      100% {
        transform: scaleX(1);
      }
    }
  }

  & > p {
    font-size: 1rem;
    margin-top: 15px;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 15px;

  & > h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${secondaryColor};
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 0 10px;

  & > img {
    width: 110px;
    height: 110px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  & > p {
    font-size: 1rem;
    margin-top: 15px;
    font-weight: bold;
    color: ${secondaryColor};
  }

  & > form {
    width: 100%;

    & > input {
      width: 100%;
      height: 40px;
      border-radius: 0.25rem;
      border: 2px solid ${tertiaryColor};
      padding: 0 15px;
      margin-top: 15px;
      font-size: 1rem;
      color: ${secondaryColor};
      transition: all 0.2s ease-in-out;

      &:focus {
        outline: none;
        border: 2px solid ${quaternaryColor};
      }
    }

    & > p.error {
      width: 100%;
      font-size: 0.8rem;
      color: ${buttonDanger};
      margin-top: 5px;
    }
  }
`;

export const CardButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  & > button.success {
    width: 100px;
    height: 40px;
    margin: 0 10px;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
    outline: none;
    background-color: ${buttonSuccess};
    color: ${primaryColor};
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    }

    &:active {
      box-shadow: none;
    }
  }

  & > button.danger {
    width: 100px;
    height: 40px;
    margin: 0 10px;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
    outline: none;
    background-color: ${buttonDanger};
    color: ${primaryColor};
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    }

    &:active {
      box-shadow: none;
    }
  }
`;

export const CardIcon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  color: ${buttonSuccess};
`;
