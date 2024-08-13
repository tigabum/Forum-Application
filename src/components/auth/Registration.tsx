import React, { FC, useReducer } from 'react';
import ModalProps from '../types/ModalProps';
import ReactModal from 'react-modal';
import userReducers from './common/userReducers';
import { allowSubmit } from './common/Helpers';
import './Registration.css';
import PasswordComparison from './common/PasswordComparison';

const Registration: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [
    { userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled },
    dispatch,
  ] = useReducer(userReducers, {
    userName: 'firstuser',
    password: '',
    email: 'tigano@gmail.com',
    passwordConfirm: '',
    resultMsg: '',
    isSubmitDisabled: true,
  });
  console.log('register');

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'userName', payload: e.target.value });
    if (!e.target.value)
      allowSubmit(dispatch, 'username cannot be empty', true);
    else allowSubmit(dispatch, '', false);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'email', payload: e.target.value });
    if (!e.target.value) allowSubmit(dispatch, 'email cannot be empty', true);
    else allowSubmit(dispatch, '', false);
  };

  const handleRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    onClickToggle(e);
    console.log('username password emaail', userName, email);
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
          <div className="email">
            <label>Email</label>
            <input type="text" value={email} onChange={onChangeEmail} />
          </div>
          <div>
            <PasswordComparison
              dispatch={dispatch}
              password={password}
              passwordConfirm={passwordConfirm}
            />
          </div>
        </div>
        <div className="form-btns">
          <div className="form-btns-left">
            <button
              className="action-btn"
              onClick={handleRegister}
              disabled={isSubmitDisabled}
            >
              Register
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
          <span className="form-btns-right">
            <strong>{resultMsg} </strong>
          </span>
        </div>
      </form>
    </ReactModal>
  );
};

export default Registration;
