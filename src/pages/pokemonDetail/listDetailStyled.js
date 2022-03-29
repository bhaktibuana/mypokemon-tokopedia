import styled from "@emotion/styled";

const primaryColor = "#b478ff";
const secondaryColor = "#eadaff";
const tertiaryColor = "#fff";
const quaternaryColor = "#dcc1ff";

export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 50px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  background-color: ${secondaryColor};
  border-radius: 0.3rem;
  transition: all 0.3s ease-in-out;
`;

export const ListButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 0.3rem;
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  color: ${tertiaryColor};
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: none;
  }

  & > p {
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
  }

  & > div.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${(props) =>
      props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
    transition: all 0.3s ease-in-out;
  }
`;

export const ListItems = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.isExpanded ? "15px" : "0")};
  display: ${(props) => (props.isExpanded ? "grid" : "none")};
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
  gap: 15px;
  grid-template-columns: repeat(1, minmax(0px, 1fr));
  animation-name: list-items;
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes list-items {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const CardItem = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${quaternaryColor};
  display: ${(props) => (props.isExpanded ? "flex" : "none")};
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
  align-items: center;
  padding: 0 10px;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  animation-name: card-item;
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes card-item {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & > p {
    font-size: 1rem;
    margin: 0;
    color: #404040;
  }
`;
