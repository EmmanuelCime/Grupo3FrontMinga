import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "http://localhost:8080/"//"https://grupo3backminga.onrender.com/"

export const getAuthor = createAsyncThunk("GET_AUTHOR", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${uri_render}api/authors/all`)
        return response.data.authors
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Author")
    }
})

export const updateAuthor = createAsyncThunk("UPDATE_AUTHOR", async ({updatedData},{rejectWithValue})=>{
    try {
        const response = await axios.put(`${uri_render}api/authors/update`,updatedData)
        
        return response.data.authors
    } catch (error) {
        console.error("Error during update:", error.response.data.message[0].description)
        return rejectWithValue(error.response?.data?.message) || "Error updating author"
    }
})