import styled from "@emotion/styled";

const primaryColor = "#fff";
const secondaryColor = "#404040";
const tertiaryColor = "#b478ff";

export const NavbarContainer = styled.div`
  width: ${(props) => (props.scroll ? "inherit" : "100%")};
  height: 70px;
  padding: 10px 0;
  background: ${(props) =>
    props.scroll
      ? "linear-gradient(112.83deg, hsla(0, 0%, 100%, .82), hsla(0, 0%, 100%, .8) 110.84%)"
      : "#fff"};
  backdrop-filter: ${(props) => (props.scroll ? "blur(5px)" : "none")};
  box-shadow: ${(props) =>
    props.scroll ? "0 7px 23px rgb(0 0 0 / 5%)" : "none"};
  position: ${(props) => (props.scroll ? "fixed" : "absolute")};
  border-bottom: 1.5px solid ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export const NavbarContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 0px 50px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0px 100px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 150px;
  }

  @media screen and (min-width: 1600px) {
    padding: 0px 200px;
  }

  @media screen and (min-width: 1920px) {
    padding: 0px 250px;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: auto;

  & > a.logo-container {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: 0;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    & > img.logo {
      height: 100%;
      objec-fit: cover;
      padding: 5px 0;
      margin-left: 5px;
    }
  }
`;

export const MiddleContent = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > div {
    height: 100%;
    width: auto;
    display: flex;
    position: absolute;

    & > a.nav-item {
      height: 100%;
      margin: 1px;
      width: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${secondaryColor};
      font-size: 1.1rem;
      text-decoration: none;
      border-bottom: 2.5px solid transparent;
      cursor: pointer;
      transition: border 0.3s ease-in-out;

      &:hover {
        border-bottom: 2.5px solid ${tertiaryColor};
        font-weight: bold;
        color: ${tertiaryColor};
      }
    }

    & > a.nav-item.active {
      border-bottom: 2.5px solid ${tertiaryColor};
      font-weight: bold;
      color: ${tertiaryColor};
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const RightContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

export const NavProfile = styled.div`
  width: auto;
  heigth: 100%;
  display: none;
  align-items: center;

  & > div {
    width: 55px;
    height: 50px;

    & > button.profile {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 15px 5px 0px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      user-select: none;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
      }

      &:focus ~ .profile-dropdown {
        display: flex;
        opacity: 1;
      }

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        background-color: ${tertiaryColor};
        border: 2px solid ${tertiaryColor};
      }
    }

    & > div.profile-dropdown {
      background-color: ${primaryColor};
      right: 100px;
      top: 15px;
      width: 160px;
      height: auto;
      position: relative;
      border-radius: 4px;
      box-shadow: 0 0 10px rgb(0 0 0 / 10%);
      display: none;
      opacity: 0;
      animation-name: profile-dropdown;
      animation-duration: 200ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;

      &:hover {
        display: flex;
        opacity: 1;
      }

      & > ul {
        width: 100%;
        height: auto;
        list-style-type: none;
        padding: 13px 0px;
        margin: 0;

        & > li {
          width: 100%;
          height: 40px;
          padding: 0 5px;

          & > a {
            width: 100%;
            height: 100%;
            background-color: ${primaryColor};
            padding: 10px 20px;
            border-radius: 3px;
            display: flex;
            color: ${secondaryColor};
            font-size: 0.8rem;
            transition: all 0.2s ease-in-out;
            text-decoration: none;
            cursor: pointer;

            &:hover {
              background-color: ${tertiaryColor};
              color: ${primaryColor};
              font-weight: bold;
              transition: all 0.2s ease-in-out;
              box-shadow: 0 0 5px rgb(0 0 0 / 30%);
            }
          }

          & > button {
            width: 100%;
            height: 100%;
            background-color: ${primaryColor};
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            display: flex;
            color: ${secondaryColor};
            font-size: 0.8rem;
            transition: all 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
              background-color: ${tertiaryColor};
              color: ${primaryColor};
              font-weight: bold;
              transition: all 0.2s ease-in-out;
              box-shadow: 0 0 5px rgb(0 0 0 / 30%);
            }
          }
        }
      }

      @keyframes profile-dropdown {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const SidebarToggler = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  margin: 5px 5px 5px 0px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${secondaryColor};
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
    color: ${tertiaryColor};
    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
