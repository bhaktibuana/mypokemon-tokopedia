import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  CardItem,
  ListButton,
  ListContainer,
  ListItems,
} from "./listDetailStyled";

const ListDetail = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const firstLetterUpperCase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <>
      <ListContainer>
        <ListButton isExpanded={isExpanded} onClick={handleExpand}>
          <p>{`• ${props.name} (${props.data.length})`}</p>

          <div className="arrow-icon">
            <MdOutlineArrowDropDown size={24} />
          </div>
        </ListButton>

        <ListItems isExpanded={isExpanded}>
          {props.data.map((values, index) => (
            <CardItem key={index} isExpanded={isExpanded}>
              <p>{firstLetterUpperCase(values)}</p>
            </CardItem>
          ))}
        </ListItems>
      </ListContainer>
    </>
  );
};

export default ListDetail;
