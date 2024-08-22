import React from 'react';
import classes from '../css/components/sidebar.module.scss';
import SidebarMenu from "./UI/sidebar-menu";
const Sidebar = ({pages}) => {
    return (
        <aside className={`flex-box-column`}>
            <div className={`${classes.title} flex-box-row`}>
                <img src={'/img/menu-burger.svg'} alt={'Открыть меню'} />
                <span>
                    Menu
                </span>
            </div>
            <SidebarMenu pages={pages}/>
        </aside>
    );
};

export default Sidebar;