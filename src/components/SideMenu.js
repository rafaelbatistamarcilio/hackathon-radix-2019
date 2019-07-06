import { Icon, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Link } from '@material-ui/core';
import React from 'react';


export default props => {

    function navigate(route) {
        props.history.push(route);
    }

    return (
        <SwipeableDrawer open={props.show} onClose={() => props.onClose()} onOpen={() => props.onOpen()}>
            <List>
                <Link href="/">
                    <ListItem button >
                        <ListItemIcon><Icon>home</Icon></ListItemIcon>
                        <ListItemText primary={'Início'} />
                    </ListItem>
                </Link>

                <Link href="scan">
                    <ListItem button >
                        <ListItemIcon><Icon>build</Icon></ListItemIcon>
                        <ListItemText primary={'QR Chat'} onClick={e => navigate('scan')} />
                    </ListItem>
                </Link>
            </List>
        </SwipeableDrawer>
    )
}