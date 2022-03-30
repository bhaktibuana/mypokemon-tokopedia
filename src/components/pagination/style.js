import styled from "@emotion/styled";

const primaryColor = "#fff";
const secondaryColor = "#d9d9d9";
const tertiaryColor = "#b478ff";
const quaternaryColor = "#404040";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;

  & > button.pagination-arrow {
    background: ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    border: 1px solid ${secondaryColor};
    border-radius: 0.25rem;
    margin: 0 1px;
    color: ${quaternaryColor};
    transition: all 0.2s linear 0s;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      margin: 0 5px;
    }

    @media (hover: hover) {
      &:hover {
        border: 1px solid ${tertiaryColor};
        transition: all 0.2s linear 0s;
        color: ${tertiaryColor};
      }
    }

    &:disabled {
      border: 1px solid ${secondaryColor};
      cursor: not-allowed;
      color: ${secondaryColor};
    }
  }

  & > button.pagination-number {
    background: ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    border: 1px solid ${secondaryColor};
    border-radius: 0.25rem;
    margin: 0 1px;
    color: ${quaternaryColor};
    transition: all 0.2s linear 0s;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      margin: 0 5px;
    }

    @media (hover: hover) {
      &:hover {
        border: 1px solid ${tertiaryColor};
        transition: all 0.2s linear 0s;
        color: ${tertiaryColor};
      }
    }

    &:disabled {
      border: 1px solid ${secondaryColor};
      cursor: not-allowed;
      color: ${secondaryColor};
    }
  }

  & > button.pagination-number.active {
    border: 1px solid ${tertiaryColor};
    color: ${tertiaryColor};
  }

  & > button.pagination-gap {
    background: ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    margin: 0 1px;
    color: ${secondaryColor};
    transition: all 0.2s linear 0s;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      margin: 0 5px;
    }
  }

  & > button.pagination-quick-arrow {
    background: ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    margin: 0 1px;
    color: ${tertiaryColor};
    transition: all 0.2s linear 0s;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      margin: 0 5px;
    }
  }
`;
