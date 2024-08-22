import React from 'react';
import classes from "../../css/components/UI/modal.module.scss";
const Modal = ({children}) => {
    return (
        <div className={`${classes.wrapper}`}>
            <div className={`${classes.background}`}>

            </div>
            <div className={`${classes.modal} flex-box-column`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;