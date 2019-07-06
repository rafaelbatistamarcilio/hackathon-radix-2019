import { AppBar, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export default props => (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => props.onOpenMenu()}>
                <Icon>menu</Icon>
            </IconButton>
            <Typography variant="h6" > CPFL </Typography>
        </Toolbar>
    </AppBar>
)