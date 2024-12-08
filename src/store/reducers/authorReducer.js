import { createReducer } from "@reduxjs/toolkit";
import { getAuthor } from "../actions/authorAction";

const initialState = {
    allAuthor: [],
    loading: false,
    error: null,
}

export const authorReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getAuthor.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getAuthor.fulfilled, (state, action) => {
            state.loading = false
            state.allAuthor = action.payload
            state.error = null
        })
        .addCase(getAuthor.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        
})