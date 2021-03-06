import { Card, CardActionArea, CardActions, CardContent, Grid, Icon, makeStyles, Modal } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { Webcam } from '../utils/Webcam';

const useStyles = makeStyles(theme => ({
    icon: {
        paddingLeft:'5px'
    }
}));

const takePick = (cameraElement, canvasElement, callback) => {
    const cam = new Webcam(cameraElement, canvasElement);
    cam.setup('user').catch(() => alert('Error getting access to your camera'));
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
    const classes = useStyles();

    const [cameraState, setCameraState] = useState(cameraInitialState);
    const [showCanvas, setShowCanvas] = useState(false);
    const [webcam, setCamera] = useState(null);

    const canvasElement = useRef();
    const cameraElement = useRef();

    function openCamera() {
        setTimeout(() => takePick(cameraElement.current, canvasElement.current, setCamera), 10)
    }

    function onCapture(cameraState) {
        setCameraState(cameraState);
        setShowCanvas(true);
        webcam.off();
        props.onSave(cameraState.capturedImage);
    }

    return (
        <Modal open={props.showCamera} onRendered={e => openCamera()}>

            <Card >
                <CardActionArea>
                    <CardContent >
                        <video autoPlay playsInline muted ref={cameraElement} width="100%" height="400" />
                        <canvas className={{ display: 'none' }} ref={canvasElement}></canvas>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Grid alignItems="flex-end" container>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6} >
                            <Icon className={classes.icon} fontSize="large" onClick={e => { webcam.setup('environment'); }}>switch_camera</Icon>
                            <Icon className={classes.icon} fontSize="large" onClick={e => { webcam.off(); props.onCancel(); }}>cancel</Icon>
                            <Icon className={classes.icon} fontSize="large" onClick={e => captureImage(webcam, onCapture)}>camera</Icon>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Modal>
    )
}