import React, { useEffect } from "react";
import { DeleteButton, DeleteCard, DeleteTitle, ModalContainer } from "./style";

const safeDocument = typeof document !== "undefined" ? document : {};

const DeleteModal = (props) => {
  const onCancel = () => {
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
        <DeleteCard>
          <DeleteTitle>
            <h1>Are you sure you want to delete your pokemon?</h1>
          </DeleteTitle>

          <DeleteButton>
            <button className="success">Yes</button>

            <button className="danger" onClick={onCancel}>Cancel</button>
          </DeleteButton>
        </DeleteCard>
      </ModalContainer>
    </>
  );
};

export default DeleteModal;
