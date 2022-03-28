import styled from "@emotion/styled";

const primaryColor = "#b478ff";
const secondaryColor = "#fff";
const tertiaryColor = "#894bd7";

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  left: ${(props) => (props.isOpen ? "0" : "-300%")};

  & > div.dark-screen {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: ${(props) => (props.isOpen ? "flex" : "none")};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    animation-name: dark-screen;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes dark-screen {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SidebarContent = styled.div`
  width: 260px;
  height: 100vh;
  background-color: ${primaryColor};
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  right: ${(props) => (props.isOpen ? "0" : "-300%")};
  display: flex;
  float: right;
  flex-direction: column;
  align-items: center;
  position: fixed;
  transition: all 0.3s ease-in-out;
  z-index: 101;

  & > div.sidebar-close {
    width: 100%;
    height: auto;
    display: flex;
    padding: 10px 10px;
    position: absolute;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    & > button {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${secondaryColor};
      background: transparent;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      tnrasition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 8px rgb(0 0 0 / 20%);
        tnrasition: all 0.2s ease-in-out;
      }
    }
  }
`;

export const SidebarLine = styled.div`
  width: calc(100% - 30px);
  height: 1px;
  background-color: ${secondaryColor};
`;

export const SidebarTitle = styled.div`
  margin: 0px;
  padding: 15px 0px;
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > a.title {
    width: 100%;
    height: 100%;
    background: transparent;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 0px;
    cursor: default;

    & > img.title-img {
      width: auto;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      z-index: 1;
    }
  }
`;

export const SidebarProfile = styled.div`
  width: 100%;
  height: 80px;
  height: auto;
  background: transparent;
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > button.profile {
    width: 230px;
    height: 50px;
    background: transparent;
    margin: 10px 15px 0px;
    padding: 0 10px;
    border: none;
    border-radius: 3px;
    color: ${secondaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    & > img.profile-img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid ${tertiaryColor};
    }

    & > div.profile-text {
      width: 100%;
      height: 100%;
      margin: 0px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > p {
        font-size: 1rem;
        margin: 0px;
      }

      & > div.arrow-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: ${(props) =>
          props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
        transition: all 0.3s ease-in-out;
      }
    }
  }

  & > button.profile-item {
    width: 230px;
    height: 50px;
    background: transparent;
    margin: 10px 15px 0px;
    padding: 0 10px;
    border: none;
    border-radius: 3px;
    color: ${secondaryColor};
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: ${(props) => (props.isExpanded ? "flex" : "none")};
    opacity: ${(props) => (props.isExpanded ? "1" : "0")};
    animation-name: btn-profile-item;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;

    &:hover {
      background: ${tertiaryColor};
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0px 10px rgb(0 0 0 / 20%);
    }

    & > div.profile-item-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px 0 10px;
    }

    & > p {
      font-size: 1rem;
      margin: 0px 10px;
    }
  }

  @keyframes btn-profile-item {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SidebarItems = styled.div`
  width: 100%;
  height: auto;
  background: transparent;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > a.item {
    width: 230px;
    height: 50px;
    background: transparent;
    margin: 10px 15px 0px;
    padding: 0 10px;
    text-decoration: none;
    border-radius: 3px;
    color: ${secondaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: ${tertiaryColor};
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0px 10px rgb(0 0 0 / 20%);
    }

    & > p {
      font-size: 1rem;
      margin: 0px 10px;
    }
  }

  & > a.item.active {
    background: ${secondaryColor};
    color: ${tertiaryColor};
    box-shadow: 0 0px 10px rgb(0 0 0 / 20%);
    cursor: default;

    & > p {
      font-weight: bold;
    }
  }
`;
