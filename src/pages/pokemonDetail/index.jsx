import React, { useEffect, useState } from "react";
import { SidebarStateContext } from "../../App";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import {
  CardBody,
  CardContent,
  CardHeader,
  ContentBody,
  ContentContainer,
  PokemonDetailContainer,
  PokemonDetailContent,
} from "./style";
import { gql, useQuery } from "@apollo/client";
import ListDetail from "./listDetail";
import CatchPokeModal from "../../components/catchPokeModal";

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

const PokemonDetail = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [pokeId, setPokeId] = useState();
  const [pokeName, setPokeName] = useState("");
  const [pokeImage, setPokeImage] = useState("");
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeAbilities, setPokeAbilities] = useState([]);
  const [pokeMoves, setPokeMoves] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { name } = useParams();

  const firstLetterUpperCase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const gqlVariables = {
    name: name,
  };

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else if (error) {
      console.error(error);
    } else {
      setIsLoading(false);
      setPokeId(data.pokemon.id);
      setPokeName(data.pokemon.name);
      setPokeImage(data.pokemon.sprites.front_default);
      setPokeTypes(data.pokemon.types.map((values) => values.type.name));
      setPokeAbilities(
        data.pokemon.abilities.map((values) => values.ability.name)
      );
      setPokeMoves(data.pokemon.moves.map((values) => values.move.name));
    }
  }, [loading, error, data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <PokemonDetailContainer>
        <SidebarStateContext.Provider value={[showSidebar, setShowSidebar]}>
          <Sidebar pageName="pokemon-detail" />
          <Navbar pageName="pokemon-detail" />
        </SidebarStateContext.Provider>

        <PokemonDetailContent>
          <ContentContainer>
            <ContentBody>
              <CardContent>
                <CardHeader>
                  {isLoading ? (
                    <div className="skeleton-img-container"></div>
                  ) : (
                    <div className="img-container">
                      <img src={pokeImage} alt={pokeName} />
                    </div>
                  )}

                  {isLoading ? (
                    <div className="skeleton-name-container"></div>
                  ) : (
                    <div className="name-container">
                      <h1>{firstLetterUpperCase(pokeName)}</h1>
                    </div>
                  )}

                  {isLoading ? (
                    <div className="skeleton-catch-pokemon"></div>
                  ) : (
                    <button
                      className="catch-pokemon"
                      onClick={() => setModalVisible(true)}
                    >
                      <p>Catch Pokemon</p>
                    </button>
                  )}
                </CardHeader>

                <CardBody>
                  {isLoading ? (
                    <>
                      <div className="skeleton-list-item"></div>
                      <div className="skeleton-list-item"></div>
                      <div className="skeleton-list-item"></div>
                    </>
                  ) : (
                    <>
                      <ListDetail name="Pokemon Type" data={pokeTypes} />

                      <ListDetail
                        name="Pokemon Abilities"
                        data={pokeAbilities}
                      />

                      <ListDetail name="Pokemon Moves" data={pokeMoves} />
                    </>
                  )}
                </CardBody>
              </CardContent>
            </ContentBody>
          </ContentContainer>

          <Footer />
        </PokemonDetailContent>
      </PokemonDetailContainer>

      <CatchPokeModal
        visible={modalVisible}
        setVisible={setModalVisible}
        data={{
          id: pokeId,
          name: pokeName,
          image: pokeImage,
        }}
      />
    </>
  );
};

export default PokemonDetail;
