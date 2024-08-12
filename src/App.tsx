import React from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu';
import Main from './components/Main';
import Nav from './components/Nav';

import RightMenu from './components/RightMenu';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <SideBar />
      <LeftMenu />
      <RightMenu />
    </div>
  );
}

export default App;
