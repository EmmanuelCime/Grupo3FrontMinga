import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "http://localhost:8080/"//"https://grupo3backminga.onrender.com/"

export const getUser = createAsyncThunk("GET_USER", async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${uri_render}api/users/all`)
            console.log(response);
            
            return response.data.users
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Error fetching Mangas")
        }
    })