import { createReducer } from "@reduxjs/toolkit"
import { signIn, setUser, signOut, signUp, setSwitch, setUpdateAuthor, setSwitchSig } from "../actions/authAction"

const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null,
    author: null,
    company: null,
    switchRole: false,
    switchSignIn: false,
    role: null
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(signIn.pending, (state) => {
            state.loading = true
            state.error = null
            state.switchSignIn = false
            state.user = null
            state.token = null
            state.role = null
            state.company = null
            state.author = null
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.loading = false
            state.switchSignIn = true
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
            state.switchSignIn = false
            state.error = action.payload
            state.user = null
            state.token = null
            state.role = null
            state.company = null
            state.author = null
            localStorage.removeItem("token")
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload.data.user
            state.token = action.payload.token
            state.role = action.payload.data.user.role
            state.company = action.payload.data.company
            state.author = action.payload.data.author
            state.switchSignIn = false
        })
        .addCase(signOut, (state) => {
            localStorage.removeItem("token")
            state.user = null
            state.token = null
            state.error = null
            state.role = null
            state.company = null
            state.author = null
            state.switchSignIn = false
        })
        .addCase(signUp.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.switchSignIn = false
          })
          .addCase(signUp.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user
            state.error = null;
            state.token = action.payload.token
            state.switchSignIn = false
            state.role = action.payload.user.role
            localStorage.setItem("token", action.payload.token)
          })
          .addCase(signUp.rejected, (state, action) => {
            state.loading = false;
            state.switchSignIn = false
            state.error = action.payload
            state.role = null
            state.user = null
          })
          .addCase(setSwitch, (state)=>{
            state.switchRole = !state.switchRole
          })
          .addCase(setUpdateAuthor, (state, action)=>{
            state.author = action.payload
          })
          .addCase(setSwitchSig, (state, action)=>{
            state.switchSignIn = state.switchSignIn
          })
})

export default authReducer