import { configureStore } from "@reduxjs/toolkit";
import querySearchReducer from "./querySearch/postsSlice";
import postDetailsReducer from "./querySearch/postDetailsSlice";

export const store = configureStore({
  reducer: {
    fetchPosts: querySearchReducer,
    post: postDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;