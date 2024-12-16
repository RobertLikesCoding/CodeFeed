import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../components/services/api/redditAPI";

interface querySearchState {
  value: Post[];
  isLoading: boolean;
}

const initialState: querySearchState = {
  value: [],
  isLoading: false,
};

const querySearchSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
});



export const { setPosts, setIsLoading } = querySearchSlice.actions;
export default querySearchSlice.reducer;
