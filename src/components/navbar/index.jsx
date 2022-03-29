import React, { useState, useEffect, useContext } from "react";
import { SidebarStateContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import {
  LeftContent,
  MiddleContent,
  NavbarContainer,
  NavbarContent,
  NavProfile,
  RightContent,
  SidebarToggler,
} from "./style";
import DeleteModal from "../deleteModal";

const Navbar = (props) => {
  const [isScroll, setIsScroll] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const sidebarState = useContext(SidebarStateContext);
  const navigate = useNavigate();

  const handleLogo = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const listenScrollEvent = () => {
    if (window.scrollY < 1) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <NavbarContainer scroll={isScroll}>
        <NavbarContent>
          <LeftContent>
            <a className="logo-container" href="/" onClick={handleLogo}>
              <img
                className="logo"
                src={require("../../images/pokemon.png")}
                alt="logo"
              />
            </a>
          </LeftContent>

          <MiddleContent>
            <div>
              <a
                href="/"
                className={
                  props.pageName === "pokemon-list"
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Pokemon List
              </a>

              <a
                href="/mypokemonlist"
                className={
                  props.pageName === "my-pokemon-list"
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/mypokemonlist");
                }}
              >
                My Pokemon
              </a>
            </div>
          </MiddleContent>

          <RightContent>
            <NavProfile>
              <div>
                <button className="profile">
                  <img
                    src={require("../../images/pokeball.png")}
                    alt="pokeball"
                  />
                </button>

                <div className="profile-dropdown">
                  <ul>
                    <li>
                      <a
                        href="/mypokemonlist"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/mypokemonlist");
                        }}
                      >
                        My Pokemon
                      </a>
                    </li>

                    <li>
                      <button onClick={() => setModalVisible(true)}>
                        Clear My Pokemon
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </NavProfile>

            <SidebarToggler
              onClick={() => {
                sidebarState[1](true);
              }}
            >
              <MdOutlineMenu size={22} />
            </SidebarToggler>
          </RightContent>
        </NavbarContent>
      </NavbarContainer>

      <DeleteModal visible={modalVisible} setVisible={setModalVisible} />
    </>
  );
};

export default Navbar;
