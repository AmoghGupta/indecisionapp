import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props)=>{

    function clearSelection(){
        props.clearSelection();
    }

    return (
        <Modal 
            isOpen={props.selectedOption != undefined}
            contentLabel='Selected Option'
            onRequestClose = {clearSelection}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3>Selected Option</h3>
            {!!props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={clearSelection}>Okay</button>
        </Modal>
    );
}

export {OptionModal}