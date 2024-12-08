import { createSlice } from "@reduxjs/toolkit";
import {
  fetchReactions,
  createReaction,
  deleteReactionByAuthor,
} from "../actions/reactionAction";

const initialState = {
  reactions: [],
  loading: false,
  error: null,
};

const reactionSlice = createSlice({
  name: "reaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch reactions
      .addCase(fetchReactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReactions.fulfilled, (state, action) => {
        state.loading = false;
        state.reactions = action.payload;
      })
      .addCase(fetchReactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create reaction
      .addCase(createReaction.fulfilled, (state, action) => {
        state.reactions.push(action.payload);
      })

      // Delete reaction by author
      .addCase(deleteReactionByAuthor.fulfilled, (state, action) => {
        state.reactions = state.reactions.filter(
          (reaction) => reaction.authorId !== action.payload
        );
      });
  },
});

export default reactionSlice.reducer;
