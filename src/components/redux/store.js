import {configureStore} from "@reduxjs/toolkit";
import taskReduser from "./reduser";


const store = configureStore({
    reducer: {
        tasks: taskReduser
    }
})

export default store