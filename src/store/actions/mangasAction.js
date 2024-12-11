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

    export const updateManga = createAsyncThunk("UPDATE_MANGA", async ({id, updatedData},{rejectWithValue})=>{
        try {
            const response = await axios.put(`${uri_render}api/manga/update/${id}`,updatedData)
            
            return response.data.manga
        } catch (error) {
            return rejectWithValue(error.response?.data?.message) || "Error updating manga"
        }
    })
    export const myMangaAction = createAsyncThunk("MY_MANGA", async ({author, company, token}, { rejectWithValue }) => {
        try {
            const url = author ? `${uri_render}api/manga/mangasByAuthorOrCompany?author=${author}` : `${uri_render}api/manga/mangasByAuthorOrCompany?company=${company}`
            const response = await axios.get(url, {headers: {Authorization: `Bearer ${token}`}});
            return response.data.mangas;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Error getting manga");
        }
    })

    /*export const newManga = createAsyncThunk("NEW_MANGA", async ({_,newData},{rejectWithValue})=>{

    })*/