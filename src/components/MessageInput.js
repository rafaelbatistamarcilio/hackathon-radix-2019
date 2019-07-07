import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { MdAttachFile, MdCameraAlt, MdSend } from "react-icons/md";


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
    input: {
        marginLeft: 8,
        flex: 1,
    },
    icon: {
        float: 'rigth'
    },
    searchForm: {
        position: 'fixed',
        bottom: '-20px',
        left: '50%',
        width: '95vw',
        height: '50px',
        borderRadius: '20px',
        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        transition: 'all 0.3s ease',
    },
    searchInput: {
        position: 'absolute',
        bottom: '8px',
        left: '16px',
        fontSize: '16px',
        background: 'none',
        color: '#5a6674',
        width: 'calc(100% - 160px)',
        height: '30px',
        border: 'none',
        appearance: 'none',
        outline: 'none',

    },
    searchButtom: {
        position: 'absolute',
        bottom: '8px',
        right: '16px',
        fontSize: '16px',
        background: 'none',
        color: '#5a6674',
        height: '30px',
        border: 'none',
        appearance: 'none',
        outline: 'none',
    }
}));

export default props => {
    const [message, setMessage] = useState('');

    const classes = useStyles();
/*
    var input = document.getElementById("input");

    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitButtom").click();
    }
    });
*/
    function keyPressed(event){
        if (event.key === "Enter") {
            event.preventDefault();
            props.onMessage(message); 
            setMessage('');
          }
          
    }
    

    return (
        <form className={classes.searchForm}>
            <input id="input" type="search" onKeyPress={e => keyPressed(e)} value={message} onChange={e => setMessage(e.target.value)} placeholder="Digite aqui" className={classes.searchInput}/>
                <buttom id="submitButtom" type="submit" onClick={e => { props.onMessage(message); setMessage(''); }} className={classes.searchButtom} style={{right: '60px'}}>
                <IconContext.Provider value={{ size: '1.5em', color: "#115A75", className: "global-class-name", style: { verticalAlign: 'middle' } }}>
                <div>
                    <MdSend />
                </div>
                </IconContext.Provider>
                </buttom>

                <buttom type="submit" onClick={e => props.onCamera()} className={classes.searchButtom} >
                <IconContext.Provider value={{ size: '1.5em', color: "#115A75", className: "global-class-name", style: { verticalAlign: 'middle' } }}>
                <div>
                    <MdCameraAlt />
                </div>
                </IconContext.Provider>
                </buttom>

        </form>
    )
}