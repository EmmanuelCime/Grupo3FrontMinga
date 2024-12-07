import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "https://grupo3backminga.onrender.com/"

export const setSearch = createAction("SET_SEARCH")

export const getMangas = createAsyncThunk("GET_MANGAS", async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${uri_render}api/manga/all`)
                   
            return response.data.mangas
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Error fetching Mangas")
        }
    })