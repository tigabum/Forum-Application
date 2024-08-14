import React, { FC, useReducer } from 'react';
import ModalProps from '../types/ModalProps';
import ReactModal from 'react-modal';
import userReducers from './common/userReducers';
import { allowSubmit } from './common/Helpers';

const Login: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [{ userName, password, resultMsg, isSubmitDisabled }, dispatch] =
    useReducer(userReducers, {
      userName: '',
      password: '',
      resultMsg: '',
      isSubmitDisabled: true,
    });
  console.log('Login');

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'userName', payload: e.target.value });
    if (!e.target.value)
      allowSubmit(dispatch, 'username cannot be empty', true);
    else allowSubmit(dispatch, '', false);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'password', payload: e.target.value });
    if (!e.target.value)
      allowSubmit(dispatch, 'password cannot be empty', true);
    else allowSubmit(dispatch, '', false);
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    onClickToggle(e);
    console.log('username password emaail', userName, password);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClickToggle(e);
  };
  return (
    <ReactModal
      isOpen={isOpen}
      className="menu-modal"
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="reg-input">
          <div className="username">
            <label>Username</label>
            <input type="text" value={userName} onChange={onChangeUsername} />
          </div>
          <div className="password">
            <label>Password</label>
            <input type="text" value={password} onChange={onChangePassword} />
          </div>
        </div>
        <div className="form-btns">
          <div className="form-btns-left">
            <button
              style={{ marginLeft: '0.5em' }}
              className="action-btn"
              onClick={handleLogin}
              disabled={isSubmitDisabled}
            >
              Login
            </button>
            <button
              style={{ marginLeft: '0.5em' }}
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
          <span className="form-btns-right">{resultMsg}</span>
        </div>
      </form>
    </ReactModal>
  );
};

export default Login;
