import todoReducers from "./HomeReducer";
import { combineReducers } from "redux";

// combine all the reducer and make a single root reducer so that we can pass this in the store
const rootReducer = combineReducers({
  todoReducers,
});

export default rootReducer;
