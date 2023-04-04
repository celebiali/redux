import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {closeModal} from "../stores/modal";

import modals from "../modals";
import EditTodo from "../modals/edit-todo";
function Modal() {
    const dispatch = useDispatch()
    const {name,data} = useSelector(state => state.modal)
    const modal = modals.find(m => m.name === name)
    const close = () => {
        dispatch(closeModal())
    }

    return (
        <div className="modal">
            <div className="modal-inner">
                <EditTodo close={close} data={data}/>
            </div>
        </div>
    );
}

export default Modal;