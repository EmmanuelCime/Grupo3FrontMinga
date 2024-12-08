import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "https://grupo3backminga.onrender.com/"

export const getUser = createAsyncThunk("GET_USER", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${uri_render}api/users/all`)
        return response.data.users
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Mangas")
    }
})

export const signUp = createAsyncThunk("register", async ({ email, password, photo }, { rejectWithValue }) => {
    try {
        const user = { email, password, photo }
        const response = await axios.post(`${uri_render}api/users/register`, user)
        return response.data.response
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Registration failed")
    }
})