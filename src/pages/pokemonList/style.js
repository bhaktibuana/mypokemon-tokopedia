import styled from "@emotion/styled";

const primaryColor = "#f7f7f7";
const secondaryColor = "#fff";

export const PokemonListContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: absolute;
  background-color: ${primaryColor};
`;

export const PokemonListContent = styled.div`
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

export const ContentHeader = styled.div`
  background: rgb(40, 40, 40);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 250px;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    height: 350px;
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 3;
  text-align: center;
  margin-top: 50px;

  & > img {
    width: 150px;
    height: auto;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media screen and (min-width: 768px) {
      width: 200px;
    }

    @media screen and (min-width: 1024px) {
      width: 250px;
    }

    @media screen and (min-width: 1440px) {
      width: 300px;
    }
  }
`;

export const ContentBody = styled.div`
  width: 100%;
  height: auto;
  margin-inline: auto;
  padding-inline: 10px;
  margin-bottom: 30px;
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

export const CardList = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(1, minmax(0px, 1fr));
  margin: 26px 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${secondaryColor};
  padding: 10px;
  border-radius: 0.25rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
`;
