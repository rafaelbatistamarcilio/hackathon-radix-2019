import React, { useState } from 'react';
import { InputBase, Paper, Button, Icon, Grid } from '@material-ui/core';
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
    icon: {
        float: 'rigth'
    }
}));

export default props => {
    const [message, setMessage] = useState('');

    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={9} md={10}>
                    <InputBase
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className={classes.input}
                        placeholder="Message..."
                        inputProps={{ 'aria-label': 'Message...' }} />
                </Grid>
                <Grid item xs={1}>
                    <Icon className={classes.icon} onClick={e => props.onCamera()}>camera_alt</Icon>
                </Grid>
                <Grid item xs={1}>
                    <Icon onClick={e => { props.onMessage(message); setMessage(''); }}>send</Icon>
                </Grid>
            </Grid>
        </Paper>
    )
}