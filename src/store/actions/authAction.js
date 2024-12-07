import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const uri_render = "https://grupo3backminga.onrender.com/"

export const setUser = createAction("setUser", (datos) => {
    return { payload: datos }
})

export const signOut = createAction("logout")

export const signIn = createAsyncThunk("login", async ({ email, password }, { rejectWithValue }) => {
    try {
        const credentials = { email, password }
        const response = await axios.post(`${uri_render}api/auth/signin`, credentials)
        localStorage.setItem("token", response.data.token)
        return {
            user: response.data.user,
            token: response.data.token,
        }
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Login Error credentials invalid")
    }
})