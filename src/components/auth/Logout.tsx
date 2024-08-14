import React, { FC, useReducer } from 'react';
import ModalProps from '../types/ModalProps';
import ReactModal from 'react-modal';

const Logout: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  console.log('Logout');

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    onClickToggle(e);
    console.log('username password emaail logout');
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
        <div className="logout-notify">Are you sure to logout?</div>

        <div className="form-btns">
          <div className="form-btns-left">
            <button
              style={{ marginLeft: '0.5em' }}
              className="action-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              style={{ marginLeft: '0.5em' }}
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </ReactModal>
  );
};

export default Logout;
