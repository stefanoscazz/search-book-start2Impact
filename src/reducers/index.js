import booksReducer from './booksReducer';
import infoReducer from "./infoReducer";
import { combineReducers } from "redux"


const rootReducer = combineReducers(
    {
        booksReducer,
        infoReducer
    }
)
export default rootReducer;