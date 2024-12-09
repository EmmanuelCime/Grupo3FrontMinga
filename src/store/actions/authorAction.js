import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "http://localhost:8080/"//"https://grupo3backminga.onrender.com/"

export const getAuthor = createAsyncThunk("GET_AUTHOR", async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    try {
        const response = await axios.get(`${uri_render}api/authors/all`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data.authors
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Author")
    }
})

export const updateAuthor = createAsyncThunk("UPDATE_AUTHOR", async ({updatedData},{rejectWithValue})=>{
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    try {
        const response = await axios.put(`${uri_render}api/authors/update`,updatedData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        
        return response.data.authors
    } catch (error) {
        console.error("Error during update:", error.response.data.message[0].description)
        return rejectWithValue(error.response?.data?.message) || "Error updating author"
    }
})

export const newAuthor = createAsyncThunk("newAuthor", async (newData, { rejectWithValue }) => {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    try {
        const response = await axios.post(`${uri_render}api/authors/create`, newData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Registration failed")
    }
})