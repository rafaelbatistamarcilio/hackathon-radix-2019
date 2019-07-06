import React, { useState } from 'react';
import { InputBase, Paper, Button, Icon } from '@material-ui/core';
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
    input: {
      marginLeft: 8,
      flex: 1,
    },
}));

export default props => {
    const [message, setMessage] = useState('');
    
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <InputBase
                value={message}
                onChange={e => setMessage(e.target.value)}
                className={classes.input}
                placeholder="Message..."
                inputProps={{ 'aria-label': 'Message...' }} />

                <Icon onClick={e => props.onCamera()}>camera_alt</Icon>
                <Icon onClick={e => {props.onMessage(message); setMessage('');} }>send</Icon>
        </Paper>
    )
}