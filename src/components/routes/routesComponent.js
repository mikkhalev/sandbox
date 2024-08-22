import React from 'react';
import Categories from "../../pages/categories";
import Excel from "../../pages/excel/excel";
import ToDo from "../../pages/to-do";
import Calculator from "../../pages/сalculator";
import {Routes, Route} from 'react-router-dom';
const RoutesComponent = ({pages, portfolio}) => {
    return (
        <Routes>
            <Route index path={'/'} element={<Categories pages={pages}/>} />
            <Route path={'/excel'} element={<Excel/>} />
            <Route path={'/to-do'} element={<ToDo/>} />
            <Route path={'/calculator'} element={<Calculator/>} />
        </Routes>
    );
};

export default RoutesComponent;