import { createReducer } from '@reduxjs/toolkit';
import {
    createReaction,
    updateReaction,
    deleteReaction,
    fetchChapterReactions
} from './reactionAction';

const initialState = {
    reactions: [],
    loading: false,
    error: null,
    userReaction: null
};

const reactionReducer = createReducer(initialState, (builder) => {
    builder
        // Create Reaction Cases
        .addCase(createReaction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createReaction.fulfilled, (state, action) => {
            state.loading = false;
            state.reactions.push(action.payload);
            state.userReaction = action.payload;
        })
        .addCase(createReaction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // Update Reaction Cases
        .addCase(updateReaction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateReaction.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.reactions.findIndex(r => r._id === action.payload._id);
            if (index !== -1) {
                state.reactions[index] = action.payload;
            }
            state.userReaction = action.payload;
        })
        .addCase(updateReaction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // Delete Reaction Cases
        .addCase(deleteReaction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteReaction.fulfilled, (state, action) => {
            state.loading = false;
            state.reactions = state.reactions.filter(r => r._id !== action.payload);
            state.userReaction = null;
        })
        .addCase(deleteReaction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // Fetch Chapter Reactions Cases
        .addCase(fetchChapterReactions.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchChapterReactions.fulfilled, (state, action) => {
            state.loading = false;
            state.reactions = action.payload.reactions;
            state.userReaction = action.payload.userReaction;
        })
        .addCase(fetchChapterReactions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
});

export default reactionReducer;