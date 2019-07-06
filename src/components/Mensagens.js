import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#cccccc'
    },
    lista: {
        width: '100%',
        maxWidth: 360,
    },
    inline: {
        display: 'inline',
    },
}));

export default props => {
    const classes = useStyles();
    return (
        <List className={classes.lista}>

            {props.mensagens.map((message, index) => (
                <div key={index}>
                    <ListItem alignItems="flex-start" >
                        {message.fromUser ? null :
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={message.user.avatar} />
                            </ListItemAvatar>
                        }
                        <ListItemText primary={message.text} secondary={message.date} />
                        {!message.fromUser ? null :
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={message.user.avatar} />
                            </ListItemAvatar>
                        }
                    </ListItem>
    
                    <Divider variant="inset" component="li" />
                </div>
            ))}
            
        </List>
    )
}