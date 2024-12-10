import { createReducer } from "@reduxjs/toolkit";
import { getAuthor, newAuthor, updateAuthor, deleteAuthor, clearAuthorAction } from "../actions/authorAction";

const initialState = {
    allAuthor: [],
    loading: false,
    error: null,
    updateAut: null
}

export const authorReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getAuthor.pending, (state) => {
            state.loading = true
            state.error = null
            state.updateAut = null
        })
        .addCase(getAuthor.fulfilled, (state, action) => {
            state.loading = false
            state.allAuthor = action.payload
            state.error = null
            state.updateAut = null
        })
        .addCase(getAuthor.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.updateAut = null
        })

        .addCase(updateAuthor.pending, (state)=>{
            state.loading = true
            state.error = null
            state.updateAut = null
        })
        .addCase(updateAuthor.fulfilled, (state,action)=> {
            state.loading = false
            state.error = null
            state.updateAut = action.payload
        })
        .addCase(updateAuthor.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message
            state.updateAut = null
        })
        
        .addCase(newAuthor.pending,(state)=>{
            state.loading = true
            state.error = null
            state.updateAut = null
        })
        .addCase(newAuthor.fulfilled, (state,action)=>{
            state.loading = false
            state.allAuthor = [...state.allAuthor, action.payload]
            state.error = null
            state.updateAut = null
        })
        .addCase(newAuthor.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload
            state.updateAut = null
        })

        .addCase(deleteAuthor.pending, (state) => {
            state.loading = true
            state.error = null
            state.updateAut = null
        })
        .addCase(deleteAuthor.fulfilled, (state, action) => {
            state.loading = false
            state.allAuthor = state.allAuthor.filter((author) => author._id !== action.payload.id)
            state.error = null
            state.updateAut = null
        })
        .addCase(deleteAuthor.rejected, (state, action) => {
            state.loading = false
            state.updateAut = null
            state.error = action.payload
        })
        .addCase(clearAuthorAction, (state)=>{
            state.loading = false
            state.updateAut = null
            state.allAuthor = null
            state.error = false
        })
})