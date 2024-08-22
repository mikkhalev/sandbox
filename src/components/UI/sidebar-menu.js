import React from 'react';
import classes from "../../css/components/UI/sidebar-menu.module.scss";
import SidebarMenuItem from "./sidebar-menu-item";

const SidebarMenu = ({pages}) => {
    return (
        <div className={`${classes.menu} flex-box-column`}>
            {
                pages.map((category, index) => (
                        <SidebarMenuItem
                            category={category}
                            key={index}
                        />
                    )
                )
            }
        </div>
    );
};

export default SidebarMenu;