import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import ToDoReducer from "./reducers/ToDoReducer"

const rootReducer = combineReducers({
    AuthReducer,
    ToDoReducer
});


export default rootReducer;