
import React, { useState } from 'react';
import Header from './components/Header';
import Router from './components/Router';
import SideMenu from './components/SideMenu';

export default () => {
  const [showMenu, setMenu] = useState(false);
  return (
    <div>
      <Header onOpenMenu={e => setMenu(true)} />
      <SideMenu show={showMenu} onClose={e => setMenu(false)} onOpen={e => setMenu(true)} />
      <Router/>
    </div>
  )
}