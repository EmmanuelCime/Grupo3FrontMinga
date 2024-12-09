import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const uri_render = "https://grupo3backminga.onrender.com/";

// Async thunk para crear un comentario
export const createComment = createAsyncThunk(
  'comments/createComment',
  async ({ chapterId, message, authorId, companyId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${uri_render}api/comment/create`, { 
        chapterId,
        message,
        authorId,    
        companyId, 
      });
    
      return response.data.comment;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk para obtener comentarios por capítulo
export const fetchCommentsByChapter = createAsyncThunk(
  'comments/fetchByChapter',
  async (chapterId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${uri_render}api/comment/commentByChapter/${chapterId}`);
      console.log(response.data.comment);
      return response.data.comment || response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk para actualizar un comentario
export const updateComment = createAsyncThunk(
  'comments/updateComment',
  async ({ commentId, message }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${uri_render}api/comment/update`, {
        _id: commentId,
        message,
      });

      // Devuelve solo el comentario actualizado desde el backend
      return response.data.comments;

    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
      return rejectWithValue(errorMessage);
    }
  }
);

// Async thunk para eliminar un comentario
export const deleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (commentId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${uri_render}api/comment/delete`, { 
        data: { _id: commentId }  
      });

      if (response.data.success) {
        return commentId;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);
