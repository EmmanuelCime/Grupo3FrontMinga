import { createReducer } from "@reduxjs/toolkit";
import { getMangas, setSearch, updateManga } from "../actions/mangasAction";

const initialState = {
    allMangas: [],
    filteredMangas: [],
    search: "",
    loading: false,
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
            state.loading = false
            state.allMangas = action.payload
            state.filteredMangas = action.payload
            state.error = null
        })
        .addCase(getMangas.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        .addCase(updateManga.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(updateManga.fulfilled, (state,action)=> {
            state.loading = false
            state.error = null
            // Actualiza el manga en la lista de `allMangas`
            state.allMangas = state.allMangas.map((manga) =>
                manga && manga._id === action.payload._id ? action.payload : manga
            )
            // También actualiza los filtrados si es necesario
            state.filteredMangas = state.filteredMangas.map((manga) =>
                manga._id === action.payload._id ? action.payload : manga
            )
        })
        .addCase(updateManga.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        /*.addCase("SET_FILTERED_MANGAS", (state, action) => {
            state.filteredMangas = action.payload
        })*/
})