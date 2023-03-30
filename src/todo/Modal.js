import React from 'react';

function Modal({name, data, close}) {
    console.log(close)
    return (
        <div>
            Modal içeriği <br/>
            <button onClick={close}>Kapat</button>
        </div>
    );
}

export default Modal;