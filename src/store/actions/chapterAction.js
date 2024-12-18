import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "https://grupo3backminga.onrender.com/"

export const getChapter = createAsyncThunk("GET_CHAPTER", async (id, { rejectWithValue }) => {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    try {
        const response = await axios.get(`${uri_render}api/chapter/chapterByManga/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.data.chapters
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Category")
    }
})

export const getAllChapter = createAsyncThunk("GET_All_CHAPTER", async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    try {
        const response = await axios.get(`${uri_render}api/chapter/all`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.data.chapters
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error fetching Category")
    }
})

export const newChapter = createAsyncThunk("NEW_CHAPTER", async (_,{ newData }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${uri_render}api/chapter/create`, newData)
        return response.data.chapter
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error creating chapter")
    }
})