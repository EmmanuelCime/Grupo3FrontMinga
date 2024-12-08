import { createReducer } from "@reduxjs/toolkit";
import { getUser, signUp } from "../actions/userAction";

const initialState = {
    allUser: [],
    loading: false,
    error: null,
    user: null,
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

        .addCase(signUp.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(signUp.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload
            state.error = null;
          })
          .addCase(signUp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
          })
})