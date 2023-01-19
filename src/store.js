import { createStore } from "redux";
import rootReducer from "./reducer/index";

// create store and pass the root reducer as argument as createStore take only single reducer
const store = createStore(rootReducer);

export default store;
