import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#cccccc'
    },
    lista: {
        width: '100%',
    },
    inline: {
        display: 'inline',
    },
}));

export default props => {
    const classes = useStyles();
    return (
        <ListItem alignItems="flex-start" >
            {props.message.fromUser ? null :
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.message.user.avatar} />
                </ListItemAvatar>
            }

            <ListItemText primary={props.message.user.name} secondary={
                <React.Fragment>
                    {
                        props.message.image ? <img src={props.message.text} /> :
                        <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary">  
                        {props.message.text} 
                        </Typography>
                    }
                    {props.message.date}
                </React.Fragment>
            } />

            {!props.message.fromUser ? null :
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.message.user.avatar} />
                </ListItemAvatar>
            }
        </ListItem>
    )
}