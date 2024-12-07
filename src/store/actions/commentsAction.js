import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommentsByChapter = createAsyncThunk(
  "comments/fetchByChapter",
  async (chapterId, { rejectWithValue }) => {
    try {
      console.log("Fetching comments for chapterId:", chapterId); // Debug
      const response = await axios.get(`/api/comments/commentByChapter/${chapterId}`);
      console.log("API Response:", response.data); // Debug
      return response.data.comment; // Cambia esto si el campo no es 'comment'
    } catch (error) {
      console.error("Error fetching comments:", error.response?.data || error.message); // Debug
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

