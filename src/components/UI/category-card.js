import React from 'react';
import style from '../../css/components/UI/category-card.module.scss'
import {Link} from "react-router-dom";
const CategoryCard = ({index, link, title, border}) => {
    return (
        <Link to={link} key={index}>
            <div className={`${style.card} flex-box-column ${border?style.highlighted:''}`}>
                {
                    title
                }
            </div>
        </Link>
    );
};

export default CategoryCard;