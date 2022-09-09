import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import { DEFAULT_PERSIST_CONFIG } from "../config";

import rootReducer from "./reducers";

const persistedRootReducer = persistReducer(
  DEFAULT_PERSIST_CONFIG,
  rootReducer
);

const store = configureStore({
  reducer: persistedRootReducer,
  middleware: [thunk],
  devTools: __DEV__,
});

const persistor = persistStore(store);

export { store, persistor };
