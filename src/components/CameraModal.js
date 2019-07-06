import React, { useState, useRef, useEffect } from 'react';
import { Modal, Card, CardActionArea, CardContent, CardActions, Button } from '@material-ui/core';
import { Webcam } from '../utils/Webcam';


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
    const [webcam, setCamera] = useState(null);
    const [showCanvas, setShowCanvas] = useState(false);

    const canvasElement = useRef();
    const cameraElement = useRef();

    function openCamera() {
        setTimeout(() => takePick(cameraElement.current, canvasElement.current, setCamera), 10)
    }

    function onCapture(cameraState) {
        setCameraState(cameraState);
        setShowCanvas(true);
        props.onSave(cameraState.capturedImage);
    }

    return (
        <Modal open={props.showCamera}>

            <Card >
                <CardActionArea>
                    <CardContent>
                        <video autoPlay playsInline muted ref={cameraElement} width="100%" height="400" />
                        <canvas className={{ display: 'none' }} ref={canvasElement}></canvas>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary" onClick={e => openCamera()}>
                        open camera
                    </Button>
                    <Button variant="contained" color="primary" onClick={e => captureImage(webcam, onCapture)}>
                        Capture
                    </Button>
                    <Button variant="contained" color="primary" onClick={e => props.onSave(cameraState.capturedImage)}>
                        Ok
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    )
}