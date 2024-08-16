import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "../../../store/user/reducer";
import "./SideBarMenus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Registration from "../../auth/Registration";
import Login from "../../auth/Login";
import Logout from "../../auth/Logout";

const SideBarMenus = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "Testuser",
      },
    });
  }, [dispatch]);

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const onClickToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const onClickToggleLogout = () => {
    setShowLogout(!showLogout);
  };
  return (
    <React.Fragment>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-user">{user?.userName}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span onClick={onClickToggleRegister} className="menu-user">
            Register{" "}
          </span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onClickToggleLogin} className="menu-user">
            Login{" "}
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onClickToggleLogout} className="menu-user">
            Logout{" "}
          </span>
          <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SideBarMenus;
