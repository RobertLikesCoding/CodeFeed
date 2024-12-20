import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchPostDetails,
  PostDetails,
  Comment,
} from "../../components/services/api/redditAPI";

interface postDetailsState {
  details: PostDetails | null;
  comments: Comment[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: postDetailsState = {
  details: null,
  comments: [],
  isLoading: true,
  hasError: false,
};

export const fetchPostDetailsThunk = createAsyncThunk(
  "post/fetchPostDetails",
  async (args: { subreddit: string; postId: string }, { rejectWithValue }) => {
    try {
      const result = await fetchPostDetails(args.subreddit, args.postId);
      if (result) {
        const [details, comments] = result;
        return { details, comments };
      }
    } catch  {
      return rejectWithValue("Failed to fetch posts");
    }
  }
);

const postDetailsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<PostDetails>) => {
      state.details = action.payload;
    },
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
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
          state.details = action.payload.details;
          state.comments = action.payload.comments;
        } else {
          state.hasError = true;
        }
      })
      .addCase(fetchPostDetailsThunk.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default postDetailsSlice.reducer;
