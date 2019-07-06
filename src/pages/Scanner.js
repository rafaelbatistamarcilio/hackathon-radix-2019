import React from 'react';
import QrReader from 'react-qr-reader';




export default props => {

    const handleScan = data => {
        if (data) {
            props.history.push('chat?uid='+data);
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