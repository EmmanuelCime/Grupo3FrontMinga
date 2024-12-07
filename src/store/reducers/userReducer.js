import { createReducer } from "@reduxjs/toolkit";
import { getUser } from "../actions/userAction";

const initialState = {
    allUser: [],
    loading: null,
    error: null,
}

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getUser.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.loading = null
            state.allUser = action.payload
            state.error = null
        })
        .addCase(getUser.rejected, (state, action) => {
            state.loading = null
            state.error = action.error.message
        })
})