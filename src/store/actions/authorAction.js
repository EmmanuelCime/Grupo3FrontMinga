import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "http://localhost:8080/"

export const getAuthor = createAsyncThunk("GET_AUTHOR", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${uri_render}api/authors/all`)
        console.log(response.data.authors)
        return response.data.authors
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Author")
    }
})