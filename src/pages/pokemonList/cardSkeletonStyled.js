import styled from "@emotion/styled";

export const CardContainer = styled.div`
  width: 100%;
  height: 120px;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 15px;
  z-index: 0;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;

  & > div.card-content {
    width: inherit;
    height: auto;
    border-radius: 0.25rem;
    background-color: transparent;
    display: flex;
  }
`;

export const CardImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div.skeleton-img {
    width: 80%;
    height: 80%;
    border-radius: 0.25rem;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  }
`;

export const CardText = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 15px 20px;

  & > div.skeleton-header {
    width: 75%;
    height: 18px;
    margin-bottom: 8px;
    border-radius: 0.25rem;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  }

  & > div.skeleton-text {
    width: 50%;
    height: 14px;
    border-radius: 0.25rem;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  }
`;

