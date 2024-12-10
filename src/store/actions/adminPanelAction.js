import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const uri_render = "https://grupo3backminga.onrender.com/"

export const allCompanyAction = createAsyncThunk("ALL_COMPANY", async (token, { rejectWithValue })=>{
    try {
        const allCompany = await axios.get(`${uri_render}api/company/all`, {headers: {Authorization: `Bearer ${token}`}})
        return allCompany.data.companies

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error getting companies")
    }
})
export const allAuthorAction = createAsyncThunk("ALL_AUTHOR", async (token, { rejectWithValue })=>{
    try {
        console.log("entro a action author");
        
        const allAuthor = await axios.get(`${uri_render}api/authors/all`, {headers: {Authorization: `Bearer ${token}`}})
        console.log(allAuthor.data.authors, "testtttttt all author");
        
        return allAuthor.data.authors
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error getting author")
    }
})

export const UpdateAuthorActive = createAsyncThunk("UPDATE_AUTHOR_ACTIVE", async ({token, author}, { rejectWithValue })=>{
    try {
        const update = await axios.put(`${uri_render}api/authors/update`, author, {headers: {Authorization: `Bearer ${token}`}})
        return update.data.author
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error getting author")
    }
})

export const UpdateCompanyActive = createAsyncThunk("UPDATE_COMPANY_ACTIVE", async ({token, company}, { rejectWithValue })=>{
    try {
        const update = await axios.put(`${uri_render}api/company/update`, company, {headers: {Authorization: `Bearer ${token}`}})
        return update.data.company
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error getting author")
    }
})