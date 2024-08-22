import React from 'react';
import classes from '../../css/components/UI/page-title.module.scss'
const PageTitle = ({children}) => {
    return (
        <h2 className={classes.title}>
            {children}
        </h2>
    );
};

export default PageTitle;