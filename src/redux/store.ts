import { configureStore } from "@reduxjs/toolkit";
import querySearchReducer from "./querySearch/postsSlice";

export const store = configureStore({
  reducer: {
    fetchPosts: querySearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;