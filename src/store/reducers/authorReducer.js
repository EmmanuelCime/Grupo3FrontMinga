import { createReducer } from "@reduxjs/toolkit";
import { getAuthor, updateAuthor } from "../actions/authorAction";

const initialState = {
    allAuthor: [],
    loading: false,
    error: null,
}

export const authorReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getAuthor.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getAuthor.fulfilled, (state, action) => {
            state.loading = false
            state.allAuthor = action.payload
            state.error = null
        })
        .addCase(getAuthor.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        .addCase(updateAuthor.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(updateAuthor.fulfilled, (state,action)=> {
            state.loading = false
            state.error = null
            // Actualiza el author en la lista de `allAuthor`
            state.allAuthor = state.allAuthor.map((author) =>
                author && author?._id === action.payload._id ? action.payload : author
            )
        })
        .addCase(updateAuthor.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        
})