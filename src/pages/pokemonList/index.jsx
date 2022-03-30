import React, { useContext, useEffect, useState } from "react";
import { CurrentPageContext, SidebarStateContext } from "../../App";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import CardView from "./cardView";
import { gql, useQuery } from "@apollo/client";
import {
  CardList,
  ContentBody,
  ContentContainer,
  ContentHeader,
  HeaderBackground,
  HeaderTitle,
  PaginationContainer,
  PokemonListContainer,
  PokemonListContent,
} from "./style";
import Pagination from "../../components/pagination";
import CardSkeleton from "./cardSkeleton";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const PokemonList = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [pokeCard, setPokeCard] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [clearOwned, setClearOwned] = useState(false);

  const pageState = useContext(CurrentPageContext);

  const pageSize = 10;

  const generateRandomArr = (length) => {
    return [...new Array(length)].map(() => Math.round(Math.random()));
  };

  const handleCardSkeleton = (length) => {
    setPokeCard(
      generateRandomArr(length).map((values, index) => (
        <CardSkeleton key={index} />
      ))
    );
  };

  const handlePokeCard = (data) => {
    setPokeCard(
      data.map((values, index) => (
        <CardView
          key={index}
          name={values.name}
          imageUrl={values.image}
          url={values.url}
        />
      ))
    );
  };

  const gqlVariables = {
    limit: pageSize,
    offset: (pageState[0] - 1) * pageSize,
  };

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (loading) {
      handleCardSkeleton(pageSize);
    } else if (error) {
      console.error(error);
    } else {
      setTotalPage(Math.ceil(data.pokemons.count / pageSize));
      handlePokeCard(data.pokemons.results);
    }
  }, [loading, error, data, clearOwned]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <PokemonListContainer>
        <SidebarStateContext.Provider
          value={[showSidebar, setShowSidebar, setClearOwned]}
        >
          <Sidebar pageName="pokemon-list" />
          <Navbar pageName="pokemon-list" />
        </SidebarStateContext.Provider>

        <PokemonListContent>
          <ContentContainer>
            <ContentHeader>
              <HeaderBackground>
                <img
                  src={require("../../images/background.webp")}
                  alt="background"
                />
              </HeaderBackground>

              <HeaderTitle>
                <img src={require("../../images/pokemon-300.webp")} alt="title" />
              </HeaderTitle>
            </ContentHeader>

            <ContentBody id="content-body">
              <CardList>{pokeCard}</CardList>

              <PaginationContainer>
                <Pagination
                  current={pageState[0]}
                  setCurrent={pageState[1]}
                  total={totalPage}
                />
              </PaginationContainer>
            </ContentBody>
          </ContentContainer>

          <Footer />
        </PokemonListContent>
      </PokemonListContainer>
    </>
  );
};

export default PokemonList;
