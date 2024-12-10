import { createReducer } from "@reduxjs/toolkit";
import { getMangas, myMangaAction, setSearch, updateManga } from "../actions/mangasAction";

const initialState = {
    allMangas: [],
    filteredMangas: [],
    search: "",
    loading: false,
    error: null,
    myManga: [],
    loadinMyManga: false,
    errorMyManga: null
};

export const mangaReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSearch, (state, action) => {
            state.search = action.payload;
        })
        .addCase(getMangas.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getMangas.fulfilled, (state, action) => {
            state.loading = false;
            state.allMangas = action.payload;
            state.filteredMangas = action.payload;
            state.error = null;
        })
        .addCase(getMangas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateManga.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateManga.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.allMangas = state.allMangas.map((manga) =>
                manga && manga._id === action.payload._id ? action.payload : manga
            );
            state.filteredMangas = state.filteredMangas.map((manga) =>
                manga._id === action.payload._id ? action.payload : manga
            );
        })
        .addCase(updateManga.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(myMangaAction.pending, (state) => {
            state.loadinMyManga = true;
            state.errorMyManga = null;
            state.myManga = null;
        })
        .addCase(myMangaAction.fulfilled, (state, action) => {
            state.loadinMyManga = false;
            state.errorMyManga = null;
            state.myManga = action.payload;
        })
        .addCase(myMangaAction.rejected, (state, action) => {
            state.loadinMyManga = false;
            state.errorMyManga = action.payload;
            state.myManga = null;
        });
});