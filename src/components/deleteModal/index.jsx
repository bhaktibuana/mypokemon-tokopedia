import React, { useEffect, useState } from "react";
import { DeleteButton, DeleteCard, DeleteIcon, DeleteTitle, ModalContainer } from "./style";
import { MdCheckCircleOutline } from "react-icons/md";

const safeDocument = typeof document !== "undefined" ? document : {};

const DeleteModal = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    localStorage.setItem("my_pokemon_data", JSON.stringify([]));
    if (props.pageName !== "pokemon-detail") props.setClearOwned(true);
    setIsDeleted(true);
  };

  const onCancel = () => {
    setIsDeleted(false);
    props.setVisible(false);
  };

  useEffect(() => {
    const html = safeDocument.documentElement;
    if (props.visible) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
  }, [props.visible]);

  return (
    <>
      <ModalContainer visible={props.visible}>
        {isDeleted ? (
          <DeleteCard>
            <DeleteTitle>
              <h1>All your pokemon have been deleted</h1>
            </DeleteTitle>

            <DeleteIcon>
              <MdCheckCircleOutline size={100} />
            </DeleteIcon>

            <DeleteButton>
              <button className="success" onClick={onCancel}>
                Ok
              </button>
            </DeleteButton>
          </DeleteCard>
        ) : (
          <DeleteCard>
            <DeleteTitle>
              <h1>Are you sure you want to delete your pokemon?</h1>
            </DeleteTitle>

            <DeleteButton>
              <button className="success" onClick={handleDelete}>
                Yes
              </button>

              <button className="danger" onClick={onCancel}>
                Cancel
              </button>
            </DeleteButton>
          </DeleteCard>
        )}
      </ModalContainer>
    </>
  );
};

export default DeleteModal;
