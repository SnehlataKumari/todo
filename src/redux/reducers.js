import { combineReducers } from "@reduxjs/toolkit";
import linkSlice from "./actions/link";
import todoSlice from "./actions/todo";

export default combineReducers({
  link: linkSlice.reducer,
  todo: todoSlice.reducer
});
