import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchPostDetails,
  PostDetails,
  Comment,
} from "../../components/services/api/redditAPI";

interface postDetailsState {
  postDetails: PostDetails | null;
  comments: Comment[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: postDetailsState = {
  postDetails: null,
  comments: [],
  isLoading: false,
  hasError: false,
};

export const fetchPostDetailsThunk = createAsyncThunk(
  "postDetails/fetchPostDetails",
  async (args: { subreddit: string; postId: string }, { rejectWithValue }) => {
    try {
      const response = await fetchPostDetails(args.subreddit, args.postId);
      return response;
    } catch {
      return rejectWithValue("Failed to fetch posts");
    }
  }
);

const postDetailsSlice = createSlice({
  name: "postDetails",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.postDetails = action.payload[0];
    },
    setComments: (state, action) => {
      state.comments = action.payload[1];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostDetailsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.postDetails = action.payload[0];
          state.comments = action.payload[1];
        }

      })
      .addCase(fetchPostDetailsThunk.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default postDetailsSlice.reducer;
