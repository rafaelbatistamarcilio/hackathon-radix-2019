import { Icon, InputBase, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useReducer, useState } from 'react';
import CameraModal from '../components/CameraModal';
import Mensagens from '../components/Mensagens';

const CHAT_API = '';

const mensagensInit = [{
    user: {
        avatar: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
    },
    date: '22:45',
    text: 'Olá'
},
{
    user: {
        avatar: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
    },
    date: '22:45',
    text: 'Olá',
    fromUser: true
}];


const loadUserData = (props, callback) => {
    const id = props.history.location.search;
    if (id) {
        console.log(id);
        callback(id.replace('?uid=', ''))
    }
}

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

function reducer(mensagens, { action, value }) {
    switch (action) {
        case 'add':
            mensagens.push(value)
            return mensagens;
        case 'load':
            return mensagens;
        default:
            throw new Error();
    }
}

export default props => {
    const classes = useStyles();

    const [userId, setUserId] = useState(null);
    const [message, setMessage] = useState('');
    const [showCamera, setShowCamera] = useState(false);

    const [mensagens, setStore] = useReducer(reducer, mensagensInit);

    useEffect(() => { loadUserData(props, setUserId); }, []);

    // useEffect(() => { setStore({ action: 'load' }) });

    function onSave(imageData) {
        sendMessage(imageData);
        setMessage('');
        setShowCamera(false);
    }

    const sendMessage = message => {
        //Axios.post(CHAT_API, { message });
        const newMessage = {
            text: message,
            user: {
                avatar: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
            },
            fromUser: true,
            date: '10/10/2016'
        }

        setTimeout(() => {
            setStore({
                action: 'add', value: {
                    text: 'Resposta',
                    user: {
                        avatar: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
                    }
                }
            });
        })

        setMessage('');
        setStore({ action: 'add', value: newMessage });
        setStore({ action: 'load' })
    }

    return (
        <div>
            <Mensagens mensagens={mensagens}/>
            
            <Paper className={classes.root}>
                <InputBase
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={classes.input}
                    placeholder="Message..."
                    inputProps={{ 'aria-label': 'Message...' }} />

                <Button variant="contained" color="primary" onClick={e => setShowCamera(true)}>
                    <Icon>camera_alt</Icon>
                </Button>
                <Button variant="contained" color="primary" >
                    <Icon onClick={e => sendMessage(message)}>send</Icon>
                </Button>
            </Paper>

            <CameraModal
                showCamera={showCamera}
                onCancel={e => setShowCamera(false)}
                onSave={imageData => onSave(imageData)} />
        </div>
    )
}