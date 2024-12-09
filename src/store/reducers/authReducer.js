import { createReducer } from "@reduxjs/toolkit"
import { signIn, setUser, signOut, signUp } from "../actions/authAction"


const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null,
    author: null,
    company: null,
    switchRole: false,
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
            state.company = null
            state.author = null
        })
        .addCase(signIn.fulfilled, (state, action) => {
            console.log(action.payload, "lo que esta en el back-------");
            
            state.loading = false
            state.error = null
            state.user = action.payload.user
            state.token = action.payload.token
            state.role = action.payload.user.role
            state.company = action.payload.company
            state.author = action.payload.author
            localStorage.setItem("token", action.payload.token)
        })
        .addCase(signIn.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.user = null
            state.token = null
            state.role = null
            state.company = null
            state.author = null
            localStorage.removeItem("token")
        })
        .addCase(setUser, (state, action) => {
            console.log(action.payload, "el actions");
            
            state.user = action.payload.data.user
            state.token = action.payload.token
            state.role = action.payload.data.user.role
            state.company = action.payload.data.company
            state.author = action.payload.data.author
        })
        .addCase(signOut, (state) => {
            localStorage.removeItem("token")
            state.user = null
            state.token = null
            state.error = null
            state.role = null
            state.company = null
            state.author = null
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