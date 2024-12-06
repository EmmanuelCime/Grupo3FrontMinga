/*import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "http://localhost:8080/"

export const getCategory = createAsyncThunk("GET_CATEGORY", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${uri_render}api/author/all`)
console.log(response.data.res);

        return response.data.res
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Author")
    }
})*/