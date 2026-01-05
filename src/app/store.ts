import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { rootReducer } from "./reducer";
import { baseApi } from "../services/baseApi";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    global: persistedReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(baseApi.middleware),
  devTools: true,
});

const { dispatch } = store;

// setupListeners(dispatch);

export const persistor = persistStore(store);

/**
 * The type of the dispatch function provided by the Redux store.
 */
export type AppDispatch = typeof store.dispatch;

/**
 * The type of the state managed by the Redux store.
 */
export type RootState = ReturnType<typeof store.getState>;

export { store, dispatch };
