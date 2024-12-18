import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const uri_render = "https://grupo3backminga.onrender.com/"

export const setUser = createAction("setUser", (datos) => {
    return { payload: datos }
})

export const signOut = createAction("logout")
export const setSwitch = createAction("SET_SWITCH")
export const setUpdateAuthor = createAction("SET_UPDATE_AUTHOR")
export const setUpdateCompany = createAction("SET_UPDATE_COMPANY")
export const setSwitchSig = createAction("SET_SWITCH_SIGN_IN")

export const signIn = createAsyncThunk("login", async ({ email, password }, { rejectWithValue }) => {
    try {
        const credentials = { email, password }
        const response = await axios.post(`${uri_render}api/auth/signin`, credentials)
        localStorage.setItem("token", response.data.token)
        return {
            user: response.data.user,
            token: response.data.token,
            company: response.data.company,
            author: response.data.author
        }
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Login Error credentials invalid")
    }
})
export const signUp = createAsyncThunk("register", async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${uri_render}api/users/register`, user)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || "Registration failed")
    }
})