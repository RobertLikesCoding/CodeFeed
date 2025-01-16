import { configureStore } from "@reduxjs/toolkit";
import querySearchReducer from "./slices/postsSlice";
import postDetailsReducer from "./slices/postDetailsSlice";

export const store = configureStore({
  reducer: {
    fetchPosts: querySearchReducer,
    post: postDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;