import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const uri_render = "https://grupo3backminga.onrender.com";

// Create a new reaction
export const createReaction = createAsyncThunk(
    'reactions/createReaction',
    async ({ chapterId, reactionType }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${uri_render}/api/reactions`, { 
                chapterId, 
                reactionType 
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Update an existing reaction
export const updateReaction = createAsyncThunk(
    'reactions/updateReaction',
    async ({ reactionId, reactionType }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${uri_render}/api/reactions/${reactionId}`, { 
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
            await axios.delete(`${uri_render}/api/reactions/${reactionId}`);
            return reactionId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Fetch reactions for a specific chapter
export const fetchChapterReactions = createAsyncThunk(
    'reactions/fetchChapterReactions',
    async (chapterId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${uri_render}/api/reactions/chapter/${chapterId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
