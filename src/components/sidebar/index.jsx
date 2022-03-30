import React, { useState, useContext, useEffect } from "react";
import { SidebarStateContext } from "../../App";
import { useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdDeleteForever,
  MdDoubleArrow,
  MdOutlineArrowDropDown,
  MdOutlineCatchingPokemon,
} from "react-icons/md";
import {
  SidebarContainer,
  SidebarContent,
  SidebarItems,
  SidebarLine,
  SidebarProfile,
  SidebarTitle,
} from "./style";
import DeleteModal from "../deleteModal";

const safeDocument = typeof document !== "undefined" ? document : {};

const Sidebar = (props) => {
  const [profileExpand, setProfileExpand] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const sidebarState = useContext(SidebarStateContext);
  const navigate = useNavigate();

  const handleSidebar = () => {
    sidebarState[1](false);
    setProfileExpand(false);
  };

  useEffect(() => {
    const html = safeDocument.documentElement;
    if (sidebarState[0] || modalVisible) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
  }, [sidebarState, modalVisible]);
  return (
    <>
      <SidebarContainer isOpen={sidebarState[0]}>
        <div className="dark-screen" onClick={handleSidebar}></div>

        <SidebarContent isOpen={sidebarState[0]}>
          <div className="sidebar-close">
            <button onClick={handleSidebar}>
              <MdDoubleArrow size={24} />
            </button>
          </div>

          <SidebarTitle>
            <a href="/" className="title" onClick={(e) => e.preventDefault()}>
              <img
                src={require("../../images/pokemon-130.webp")}
                alt="logo"
                className="title-img"
                onClick={() => navigate("/")}
              />
            </a>
          </SidebarTitle>

          <SidebarLine />

          <SidebarProfile isExpanded={profileExpand}>
            <button
              className="profile"
              onClick={() => setProfileExpand(!profileExpand)}
            >
              <img
                src={require("../../images/pokeball-50x50.webp")}
                alt="pokeball"
                className="profile-img"
              />

              <div className="profile-text">
                <p>Pokemon Trainer</p>

                <div className="arrow-icon">
                  <MdOutlineArrowDropDown size={24} />
                </div>
              </div>
            </button>

            <button
              className="profile-item"
              onClick={() => {
                handleSidebar();
                setModalVisible(true);
              }}
            >
              <div className="profile-item-icon">
                <MdDeleteForever size={24} />
              </div>

              <p>Clear My Pokemon</p>
            </button>
          </SidebarProfile>

          <SidebarLine />

          <SidebarItems>
            <a
              href="/"
              className={
                props.pageName === "pokemon-list" ? "item active" : "item"
              }
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <MdDashboard size={24} />
              <p>Pokemon List</p>
            </a>

            <a
              href="/mypokemonlist"
              className={
                props.pageName === "my-pokemon-list" ? "item active" : "item"
              }
              onClick={(e) => {
                e.preventDefault();
                navigate("/mypokemonlist");
              }}
            >
              <MdOutlineCatchingPokemon size={24} />
              <p>My Pokemon List</p>
            </a>
          </SidebarItems>
        </SidebarContent>
      </SidebarContainer>

      <DeleteModal
        visible={modalVisible}
        setVisible={setModalVisible}
        setClearOwned={sidebarState[2]}
        pageName={props.pageName}
      />
    </>
  );
};

export default Sidebar;
