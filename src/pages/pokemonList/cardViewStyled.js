import styled from "@emotion/styled";

const primaryColor = "#fff";
const secondaryColor = "#404040";

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
  z-index: 0;
  border-radius: 0.25rem;
  background-color: ${primaryColor};
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 15px;
    transition: all 0.2s ease-in-out;
  }

  & > a.card-content {
    width: inherit;
    height: auto;
    text-decoration: none;
    border-radius: 0.25rem;
    background-color: ${primaryColor};
    display: flex;
  }
`;

export const CardImage = styled.div`
  max-width: 96px;
  min-width: 96px;
  height: 120px;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    object-fit: contain;
    width: 100%;
    max-height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 0.25rem 0 0 0.25rem;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const CardText = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 15px 20px;
  box-shadow: -2px 0 5px rgb(0 0 0 / 5%);
  color: ${secondaryColor};

  & > h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 8px;
  }

  & > p {
    color: initial;
    margin: 0;
    font-size: 14px;
  }
`;
