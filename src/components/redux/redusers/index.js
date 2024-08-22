import todoReducer from './todoReducer';
import {combineReducers} from "redux";
import excelReducer from "./excelReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    excel: excelReducer
})
export default rootReducer;