import React, { useState } from "react";
import { SidebarStateContext } from "../../App";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import {
  ContentBody,
  ContentContainer,
  MyPokemonContainer,
  MyPokemonContent,
} from "./style";

const MyPokemon = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [clearOwned, setClearOwned] = useState(false);

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
              <h3>This page is under development</h3>
            </ContentBody>
          </ContentContainer>

          <Footer />
        </MyPokemonContent>
      </MyPokemonContainer>
    </>
  );
};

export default MyPokemon;
