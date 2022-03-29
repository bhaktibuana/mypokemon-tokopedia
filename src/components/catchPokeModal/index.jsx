import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardButton,
  CardContent,
  CardTitle,
  ModalCard,
  ModalContainer,
  SpinnerContainer,
} from "./style";

const safeDocument = typeof document !== "undefined" ? document : {};

const CatchPokeModal = (props) => {
  const [catchResult, setCatchResult] = useState(null);
  const [nickname, setNickname] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const firstLetterUpperCase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleSave = () => {
    const getSavedData = JSON.parse(localStorage.getItem("my_pokemon_data"));
    const checkDuplicate = getSavedData.filter(items => items.nickname === nickname);

    if (nickname === "") {
      setShowError(true);
      setErrorMessage("nickname is required");
    } else if (checkDuplicate.length > 0) {
      setShowError(true);
      setErrorMessage("nickname already exists");
    } else {
      setShowError(false);
      setErrorMessage("");

      const newData = [
        ...getSavedData,
        {
          id: props.data.id,
          pokemonName: props.data.name,
          nickname: nickname,
          image: props.data.image,
        },
      ];

      localStorage.setItem("my_pokemon_data", JSON.stringify(newData));

      handleCancel();
    }
  };

  const handleTryAgain = () => {
    setCatchResult(null);
  };

  const handleCancel = () => {
    setNickname("");
    setCatchResult(null);
    props.setVisible(false);
  };

  useEffect(() => {
    if (props.visible && catchResult === null) {
      setTimeout(() => {
        const probabilty = 50 / 100;
        const random = Math.random();

        if (random < probabilty) {
          setCatchResult(true);
        } else {
          setCatchResult(false);
        }
      }, 1000);
    }
  }, [props.visible, catchResult]);

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
        <ModalCard>
          {catchResult === null ? (
            <SpinnerContainer>
              <img
                src={require("../../images/pokeball.png")}
                alt="pokeball"
                className="pokeball"
              />

              <div className="pokebal-shadow"></div>

              <p>Catching pokemon...</p>
            </SpinnerContainer>
          ) : (
            <>
              {catchResult ? (
                <CardBody>
                  <CardTitle>
                    <h1>Successfully caught pokemon</h1>
                  </CardTitle>

                  <CardContent>
                    <img src={props.data.image} alt={props.data.name} />

                    <p>{firstLetterUpperCase(props.data.name)}</p>

                    <input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      placeholder="Give a nickname"
                    />

                    {showError && <p className="error">{errorMessage}</p>}
                  </CardContent>

                  <CardButton>
                    <button className="success" onClick={handleSave}>
                      Save
                    </button>

                    <button className="danger" onClick={handleCancel}>
                      Cancel
                    </button>
                  </CardButton>
                </CardBody>
              ) : (
                <CardBody>
                  <CardTitle>
                    <h1>Failed to catch pokemon</h1>
                  </CardTitle>

                  <CardButton>
                    <button className="success" onClick={handleTryAgain}>
                      Try Again
                    </button>

                    <button className="danger" onClick={handleCancel}>
                      Cancel
                    </button>
                  </CardButton>
                </CardBody>
              )}
            </>
          )}
        </ModalCard>
      </ModalContainer>
    </>
  );
};

export default CatchPokeModal;
