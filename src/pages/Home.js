
import { BottomNavigation, BottomNavigationAction, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#cccccc'
    },
});

export default props => {

    function navigate(route) {
        props.history.push(route);
    }
    const classes = useStyles();
    return (
        <div>
            <BottomNavigation showLabels className={classes.root} onChange={(event, route) => navigate(route)} >
                <BottomNavigationAction label="Chat por QRCode" value="scan" icon={<Icon>view_column</Icon>} />
                <BottomNavigationAction label="Chat" value="chat" icon={<Icon>chat</Icon>} />
            </BottomNavigation>
        </div>
    )
}