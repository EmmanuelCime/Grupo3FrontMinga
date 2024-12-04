import { createReducer } from "@reduxjs/toolkit";
import { getCategory } from "../actions/categoryAction";

const initialState = {
    allCategory: [],
    loading: null,
    error: null,
}

export const categoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCategory.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getCategory.fulfilled, (state, action) => {
            state.loading = null
            state.allCategory = action.payload
            state.error = null
        })
        .addCase(getCategory.rejected, (state, action) => {
            state.loading = null
            state.error = action.error.message
        })
})