import React, { useEffect, useReducer, useState } from 'react';
import CameraModal from '../components/CameraModal';
import Mensagens from '../components/Mensagens';
import MessageInput from '../components/MessageInput';

const CHAT_API = '';

const mensagensInit = [{
    user: {
        name: 'Joo',
        avatar: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
    },
    date: '22:45',
    text: 'Olá'
},
{
    user: {
        name: 'You',
        avatar: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
    },
    date: '22:45',
    text: 'Olá',
    fromUser: true
}];

const loadUserData = (props, callback) => {
    const id = props.history.location.search;
    if (id) {
        callback(id.replace('?uid=', ''))
    }
}

function reducer(mensagens, { action, value }) {
    switch (action) {
        case 'add':
            mensagens.push(value);
            return [].concat(mensagens);
        case 'load':
            return mensagens;
        default:
            throw new Error();
    }
}

export default props => {

    const [userId, setUserId] = useState(null);
    const [showCamera, setShowCamera] = useState(false);

    const [mensagens, setStore] = useReducer(reducer, mensagensInit);

    useEffect(() => { loadUserData(props, setUserId); }, []);

    function onSave(imageData) {
        sendMessage(imageData, true);
        setShowCamera(false);
    }

    const sendMessage = (message, image) => {
        //Axios.post(CHAT_API, { message });
        const newMessage = {
            text: message,
            user: {
                name: 'You',
                avatar: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
            },
            image: image,
            fromUser: true,
            date: '10/10/2016'
        }

        setTimeout(() => {
            setStore({
                action: 'add',
                value: {
                    text: 'Resposta',
                    user: {
                        name: 'João',
                        avatar: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
                    }
                }
            });
        }, 500)

        setStore({ action: 'add', value: newMessage });
    }

    return (
        <div>
            <Mensagens mensagens={mensagens} />

            <MessageInput onMessage={e => sendMessage(e)} onCamera={e => setShowCamera(true)} />

            <CameraModal
                showCamera={showCamera}
                onCancel={e => setShowCamera(false)}
                onSave={imageData => onSave(imageData)} />
        </div>
    )
}