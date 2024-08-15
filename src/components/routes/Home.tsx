import React, { FC } from 'react';

import Nav from '../areas/Nav';
import SideBar from '../areas/sidebar/SideBar';
import LeftMenu from '../areas/LeftMenu';
import Main from '../areas/Main/Main';
import RightMenu from '../areas/RightMenu';

import './Home.css';

const Home: FC = () => {
  return (
    <div className="home-container">
      <div className="navigation">
        <Nav />
      </div>
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
};

export default Home;
