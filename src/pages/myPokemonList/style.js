import styled from "@emotion/styled";

const primaryColor = "#f7f7f7";
const secondaryColor = "#fff";

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