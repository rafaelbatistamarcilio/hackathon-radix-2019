
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import Header from './components/Header';
import Router from './components/Router';
import SideMenu from './components/SideMenu';

export default () => {
  const [showMenu, setMenu] = useState(false);
  const theme = createMuiTheme({
    // palette: {
    //   type: 'dark',
    // },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header onOpenMenu={e => setMenu(true)} />
        <SideMenu show={showMenu} onClose={e => setMenu(false)} onOpen={e => setMenu(true)} />
        <Router />
      </ThemeProvider>
    </div>
  )
}