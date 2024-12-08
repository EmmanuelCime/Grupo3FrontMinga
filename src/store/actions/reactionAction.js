import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jc69yf-8080.csb.app/";

// Fetch reactions
export const fetchReactions = createAsyncThunk(
  "reaction/fetchReactions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}reactions/all`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create reaction
export const createReaction = createAsyncThunk(
  "reaction/createReaction",
  async (reactionData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}reactions/create`, reactionData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete reaction by author
export const deleteReactionByAuthor = createAsyncThunk(
  "reaction/deleteReactionByAuthor",
  async (authorId, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}reactions/deleteByAuthor`, { data: { authorId } });
      return authorId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
