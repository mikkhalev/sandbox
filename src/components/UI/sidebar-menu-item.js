import React from 'react';
import {Link} from "react-router-dom";
import classes from '../../css/components/UI/sidebar-menu-item.module.scss'
const SidebarMenuItem = ({category}) => {
    return (
        <Link to={category.link}>
            <div className={`${classes.item} ${category.border ? classes.highlighted : ''}`}>
                {category.title}
            </div>
        </Link>
    );
};

export default SidebarMenuItem;