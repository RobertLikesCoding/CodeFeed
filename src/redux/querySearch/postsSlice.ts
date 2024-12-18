import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, fetchSearchQuery, fetchSubredditPosts } from "../../components/services/api/redditAPI";

interface postsState {
  posts: Post[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: postsState = {
  posts: [],
  isLoading: false,
  hasError: false,
};

export const fetchPostsThunk = createAsyncThunk(
  "fetchPosts/fetchPosts",
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

export const fetchSubredditPostsThunk = createAsyncThunk(
  "fetchPosts/fetchSubredditPosts",
  async (subredditURL: string | undefined, { rejectWithValue }) => {
    try {
      if (!subredditURL) return [];
      const data = await fetchSubredditPosts(subredditURL);
      return data;
    } catch {
      return rejectWithValue("Failed to fetch posts");
    }
  }
);

const postsSlice = createSlice({
  name: "fetchPosts",
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
      });
      builder
      .addCase(fetchSubredditPostsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubredditPostsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchSubredditPostsThunk.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});

export default postsSlice.reducer;