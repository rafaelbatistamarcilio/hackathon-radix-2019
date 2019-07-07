import React from 'react';

export const MessagesReducer = (mensagens, { action, value }) => {
    switch (action) {
        case 'add':
            mensagens.push(value);
            return [].concat(mensagens);
        case 'load':
            return mensagens;
        case 'init':
            return [value];
        default:
            throw new Error();
    }
}