import React, { useState } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import SideBarMenus from "./sidebar/SideBarMenus";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowDimensions();

  const getMobileViews = () => {
    if (width <= 765) {
      return (
        <FontAwesomeIcon
          className="nav-mobile-menu"
          icon={faBars}
          onClick={handleToggleMenu}
          size="lg"
        />
      );
    }
    return null;
  };
  const handleToggleMenu = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowMenu(!showMenu);
  };
  const onRequestClose = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => {
    setShowMenu(false);
  };
  return (
    <React.Fragment>
      {width < 765 && (
        <ReactModal
          className="menu-modal"
          isOpen={showMenu}
          onRequestClose={onRequestClose}
          shouldCloseOnOverlayClick={true}
        >
          <SideBarMenus />
        </ReactModal>
      )}

      <nav className="navigation">
        {getMobileViews()}
        <strong>SuperForum</strong>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
