import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "https://grupo3backminga.onrender.com/"

export const getChapter = createAsyncThunk("GET_CHAPTER", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${uri_render}api/chapter/chapterByManga/${id}`)
        
        return response.data.chapters
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Category")
    }
})

export const getAllChapter = createAsyncThunk("GET_All_CHAPTER", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${uri_render}api/chapter/all`)

        return response.data.chapters
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Category")
    }
})


