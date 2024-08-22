import React from 'react';
import classes from '../../css/components/UI/page-description.classes.scss'
const PageDescription = ({children}) => {
    return (
        <span className={classes.description}>
            {children}
        </span>
    );
};

export default PageDescription;