import React, { useEffect, useState } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import {
  ModalContainer,
  ReleaseButton,
  ReleaseCard,
  ReleaseIcon,
  ReleaseTitle,
} from "./style";

const safeDocument = typeof document !== "undefined" ? document : {};

const ReleaseModal = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [data, setData] = useState([]);

  const handleDelete = () => {
    const oldData = JSON.parse(localStorage.getItem("my_pokemon_data"));
    const newData = oldData.filter((item) => item.nickname !== props.selectedNickname);
    localStorage.setItem("my_pokemon_data", JSON.stringify(newData));
    props.setReleasePokemon(true);
    setIsDeleted(true);
  };

  const onCancel = () => {
    setIsDeleted(false);
    props.setSelectedNickname("");
    props.setReleasePokemon(false);
    props.setVisible(false);
  };

  const firstLetterUpperCase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  useEffect(() => {
    const html = safeDocument.documentElement;
    if (props.visible) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }

    if (props.selectedNickname !== "") {
      const dataPokemon = JSON.parse(localStorage.getItem("my_pokemon_data"));
      const filterData = dataPokemon.filter(
        (value) => value.nickname === props.selectedNickname
      );
      setData(filterData);
    }
  }, [props.visible, props.selectedNickname]);
  return (
    <>
      <ModalContainer visible={props.visible}>
        {isDeleted ? (
          <ReleaseCard>
            <ReleaseTitle>
              <h1>{`${data[0].nickname}(${firstLetterUpperCase(
                data[0].pokemonName
              )}) has ben released`}</h1>
            </ReleaseTitle>

            <ReleaseIcon>
              <MdCheckCircleOutline size={100} />
            </ReleaseIcon>

            <ReleaseButton>
              <button className="success" onClick={onCancel}>
                Ok
              </button>
            </ReleaseButton>
          </ReleaseCard>
        ) : (
          <ReleaseCard>
            <ReleaseTitle>
              <h1>Are you sure want to release the pokemon?</h1>
            </ReleaseTitle>

            <ReleaseButton>
              <button className="success" onClick={handleDelete}>
                Yes
              </button>

              <button className="danger" onClick={onCancel}>
                Cancel
              </button>
            </ReleaseButton>
          </ReleaseCard>
        )}
      </ModalContainer>
    </>
  );
};

export default ReleaseModal;
