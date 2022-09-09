import { combineReducers } from "@reduxjs/toolkit";

import meReducer from "../slices/me.slice";

export default combineReducers({
  me: meReducer,
});
