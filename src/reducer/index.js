import todoReducers from "./HomeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;