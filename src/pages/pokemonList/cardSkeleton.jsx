import React from "react";
import { CardContainer, CardImage, CardText } from "./cardSkeletonStyled";

const CardSkeleton = () => {
  return (
    <>
      <CardContainer>
        <div className="card-content">
          <CardImage>
            <div className="skeleton-img"></div>
          </CardImage>

          <CardText>
            <div className="skeleton-header"></div>
            <div className="skeleton-text"></div>
          </CardText>
        </div>
      </CardContainer>
    </>
  );
};

export default CardSkeleton;
