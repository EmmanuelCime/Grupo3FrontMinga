import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "https://grupo3backminga.onrender.com";

export const fetchFavorites = createAsyncThunk(
    "favorites/fetch",
    async ({ authorId, companyId }, { rejectWithValue }) => {
        try {
            const query = authorId ? `author=${authorId}` : `company=${companyId}`;
            const { data } = await axios.get(`${uri_render}/favoriteManga?${query}`);
            return data.favorite;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Error fetching favorites");
        }
    }
);
