import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "https://v7g9j4-5050.csb.app/"

export const setSearch = createAction("SET_SEARCH")

/*export const getMangas = createAsyncThunk("GET_MANGAS",
    async (search = "", { rejectWithValue }) => {
        try {
            const response = await axios.get(`${uri_render}api/manga/all`)
            let mangas = response.data
            const filteredMangas = search
                ? mangas.filter((manga) =>
                    manga.title.toLowerCase().includes(search.toLowerCase())
                )
                : mangas
            return filteredMangas
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Error fetching Mangas")
        }
    })*/

export const getMangas = createAsyncThunk("GET_MANGAS", async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${uri_render}api/manga/all`)
                   
            return response.data.mangas
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Error fetching Mangas")
        }
    })