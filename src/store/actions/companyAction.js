import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const uri_render = "https://grupo3backminga.onrender.com/"

export const clearCompanyAction = createAction("CLEAR_COMPANY_ACTION")

export const getCompany = createAsyncThunk("GET_COMPANY", async (_, { rejectedWithValue }) => {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    try {
        const response = await axios.get(`${uri_render}api/company/all`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data.company
    } catch (error) {
        return rejectedWithValue(error.message?.data?.message || "Error fetching Company")
    }
})

export const updateCompany = createAsyncThunk("UPDATE_COMPANY", async ({ updatedData, token }, { rejectedWithValue }) => {
    try {
        const response = await axios.put(`${uri_render}api/company/update`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data.company
    } catch (error) {
        return rejectedWithValue(error.response?.data?.message) || "Error updating company"
    }
})

export const newCompany = createAsyncThunk("newCompany", async (newData, { rejectWithValue }) => {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    console.log(newData.newData)
    try {
        const response = await axios.post(`${uri_render}api/company/create`, newData.newData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Registration failed")
    }
})