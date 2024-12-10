import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const uri_render = "https://grupo3backminga.onrender.com/";

// Create a new reaction
export const createReaction = createAsyncThunk(
    'reactions/createReaction',
    async ({ chapterId, reactionType, author, company }, { rejectWithValue }) => {
        try {
            const prop = author ? {authorId: author} :  {companyId: company}
            const response = await axios.post(`${uri_render}api/reaction/create`, { 
                chapterId, 
                reactionType,
                prop
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
// Update an existing reaction
export const updateReaction = createAsyncThunk(
    'reactions/updateReaction',
    async ({ reactionId, reactionType }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${uri_render}api/reaction/${reactionId}`, { 
                reactionType 
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Delete a reaction
export const deleteReaction = createAsyncThunk(
    'reactions/deleteReaction',
    async (reactionId, { rejectWithValue }) => {
        try {
            await axios.delete(`${uri_render}api/reaction/${reactionId}`);
            return reactionId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
