import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import { Webcam } from '../utils/Webcam';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';

const CHAT_API = '';

const sendMessage = message => Axios.post(CHAT_API, { message });

const loadUserData = (props, callback) => {
    const id = props.history.location.search;
    if (id) {
        console.log(id);
        callback(id.replace('?uid=', ''))
    }
}

const takePick = (cameraElement, canvasElement, callback) => {
    const cam = new Webcam(cameraElement, canvasElement);
    cam.setup().catch(() => alert('Error getting access to your camera'));
    callback(cam);
}

const captureImage = async (webcam, callback) => {
    const capturedData = webcam.takeBase64Photo({ type: 'jpeg', quality: 0.8 });
    callback({
        captured: true,
        capturedImage: capturedData.base64
    });
}

const cameraInitialState = {
    capturedImage: null,
    captured: false,
    uploading: false
}

export default props => {
    const [cameraState, setCameraState] = useState(cameraInitialState);

    const [userId, setUserId] = useState(null);
    const [webcam, setCamera] = useState(null);
    const [showCamera, setShowCamera] = useState(false);

    const canvasElement = useRef();
    const cameraElement = useRef();

    useEffect(() => { loadUserData(props, setUserId); }, []);

    function onTakePick() {
        setShowCamera(true);
        setTimeout(()=> takePick(cameraElement.current,canvasElement.current, setCamera), 10)
    }

    return (
        <div>
            <p > {userId} </p>

            <Button variant="contained" color="primary" onClick={e=> onTakePick()}>
                Take picture
            </Button>

            <Modal open={showCamera}>
                <div>
                    <video autoPlay playsInline muted ref={cameraElement} width="100%" height="200" />
                    <canvas ref={canvasElement} width="100%"></canvas>
                    <img src={cameraState.capturedImage} alt={'...'} />
                    
                    <Button variant="contained" color="secondary" onClick={e => captureImage(webcam, setCameraState)}>
                        Capture
                    </Button>
                </div>
            </Modal>
        </div>
    )
}