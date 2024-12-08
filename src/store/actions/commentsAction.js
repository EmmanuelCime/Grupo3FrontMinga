import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const uri_render = "https://v7g9j4-8080.csb.app";

// Async thunk para crear un comentario
export const createComment = createAsyncThunk(
  'comments/createComment',
  async ({ chapterId, message }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${uri_render}/api/comment/create`, { 
        chapterId, 
        message 
      });
      return response.data;
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
      const response = await axios.get(`${uri_render}/api/comment/commentByChapter/${chapterId}`);
      return response.data.comments || response.data; // Ajusta según la estructura de tu respuesta
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk para actualizar un comentario
// Async thunk para actualizar un comentario
export const updateComment = createAsyncThunk(
  'comments/updateComment',
  async ({ commentId, message }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${uri_render}/api/comment/update`, {
        _id: commentId,
        message,
      });

      // Devuelve solo el comentario actualizado desde el backend
      return response.data.comment;

    } catch (error) {
      // Maneja el caso donde no exista error.response
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
      const response = await axios.delete(`${uri_render}/api/comment/delete`, { 
        data: { _id: commentId }  // Asegúrate de que el parámetro se llame '_id' si así lo espera el backend
      });

      // Si la respuesta es exitosa, devuelve el commentId
      if (response.data.success) {
        return commentId; // Aquí se regresa el commentId para actualizar el estado
      } else {
        // Si la respuesta indica un fallo, se rechaza la promesa con el mensaje de error
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      // En caso de error, se maneja y se rechaza la promesa
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);





// actions con validacione de token
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const uri_render = "https://grupo3backminga.onrender.com/"


// // Async thunk para crear un comentario
// export const createComment = createAsyncThunk(
//   'comments/createComment',
//   async ({ chapterId, message }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${uri_render}/api/comments/create`, { 
//         chapterId, 
//         message 
//       }, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Async thunk para obtener comentarios por capítulo
// export const fetchCommentsByChapter = createAsyncThunk(
//   'comments/fetchByChapter',
//   async (chapterId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${uri_render}/api/comments/commentByChapter/${chapterId}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Async thunk para actualizar un comentario
// export const updateComment = createAsyncThunk(
//   'comments/updateComment',
//   async ({ commentId, message }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`${uri_render}/api/comments/update`, { 
//         commentId, 
//         message 
//       }, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Async thunk para eliminar un comentario
// export const deleteComment = createAsyncThunk(
//   'comments/deleteComment',
//   async (commentId, { rejectWithValue }) => {
//     try {
//       await axios.delete(`${uri_render}//api/comments/delete`, { 
//         data: { commentId },
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       return commentId;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );