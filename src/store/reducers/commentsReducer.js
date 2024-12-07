import { createSlice } from "@reduxjs/toolkit";
import { fetchCommentsByChapter } from "../actions/commentsAction";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByChapter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommentsByChapter.fulfilled, (state, action) => {
  console.log("Fetched Comments:", action.payload); // Debug
  state.loading = false;
  state.comments = action.payload || []; // Asegúrate de que sea un array
})
      .addCase(fetchCommentsByChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default commentsSlice.reducer;
