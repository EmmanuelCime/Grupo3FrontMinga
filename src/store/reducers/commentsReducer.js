import { createSlice } from '@reduxjs/toolkit';
import { 
  fetchCommentsByChapter, 
  createComment, 
  updateComment, 
  deleteComment 
} from '../actions/commentsAction';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [], // Inicializa como array vacío
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch comments
    builder
      .addCase(fetchCommentsByChapter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommentsByChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = Array.isArray(action.payload)
          ? action.payload
          : (action.payload.comments || []); // Garantiza siempre un array
      })
      .addCase(fetchCommentsByChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch comments';
        state.comments = []; // Limpia los comentarios en caso de error
      });

    // Create comment
    builder
      .addCase(createComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload); // Agrega el nuevo comentario
      })
      .addCase(createComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update comment
    builder
      .addCase(updateComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.comments.findIndex(
          (comment) => comment._id === action.payload._id
        );
        if (index !== -1) {
          state.comments[index] = action.payload;
        }
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Delete comment
    builder
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Acción de eliminar comentario
      .addCase(deleteComment.fulfilled, (state, action) => {
        // Aquí eliminamos el comentario del estado
        state.comments = state.comments.filter(comment => comment._id !== action.payload);
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.error = action.payload || "Error deleting comment";
      });
  },
});

export default commentsSlice.reducer;
