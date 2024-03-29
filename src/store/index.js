import { combineReducers } from "redux";
import { todoReducer } from "./module/todo.js";

export default combineReducers({
  todo: todoReducer,
});
