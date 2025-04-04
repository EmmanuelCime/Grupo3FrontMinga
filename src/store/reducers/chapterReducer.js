import { createReducer } from "@reduxjs/toolkit";
import { getAllChapter, getChapter, newChapter } from "../actions/chapterAction";

const initialState = {
    allChapters: [],
    chapters: [],
    loading: null,
    error: null,
}

export const chapterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getChapter.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getChapter.fulfilled, (state, action) => {
            state.loading = null
            state.chapters = action.payload
            state.error = null
        })
        .addCase(getChapter.rejected, (state, action) => {
            state.loading = null
            state.error = action.error.message
        })
        .addCase(getAllChapter.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getAllChapter.fulfilled, (state, action) => {
            state.loading = null
            state.allChapters = action.payload
            state.error = null
        })
        .addCase(getAllChapter.rejected, (state, action) => {
            state.loading = null
            state.error = action.error.message
        })
        .addCase(newChapter.pending, (state) =>{
            state.loading = true
            state.error = null
        })
        .addCase(newChapter.fulfilled, (state,action)=>{
            state.loading = false
            state.chapters = [...state.chapters, action.payload]
            state.error = null
        })
        .addCase(newChapter.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload
        })
})