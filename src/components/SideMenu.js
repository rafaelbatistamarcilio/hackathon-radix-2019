import { Icon, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import React from 'react';

export default props => (
    <SwipeableDrawer open={props.show} onClose={() => props.onClose()} onOpen={() => props.onOpen()}>
        <List>
            <ListItem button >
                <ListItemIcon><Icon>mail</Icon></ListItemIcon>
                <ListItemText primary={'Emails'} />
            </ListItem>
            <ListItem button >
                <ListItemIcon><Icon>build</Icon></ListItemIcon>
                <ListItemText primary={'Config'} />
            </ListItem>
        </List>
    </SwipeableDrawer>
)