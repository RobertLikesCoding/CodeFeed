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
      const result = await fetchPostDetails(args.subreddit, args.postId);
      if (result) {
        const [postDetails, comments] = result;
        return { postDetails, comments };
      } else {
        throw new Error("Failed to fetch posts");
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postDetailsSlice = createSlice({
  name: "postDetails",
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<PostDetails>) => {
      state.postDetails = action.payload;
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
          state.postDetails = action.payload.postDetails;
          state.comments = action.payload.comments;
        }
      })
      .addCase(fetchPostDetailsThunk.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default postDetailsSlice.reducer;
