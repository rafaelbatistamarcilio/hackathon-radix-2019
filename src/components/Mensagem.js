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
    image:{
        width: '100%',
        height: 'auto'
    },
    avatar:{
        height: '45px',
        width: '45px',
        margin: '0 10px -10px',
        display: 'inline-block'
    },
    messageFromRobot: {
        display: 'flex',
        marginTop: '20px'
    },
    messageFromUser: {
        display: 'flex',
        marginTop: '20px',
        flexDirection: 'row-reverse',
        textAlign: 'right'
    },
    content: {
        display: 'inline-block',
        maxWidth: '60vw'
    },
    textUser: {
        padding: '10px',
        margin: '0',
        borderRadius: '12px',
        backgroundColor: '#B8BABF',
        color: '#000000'
    },
    textRobot: {
        padding: '10px',
        margin: '0',
        borderRadius: '12px',
        backgroundColor: '#5DD3F9',
        color: '#000000',
        
    },
    horaContainer: {
        position: 'relative',
        paddingTop: '30px',
        paddingLeft: '10px',
        paddingRight: '50px'
    },
    horaTexto: {
        fontSize: '12px',
        position: 'absolute',
        bottom: '0'
    }


}));

export default props => {
    const classes = useStyles();
    

    return (

        <li className={props.message.fromUser ? classes.messageFromUser : classes.messageFromRobot}>
            
            <img className={classes.avatar} src={props.message.user.avatar} />
            <div className={classes.content}>
                <div className={props.message.fromUser ? classes.textUser : classes.textRobot} > {props.message.text}  </div>
            </div>
            <div className={classes.horaContainer}>
                <div className={classes.horaTexto}> 12:00 </div>
            </div>
        </li>


    )
}