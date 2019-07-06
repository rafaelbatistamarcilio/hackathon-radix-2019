import { Divider, List, makeStyles } from '@material-ui/core';
import React from 'react';
import Mensagem from './Mensagem';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#cccccc'
    },
    lista: {
        width: '100%',
        paddingBottom:'100px'
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
                    <Mensagem message={message}/>    
                    <Divider variant="inset" component="li" />
                </div>
            ))}

        </List>
    )
}