import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, fetchSearchQuery } from "../../components/services/api/redditAPI";

interface querySearchState {
  posts: Post[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: querySearchState = {
  posts: [],
  isLoading: false,
  hasError: false,
};

export const fetchPostsThunk = createAsyncThunk(
  "searchResult/fetchPosts",
  async (topic: string | undefined, { rejectWithValue }) => {
    try {
      const data = topic
        ? await fetchSearchQuery(topic)
        : await fetchSearchQuery("web+development");
      return data;
    } catch {
      return rejectWithValue("Failed to fetch posts");
    }
  }
);

const querySearchSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsThunk.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
});

export default querySearchSlice.reducer;