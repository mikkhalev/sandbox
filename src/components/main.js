import React from 'react';
import RoutesComponent from "./routes/routesComponent";

const Main = ({pages, portfolio}) => {

    return (
        <main className={`flex-box-column`}>
            <RoutesComponent pages={pages}/>
        </main>
    );
};

export default Main;