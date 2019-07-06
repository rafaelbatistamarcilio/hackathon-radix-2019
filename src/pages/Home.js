
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
            <Icon></Icon>
            <BottomNavigation className={classes.root} onChange={(event, route) => navigate(route)} >
                <BottomNavigationAction label="Recents" icon={<Icon>star</Icon>} />
                <BottomNavigationAction label="Favorites" icon={<Icon>alarm</Icon>} />
                <BottomNavigationAction label="Nearby" value="chat" icon={<Icon>chat</Icon>} />
            </BottomNavigation>
        </div>
    )
}