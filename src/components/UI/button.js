import React from 'react';
import classes from  '../../css/components/UI/button.module.scss'
const Button = ({children, onClick, type}) => {
    return (
        <button className={classes.btn} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;