import { configureStore } from "@reduxjs/toolkit";
import querySearchReducer from "./querySearch/querySearchSlice";

export const store = configureStore({
  reducer: {
    searchResult: querySearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;