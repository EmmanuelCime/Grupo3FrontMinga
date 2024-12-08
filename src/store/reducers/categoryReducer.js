import { createAction, createReducer } from "@reduxjs/toolkit";
import { getCategory } from "../actions/categoryAction";

export const setSelectedCategory = createAction("category/setSelectedCategory")

const initialState = {
    allCategory: [],
    selectedCategory: null,
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

        .addCase(setSelectedCategory, (state,action) => {
            state.selectedCategory = action.payload
        })
})