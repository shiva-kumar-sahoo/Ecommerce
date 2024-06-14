import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
  FLUSH,
  PAUSE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartSlice from "./CartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  cart: CartSlice,
});

const presistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: presistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, FLUSH, PURGE, PAUSE, REGISTER],
      },
    }),
});

export default store;
