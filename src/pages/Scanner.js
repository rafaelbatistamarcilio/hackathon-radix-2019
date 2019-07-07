import React from 'react';
import QrReader from 'react-qr-reader';

const APP_QRCODE = 'https://hackthon-radix-cpfl.herokuapp.com/chat?id=';

export default props => {

    const handleScan = data => {
        if (data) {
            props.history.push('chat?id='+ data.replace(APP_QRCODE,''));
        }
    }
    const handleError = err => {
        console.error(err)
    }
    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
        </div>
    );
}