import { configureStore } from "@reduxjs/toolkit";
import querySearchReducer from "./slices/postsSlice";
import postDetailsReducer from "./slices/postDetailsSlice";
import subredditDetilsReducer from "./slices/subredditDetailsSlice";

export const store = configureStore({
  reducer: {
    fetchPosts: querySearchReducer,
    post: postDetailsReducer,
    subredditDetails: subredditDetilsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
