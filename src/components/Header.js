import { AppBar, Button, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export default props => (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => props.onOpenMenu()}>
                <Icon>menu</Icon>
            </IconButton>
            <Typography variant="h6" > News </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
)