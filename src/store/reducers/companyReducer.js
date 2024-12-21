import { createReducer } from "@reduxjs/toolkit"
import { updateCompany, clearCompanyAction, getCompany, newCompany } from "../actions/companyAction"


const initialState = {
    allCompany: [],
    loading: false,
    error: null,
    updateCom: null
}

export const companyReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCompany.pending, (state) => {
            state.loading = true
            state.error = null
            state.updateCom = null
        })
        .addCase(getCompany.fulfilled, (state, action) => {
            state.loading = false
            state.allCompany = action.payload
            state.updateCom = null
            state.error = null
        })
        .addCase(getCompany.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.updateCom = null
        })

        .addCase(updateCompany.pending, (state) => {
            state.loading = true
            state.error = null
            state.updateCom = null
        })
        .addCase(updateCompany.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.updateCom = action.payload
        })
        .addCase(updateCompany.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
            state.updateCom = null
        })

        .addCase(newCompany.pending,(state)=>{
            state.loading = true
            state.error = null
            state.updateCom = null
        })
        .addCase(newCompany.fulfilled, (state,action)=>{
            state.loading = false
            state.allCompany = [...state.allCompany, action.payload]
            state.error = null
            state.updateCom = null
        })
        .addCase(newCompany.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload
            state.updateCom = null
        })

        .addCase(clearCompanyAction, (state) => {
            state.loading = false
            state.updateCom = null
            state.allCompany = null
            state.error = false
        })
})