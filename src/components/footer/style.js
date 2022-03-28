import styled from "@emotion/styled";

const primaryColor = "rgb(253, 253, 253)";
const secondaryColor =
  "linear-gradient(360deg, rgb(230, 230, 230), rgb(250, 250, 250));";
const tertiaryColor = "#b478ff";
const quaternaryColor = "#404040";

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
`;

export const FooterContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 30px 0;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 180px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 260px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 380px;
  }

  @media screen and (min-width: 1600px) {
    padding: 0 500px;
  }
`;

export const LeftContent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > h1.left-title {
    margin: 0px;
    font-size: 1.5rem;
    text-align: center;
    color: ${quaternaryColor};
    margin-bottom: 10px;
  }

  & > p.left-text {
    margin: 0px;
    font-size: 0.9rem;
    text-align: justify;
    color: ${quaternaryColor};
  }

  @media screen and (min-width: 375px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    margin-right: auto;
  }
`;

export const RightContent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (min-width: 375px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-top: 0;
    margin: 30px 0;
  }

  & > div.header {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 130px;
      height: auto;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }
  }

  & > div.body {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    & > p {
      text-align: center;
      font-size: 0.9rem;
      color: ${quaternaryColor};
    }

    & > div.icon {
      width: auto;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 25px;

      & > a {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border: none;
        border-radius: 50%;
        background-color: ${primaryColor};
        margin: 0 10px;
        color: black;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        transition: all 0.3s ease-in-out;

        &.instagram:hover {
          color: ${primaryColor};
          background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
          background: -webkit-radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
          box-shadow: 0 0 5px rgb(0 0 0 / 40%);
          transition: background-color 0.2s ease-out;
        }

        &.facebook:hover {
          color: ${primaryColor};
          background-color: rgb(66 103 178);
          box-shadow: 0 0 5px rgb(0 0 0 / 40%);
          transition: background-color 0.2s ease-out;
        }

        &.linkedin:hover {
          color: ${primaryColor};
          background-color: #0e76a8;
          box-shadow: 0 0 5px rgb(0 0 0 / 40%);
          transition: background-color 0.2s ease-out;
        }

        &.github:hover {
          color: ${primaryColor};
          background-color: #333;
          box-shadow: 0 0 5px rgb(0 0 0 / 40%);
          transition: background-color 0.2s ease-out;
        }
      }
    }
  }
`;

export const FooterCopyright = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 10px;
  background: ${secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgb(0 0 0 / 10%);

  @media screen and (min-width: 768px) {
    height: 50px;
  }

  & > p {
    margin: 0;
    text-align: center;
    font-size: 1rem;

    & > a {
      margin: 0;
      text-decoration: none;
      font-weight: bold;
      color: ${tertiaryColor};
      -webkit-tap-highlight-color: transparent;
    }
  }
`;
