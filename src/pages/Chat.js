import { Snackbar } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import CameraModal from '../components/CameraModal';
import Mensagens from '../components/Mensagens';
import MessageInput from '../components/MessageInput';
import { MessagesReducer } from '../reducers/MessagesReducer';

const CHAT_API = 'https://cpflbot.herokuapp.com/chat';

const mensagemMarley = texto => {
    return {
        text: texto,
        user: {
            nome: 'Marvin',
            avatar: 'https://i.ibb.co/TYkMVyx/cpfl-logo-atendimento.png'
        },
        date: new Date().toLocaleDateString()
    }
}

const mensagemUsuario = ({message, user, image}) => {
    return {
        text: image ? null : message,
        user,
        foto: image ? message : null,
        fromUser: true,
        date: new Date().toLocaleDateString()
    }
}

const loadUserData = async (props, callback) => {
    const id = props.history.location.search;
    if (id) {
        const response = await Axios.get(`${CHAT_API + id}`);
        callback(response)
    }
}

const addMessage = async data => {
    const request = {
        context: data.user.context,
        text: data.image ? 'foto' : data.message,
        foto: data.image ? data.message : ''
    };
    const response = await Axios.post(CHAT_API, request);
    return response.data;
}

export default props => {

    const [user, setUser] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    const [mensagens, setStore] = useReducer(MessagesReducer, []);
    const [erro,setErro] = useState('');

    useEffect(() => {
        loadUserData(props, response => {
            const message = response.data;
            setStore({ action: 'init', value: mensagemMarley(message.resposta[0])});
            setUser({ ...message.cliente, context: message.context });
        });
    }, []);

    function onSave(imageData) {
        sendMessage(imageData, true);
        setShowCamera(false);
    }

    const sendMessage = async (message, image) => {
        if (message) {
            try {
                const response = await addMessage({ message, user , image });
                setStore({ action: 'add', value: mensagemUsuario({message, user, image})});

                setUser({ ...user, context: response.context });

                const respostaBot = mensagemMarley(response.resposta[0]);
                setStore({ action: 'add', value: respostaBot });

                window.scrollTo(0,document.body.scrollHeight+2000);

            } catch (error) {
                setErro('Erro ao enviar mensagem')
            }
        }
        
    }

    

    function getImage() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'camera';
        input.click();

        input.addEventListener('change', (event) => {
            try {
                var FR = new FileReader();
                FR.addEventListener("load", e => {
                    if (e.target.result) {
                        onSave(e.target.result)
                    } else {
                        getImage();
                    }
                });
                FR.readAsDataURL(event.target.files[0]);
            } catch (error) {
                setErro('Erro ao capturar imagem')
            }
        })
    }

    return (
        <div id="idScroll">
            <Mensagens mensagens={mensagens} />

            {/* <MessageInput onMessage={e => sendMessage(e)} onCamera={e => setShowCamera(true)} /> */}

            <MessageInput  onMessage={e => sendMessage(e)} onCamera={e => getImage()} />

            <CameraModal
                showCamera={showCamera}
                onCancel={e => setShowCamera(false)}
                onSave={imageData => onSave(imageData)} />

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={erro !== ''}
                autoHideDuration={6000}
                onClose={e => setErro('')}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{erro}</span>}
            />
        </div>
    )
}