import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';
import { useDispatch } from 'react-redux';
import { UserProfileSetType } from '../../store/user/reducer';
import './SideBarMenus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered, faUser } from '@fortawesome/free-solid-svg-icons';
import Registration from '../auth/Registration';

const SideBarMenus = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: 'Testuser',
      },
    });
  }, [dispatch]);

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
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
            Register{' '}
          </span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SideBarMenus;
