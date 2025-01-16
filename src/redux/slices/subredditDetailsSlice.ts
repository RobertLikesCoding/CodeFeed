import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubredditDetails, fetchSubredditDetails } from "../../components/services/api/redditAPI";

interface detailsState {
  details: SubredditDetails | null;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: detailsState = {
  details: null,
  isLoading: false,
  hasError: false
}

export const fetchSubredditDetailsThunk = createAsyncThunk("subredditDetails/fetchDetails",
  async(subreddit: string, { rejectWithValue }) => {
    try {
      if (subreddit) {
        const data = fetchSubredditDetails(subreddit);
        return data;
      }
    } catch {
      return rejectWithValue(`Failed to fetch Subreddit Details for: ${subreddit}`)
    }
  }
)

const subredditDetailsSlice = createSlice({
  name: "subredditDetails",
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<SubredditDetails | null>) => {
      state.details = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubredditDetailsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubredditDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.details = action.payload;
        } else {
          state.hasError = true;
        }
      })
      .addCase(fetchSubredditDetailsThunk.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
    }
})

export default subredditDetailsSlice.reducer;