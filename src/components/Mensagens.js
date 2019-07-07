import { Divider, List, makeStyles } from '@material-ui/core';
import React from 'react';
import Mensagem from './Mensagem';
import { classExpression } from '@babel/types';

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
    message: {
        display: 'flex',
        marginTop: '10px',
        display: 'inline-block'
    },
    inline: {
        display: 'inline',
    },
    messagestList: {
        padding: '20px 0',
        width: '100%',
        margin: '0 auto',
        listStyle: 'none',
        paddingLeft: '0',
        flexGrow: '1',
        overflow: 'auto'
    }

}));

export default props => {
    const classes = useStyles();
    return (

        <ul className={classes.messagestList}>
            {props.mensagens.map((message, index) => (
                <Mensagem message={message} key={index}/>   
            ))}
        </ul>

    )
}