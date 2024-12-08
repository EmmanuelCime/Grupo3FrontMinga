import { createReducer } from "@reduxjs/toolkit"
import { signIn, setUser, signOut, signUp } from "../actions/authAction"


const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null,
    role: null
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(signIn.pending, (state) => {
            state.loading = true
            state.error = null
            state.user = null
            state.token = null
            state.role = null
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.user = action.payload.user
            state.token = action.payload.token
            state.role = action.payload.user.role
            localStorage.setItem("token", action.payload.token)
        })
        .addCase(signIn.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.user = null
            state.token = null
            state.role = null
            localStorage.removeItem("token")
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.role = action.payload.user.role
        })
        .addCase(signOut, (state) => {
            localStorage.removeItem("token")
            state.user = null
            state.token = null
            state.error = null
            state.role = null
        })
        .addCase(signUp.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(signUp.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user
            state.error = null;
            state.token = action.payload.token
            state.role = action.payload.user.role
            localStorage.setItem("token", action.payload.token)
          })
          .addCase(signUp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
            state.role = null
            state.user = null
          })
})

export default authReducer
