import React from 'react';
import CategoryCard from "../components/UI/category-card";
import classes from '../css/pages/categories.module.scss'
const Categories = ({pages, portfolio}) => {

    return (
            <div className={`${classes.categories}`}>
                {
                    pages.map((category, index) => (
                            <CategoryCard
                                key={index}
                                link={category.link}
                                title={category.title}
                                border={category.border}
                            />
                        )
                    )
                }
            </div>
    );
};

export default Categories;