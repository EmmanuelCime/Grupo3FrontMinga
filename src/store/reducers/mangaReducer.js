import { createReducer } from "@reduxjs/toolkit";
import { getMangas, setSearch } from "../actions/mangasAction";

const initialState = {
    allMangas: [],
    filteredMangas: [],
    search: "",
    loading: null,
    error: null,
}

export const mangaReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSearch, (state, action) => {
            state.search = action.payload
        })
        .addCase(getMangas.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getMangas.fulfilled, (state, action) => {
            state.loading = null
            state.allMangas = action.payload
            state.filteredMangas = action.payload
            state.error = null
        })
        .addCase(getMangas.rejected, (state, action) => {
            state.loading = null
            state.error = action.error.message
        })
        .addCase("SET_FILTERED_MANGAS", (state, action) => {
            state.filteredMangas = action.payload
        })
})