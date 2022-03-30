import React, { useContext, useEffect, useState } from "react";
import { CurrentPageContext, SidebarStateContext } from "../../App";
import DeleteModal from "../../components/deleteModal";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ReleaseModal from "../../components/releaseModal";
import Sidebar from "../../components/sidebar";
import ListView from "./listView";
import { BsEmojiFrown } from "react-icons/bs";
import {
  CardBody,
  CardContent,
  CardHeader,
  ContentBody,
  ContentContainer,
  ItemNotFound,
  MyPokemonContainer,
  MyPokemonContent,
  PaginationContainer,
} from "./style";
import Pagination from "../../components/pagination";

const MyPokemon = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [clearOwned, setClearOwned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pokeList, setPokeList] = useState([]);
  const [isPokeExist, setIsPokeExist] = useState(false);
  const [releasePokemon, setReleasePokemon] = useState(false);
  const [selectedNickname, setSelectedNickname] = useState("");
  const [modalReleaseVisible, setModalReleaseVisible] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const homePageState = useContext(CurrentPageContext);

  const pageSize = 10;

  const handlePokeList = (data) => {
    let temp = data;
    temp = temp.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    if (temp.length < 1) setCurrentPage((prev) => prev - 1);

    setTotalPage(Math.ceil(data.length / pageSize));

    setPokeList(
      data
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
        .map((values, index) => (
          <ListView
            key={index}
            pokeId={values.id}
            name={values.pokemonName}
            nickname={values.nickname}
            imageUrl={values.image}
            setModalReleaseVisible={setModalReleaseVisible}
            setSelectedNickname={setSelectedNickname}
          />
        ))
    );
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("my_pokemon_data"));

    if (data.length > 0) {
      handlePokeList(data);
      setIsPokeExist(true);
    } else {
      handlePokeList([]);
      setIsPokeExist(false);
    }
  }, [clearOwned, releasePokemon]);

  useEffect(() => {
    if (isPokeExist) {
      const data = JSON.parse(localStorage.getItem("my_pokemon_data"));

      if (data.length > 0) {
        handlePokeList(data);
        setIsPokeExist(true);
      } else {
        handlePokeList([]);
        setIsPokeExist(false);
      }
    }
  }, [currentPage, totalPage, isPokeExist]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    homePageState[1](1);
  }, [homePageState]);

  return (
    <>
      <MyPokemonContainer>
        <SidebarStateContext.Provider
          value={[showSidebar, setShowSidebar, setClearOwned]}
        >
          <Sidebar pageName="my-pokemon-list" />
          <Navbar pageName="my-pokemon-list" />
        </SidebarStateContext.Provider>

        <MyPokemonContent>
          <ContentContainer>
            <ContentBody>
              <CardContent>
                <CardHeader>
                  <div className="img-container">
                    <img
                      src={require("../../images/pokeball-120x120.webp")}
                      alt="pokeball"
                    />
                  </div>

                  <div className="name-container">
                    <h1>Pokemon Trainer</h1>
                  </div>

                  <button
                    className="delete-pokemon-list"
                    onClick={() => setModalVisible(true)}
                  >
                    <p>Clear My Pokemon</p>
                  </button>
                </CardHeader>

                {isPokeExist ? (
                  <>
                    <CardBody id="content-body">{pokeList}</CardBody>

                    <PaginationContainer>
                      <Pagination
                        current={currentPage}
                        setCurrent={setCurrentPage}
                        total={totalPage}
                      />
                    </PaginationContainer>
                  </>
                ) : (
                  <ItemNotFound>
                    <div className="icon">
                      <BsEmojiFrown size={50} />
                    </div>

                    <p className="message">You don't have any pokemon yet</p>
                  </ItemNotFound>
                )}
              </CardContent>
            </ContentBody>
          </ContentContainer>

          <Footer />
        </MyPokemonContent>
      </MyPokemonContainer>

      <DeleteModal
        visible={modalVisible}
        setVisible={setModalVisible}
        setClearOwned={setClearOwned}
        pageName="my-pokemon-list"
      />

      <ReleaseModal
        visible={modalReleaseVisible}
        setVisible={setModalReleaseVisible}
        setReleasePokemon={setReleasePokemon}
        selectedNickname={selectedNickname}
        setSelectedNickname={setSelectedNickname}
      />
    </>
  );
};

export default MyPokemon;
