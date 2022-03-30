import styled from "@emotion/styled";

const primaryColor = "#fff";
const secondaryColor = "#404040";
const buttonSuccess = "#32cc70";
const buttonDanger = "#ff5b5b";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
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

export const ReleaseCard = styled.div`
  width: 400px;
  height: auto;
  min-height: 200px;
  background-color: ${primaryColor};
  border-radius: 0.5rem;
  padding: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ReleaseTitle = styled.div`
  width: 100%;
  height: 100%;
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

export const ReleaseButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  & > button.success {
    width: 80px;
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
    width: 80px;
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

export const ReleaseIcon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  color: ${buttonSuccess};
`;